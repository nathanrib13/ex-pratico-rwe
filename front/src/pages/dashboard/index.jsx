import Container from "./style";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import UserCard from "../../components/UserCard/UserCard";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate()



    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("rwe:token");
            if (token) {
                try {
                    api.defaults.headers.common.Authorization = `Bearer ${token}`;
                    const response = await api.get("/users");
                    setUserData(response.data);
                } catch (error) {
                    console.log(error);

                }
            }
            else {
                navigate("/");
            }
        }
        loadUser();
    }, []);


    return (
        <Container>
            <Header />

            <UserCard userData={userData} />
            <h2>Meus Projetos</h2>
            <section className="projects">

                <div>
                    <h2>Controle Funcionarios</h2>
                    <p>Controle de entrada e saida de funcionários</p>
                    <button>Ver </button>
                </div>
                <div>
                    <h2>Exames Instanteneos</h2>
                    <p>Controle de entrada e saida de funcionários</p>
                    <button>Ver </button>
                </div>
                <div>
                    <h2>Segurança do Cliente</h2>
                    <p>Controle de entrada e saida de funcionários</p>
                    <button>Ver </button>
                </div>
                <div>
                    <h2>Planos Médicos</h2>
                    <p>Controle de entrada e saida de funcionários</p>
                    <button>Ver </button>
                </div>
                <div>
                    <h2>Chatboat diagnostico prévio</h2>
                    <p>Controle de entrada e saida de funcionários</p>
                    <button>Ver </button>
                </div>
                <div>
                    <h2>Forum médico</h2>
                    <p>Controle de entrada e saida de funcionários</p>
                    <button>Ver </button>
                </div>

            </section>



            <Footer />
        </Container>
    );
};

export default Dashboard;