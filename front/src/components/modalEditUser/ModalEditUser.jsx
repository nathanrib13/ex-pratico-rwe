/* eslint-disable react/prop-types */
import { useState } from "react";
import { ModalContent, ModalWrapper } from "./style";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  updateUserSchema } from "../../providers/validator";
import ModalUploadImage from "../modalUploadImage/modalUploadImage";



// eslint-disable-next-line react/prop-types
const ModalEditUser = ({
    closeEditUserModal, userData, userProfileImage}) => {
     const [uploadImage, setUploadImage] = useState(false);

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(updateUserSchema),
    });
   
    const openEditImage = () => {
        setUploadImage(true);
    };

    const closeEditImage = () => {
        setUploadImage(false);
    };
    


    const editUser = async (dataToSend) => {
        const response = await api.patch(`/users`, dataToSend, {
    
          })
        if (response.status == 200) {
            alert("usuário editado com sucesso!");
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
                        <img    src={userProfileImage || 'https://www.promoview.com.br/uploads/2017/04/b72a1cfe.png'}                alt=""
 />
                    </div>

                    <label htmlFor="">Nome</label>
                    <input type="text" id="name" {...register("name")}  placeholder={userData?.name} />
                    <label htmlFor="">Email</label>
                    <input type="email" id="email" {...register("email")}  placeholder={userData?.email}/>
                    <label htmlFor="">Senha</label>
                    <input type="password" id="password" {...register("password")}  />
                    <label htmlFor="">Sobre</label>
                    <textarea rows="6" cols="22" id="about" {...register("about")}  placeholder={userData?.about} />
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text" id="facebook" {...register("facebook")} placeholder="URL do Facebook" />
                    {errors.facebook && <span className="error-message">{errors.facebook.message}</span>}

                    <label htmlFor="instagram">Instagram</label>
                    <input type="text" id="instagram" {...register("instagram")} placeholder="URL do Instagram" />
                    {errors.instagram && <span className="error-message">{errors.instagram.message}</span>}

                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" id="twitter" {...register("twitter")} placeholder="URL do Twitter" />
                    {errors.twitter && <span className="error-message">{errors.twitter.message}</span>}

                    <label htmlFor="linkedin">Linkedin</label>
                    <input type="text" id="linkedin" {...register("linkedin")} placeholder="URL do Linkedin" />
                    {errors.linkedin && <span className="error-message">{errors.linkedin.message}</span>}

                    <div>
                        <button type="submit">Enviar</button>
                        
                    </div>
                    

                </form>
                {uploadImage &&   <ModalUploadImage closeEditImage={closeEditImage}/> }
            
             
            <button type="button"className="close-modal" onClick={closeEditUserModal}>x</button>
            </ModalContent>
            
        </ModalWrapper >
    );
};

export default ModalEditUser;