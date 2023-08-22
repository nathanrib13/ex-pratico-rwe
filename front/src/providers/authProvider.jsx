
import { ReactNode, createContext, useEffect, useState } from "react";
import { loginData } from "./validator";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { Contact } from "../pages/Dashboard";
import { Toaster, toast } from "sonner";
const AuthContext = createContext < IAuthContextValues > ({} as IAuthContextValues);

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        if (userData) {
            setContacts(userData.contacts);
        }
    }, [userData]);

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("contact-list:token");
            if (token) {
                try {
                    api.defaults.headers.common.Authorization = `Bearer ${token}`;
                    const response = await api.get("/users");
                    setUserData(response.data);
                    navigate("/dashboard");
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        }

        loadUser();
    }, [navigate]);

    const signIn = async (data) => {
        try {
            const response = await api.post("/login", data);
            const { token } = response.data;
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            localStorage.setItem("contact-list:token", token);
            navigate("dashboard");
        } catch (error) {
            if (error.response.status) toast.error("Login ou senha inválidos");
            console.log(error.response.status);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                signIn,
                loading,
                userData,
                contacts,
                setContacts,
            }}
        >
            {children}
            <Toaster position="top-center" richColors />
        </AuthContext.Provider>
    );
};
export { AuthContext, AuthProvider };