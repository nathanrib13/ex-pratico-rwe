/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    console.log("no provider")
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);



    useEffect(() => {
        async function loadUser() {
            console.log("no usefffetr")
            const token = localStorage.getItem("rwe:token");
            if (token) {
                try {
                    api.defaults.headers.common.Authorization = `Bearer ${token}`;
                    const response = await api.get("/users");
                    console.log(response, "aaaaaaaa")
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

    return (
        <AuthContext.Provider
            value={{
                loading,
                userData,

            }}
        >
            {children}
            <Toaster position="top-center" richColors />
        </AuthContext.Provider>
    );
};
export { AuthContext, AuthProvider };