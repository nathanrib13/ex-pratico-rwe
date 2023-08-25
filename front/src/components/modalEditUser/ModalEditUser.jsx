/* eslint-disable react/prop-types */
import { useState } from "react";
import { ModalContent, ModalWrapper } from "./style";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  updateUserSchema } from "../../providers/validator";



// eslint-disable-next-line react/prop-types
const ModalEditUser = ({
    closeEditUserModal, userData}) => {


     const [uploadImage, setUploadImage] = useState(false);


    const { register, handleSubmit } = useForm({
        resolver: zodResolver(updateUserSchema),
    });
   
        const openEditImage = () => {
            setUploadImage(true);
          };
    
        const closeEditImage = () => {
            setUploadImage(false);
          };
    

    const editUser = async (dataToSend) => {
        const response = await api.patch(`/users}`, dataToSend);
        if (response.status == 200) {
            alert.success("usuário editado com sucesso!");
        }
        setTimeout(() => {
            location.reload();
        }, 1000);
    };
    const sendImage = async (dataToSend) => {
        const response = await api.patch(`/image/user/profile}`, dataToSend);
        if (response.status == 200) {
            alert.success("imagem alterada com sucesso!");
        }
        setTimeout(() => {
            location.reload();
        }, 1000);
    };
 

    return (
        <ModalWrapper >
            <ModalContent>
                <h2>Editar Usuário</h2>
                <form onSubmit={handleSubmit(editUser)}>
                    <div className="ProfileCardStyle"  onClick={openEditImage} >
                        <img src={userData.image} alt="" />
                    </div>

                    <label htmlFor="">Nome</label>
                    <input type="text" id="name" {...register("name")}  placeholder={userData.name} />
                    <label htmlFor="">Email</label>
                    <input type="email" id="email" {...register("email")}  placeholder={userData.email}/>
                    <label htmlFor="">Senha</label>
                    <input type="password" id="password" {...register("password")}  />
                    <label htmlFor="">Sobre</label>
                    <textarea rows="6" cols="22" id="about" {...register("about")}  placeholder={userData.about} />
                    <label htmlFor="">Facebook</label>
                    <input type="text" id="about" {...register("about")} placeholder={userData.facebook}/>
                    <label htmlFor="">Instagram</label>
                    <input type="text" id="about" {...register("about")}  placeholder={userData.instagram} />
                    <label htmlFor="">Twitter</label >
                    <input type="text" id="about" {...register("about")}  placeholder={userData.twitter} />
                    <label htmlFor="">Linkedin</label>
                    <input type="text" id="about" {...register("about")}  placeholder={userData.linkedin} />

                    <div>
                        <button type="submit">Enviar</button>
                        <button onClick={closeEditUserModal} type="button">     Fechar
                        </button>
                    </div>
                    {uploadImage &&   <div className="modal-upload-Image">
                        <div>
                        <input type="file"/>
                        <button onClick={sendImage} type="button">  enviar </button>
                        <button onClick={closeEditImage}>fechar</button>
                        </div>
                     </div>}
                </form>
            
             
              
            </ModalContent>
            
        </ModalWrapper >
    );
};

export default ModalEditUser;