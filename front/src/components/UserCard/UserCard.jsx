/* eslint-disable react/prop-types */
import { useState } from "react";
import ModalEditUser from "../modalEditUser/ModalEditUser.jsx";
import { UserCardStyle } from "./style";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const UserCard = ({ userData, userProfileImage }) => {

    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  
           
    
    const openEditUserModal = () => {
        setIsModalEditOpen(true);
    };
    const closeEditUserModal = () => {
        setIsModalEditOpen(false);
    };
console.log(userData)
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
                <div className="socials-links">
                {userData?.facebook && (<a href={userData.facebook} target="_blank" rel="noopener noreferrer"><BsFacebook /></a>) }
                {userData?.instagram && (<a href={userData.instagram} target="_blank" rel="noopener noreferrer"><BsInstagram /></a>) }
                {userData?.twitter && (<a href={userData.twitter} target="_blank" rel="noopener noreferrer"><BsTwitter /></a>) }
                {userData?.linkedin && (<a href={userData.linkedin} target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>) }
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