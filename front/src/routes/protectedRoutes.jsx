import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";




const ProtectedRoutes = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("contact-list:token");
            if (token) {
                try {
                    api.defaults.headers.common.Authorization = `Bearer ${token}`;
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

    if (loading) {
        return <div>Loading...</div>;
    }

    return <Outlet />;
};

export default ProtectedRoutes;