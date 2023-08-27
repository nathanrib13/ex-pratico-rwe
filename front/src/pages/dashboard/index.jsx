import Container from "./style";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import UserCard from "../../components/UserCard/UserCard";
import { useContext} from "react";
import { AuthContext } from "../../providers/authProvider";

const Dashboard = () => {
    
    const { responseUserData, userProfileImage } = useContext(AuthContext);

    return (
        <Container>
            <Header userData={responseUserData} userProfileImage={userProfileImage}  />

            <UserCard userData={responseUserData} userProfileImage={userProfileImage}/>
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