/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import HeaderStyled from "./style.js";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ModalEditUser from "../modalEditUser/ModalEditUser.jsx";

const Header = ({userData, userProfileImage}) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };
    const openEditUserModal = () => {
        setIsModalEditOpen(true);
    };
    const closeEditUserModal = () => {
        setIsModalEditOpen(false);
    };


    return (
        <HeaderStyled>

            <img src="https://rwesistemas.com.br/wp-content/uploads/2021/09/Logo_RWE_Sistemas.png" />

            <div onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</div>
            {isOpen && (
                <section>
                    <ul>
                        <li onClick={openEditUserModal}>Editar Perfil</li>
                        <li>Sobre</li>
                        <li>FAQ</li>
                        <li onClick={logout}>Sair</li>
                    </ul>
                </section>
            )}
            {isModalEditOpen && (
                <ModalEditUser
                    userProfileImage={userProfileImage}
                    userData={userData}
                    openEditUserModal={isModalEditOpen}
                    closeEditUserModal={closeEditUserModal}
                />
            )}

        </HeaderStyled>
    );
};

export default Header;