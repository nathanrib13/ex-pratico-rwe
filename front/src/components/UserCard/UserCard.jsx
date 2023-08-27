/* eslint-disable react/prop-types */
import { useState } from "react";
import ModalEditUser from "../modalEditUser/ModalEditUser.jsx";
import { UserCardStyle } from "./style";

const UserCard = ({ userData, userProfileImage }) => {

    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  
           
    
    const openEditUserModal = () => {
        setIsModalEditOpen(true);
    };
    const closeEditUserModal = () => {
        setIsModalEditOpen(false);
    };

    return (
        <UserCardStyle>
           
            <section className="image-container" onClick={openEditUserModal} >
                <img 
                src={userProfileImage || 'https://www.promoview.com.br/uploads/2017/04/b72a1cfe.png'}
                alt=""/>
                <div className="overlay">
                    <p>Ver Perfil</p>
                </div>
            </section>
            <div className="container-welcome">
                <div>
                    <h2>Bem vindo(a), {userData?.name} </h2>
                </div>
            </div>
            {isModalEditOpen && (
                <ModalEditUser
                    userProfileImage={userProfileImage}
                    userData={userData}
                    openEditUserModal={isModalEditOpen}
                    closeEditUserModal={closeEditUserModal}
                />
            )}
        </UserCardStyle>
    );
 }

export default UserCard;