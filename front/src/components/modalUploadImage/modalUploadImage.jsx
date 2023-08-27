/* eslint-disable react/prop-types */
import { ModalContent, ModalWrapper } from "../modalEditUser/style";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  updateUserImage } from "../../providers/validator";



const ModalUploadImage = ({
    closeEditImage}) => {

     const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(updateUserImage),
    });

    
    const sendImage = async (dataToSend) => {
        try {
            const formData = new FormData();
            formData.append("file", dataToSend?.image[0]);
            const response = await api.post(`image/user/profile`, formData, {
                "Content-Type": "multipart/form-data",
            })
            if (response.status == 200) {
                alert("imagem alterada com sucesso!");
                setTimeout(() => {
                    location.reload();
                  }, 500);
            }
        } catch (error) {
            console.error(error) 
        }
    };
 

    return (
        <ModalWrapper >
            <ModalContent>
            <uploadImage>
                        <form onSubmit={handleSubmit(sendImage)}>
                        <input type="file" {...register("image")}/>
                        {errors.image && <span className="error-message">{errors.image.message}</span>}
                        <div>
                        <button type="submit">  enviar </button>
                        <button onClick={closeEditImage}>fechar</button>
                        </div>
                        </form>
                        
            </uploadImage>

            
             
            <button type="button"className="close-modal" onClick={closeEditImage}>x</button>
            </ModalContent>
            
        </ModalWrapper >
    );
};

export default ModalUploadImage