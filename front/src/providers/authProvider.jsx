/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [responseUserData, setResponseUserData] = useState(null);
    const [userProfileImage, setUserProfileImage] = useState(null);

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("rwe:token");
            if (token) {
                try {
                    api.defaults.headers.common.Authorization = `Bearer ${token}`;
                    const responseUserData = await api.get("/users");
                    setResponseUserData(responseUserData.data);
                    const responseUserProfileImage = await api.get("/image/user/profile");
                    setUserProfileImage(`data:imgage/png;base64, ${responseUserProfileImage.data}`); 
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
          localStorage.setItem("rwe:token", token);
          navigate("dashboard");
        } catch (error) {
          if (error.response.status) alert("Login ou senha inválidos");
          console.log(error.response.status);
        }
      };
    

    return (
        <AuthContext.Provider
            value={{
                loading,
                responseUserData,
                userProfileImage,
                signIn
            }}>
            {children}
        </AuthContext.Provider>
    );
};
export { AuthContext, AuthProvider };