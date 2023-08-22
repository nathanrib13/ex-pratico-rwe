import { useNavigate } from "react-router-dom";
import HeaderStyled from "./style.js";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };


    return (
        <HeaderStyled>

            <img src="https://rwesistemas.com.br/wp-content/uploads/2021/09/Logo_RWE_Sistemas.png" />

            <div onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</div>
            {isOpen && (
                <section>
                    <ul>
                        <li>Editar Perfil</li>
                        <li>Sobre</li>
                        <li>FAQ</li>
                        <li onClick={logout}>Sair</li>
                    </ul>
                </section>
            )}


        </HeaderStyled>
    );
};

export default Header;