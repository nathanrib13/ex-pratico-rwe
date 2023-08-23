/* eslint-disable react/prop-types */
import { useState } from "react";
import { ModalContent, ModalWrapper } from "./style";
// import api from "../../services/api";
// import { AuthContext } from "../../providers/authProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { updateUserData, updateUserSchema } from "../../providers/validator";
// import { useNavigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const ModalEditUser = ({
    closeEditUserModal }) => {


    const [confirmDelete, setConfirmDelete] = useState(false);

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(),
    });
    const deleteUser = async () => {
        setConfirmDelete(true);

        setTimeout(() => {
            setConfirmDelete(false);
        }, 2000);

        // if (confirmDelete) {
        //     // const response = await api.delete(`/users/${userData?.id}`);
        //     if (response.status == 204) {
        //         toast.success("Usuario excluido com sucesso! Adeus :(");
        //         setTimeout(() => {
        //             localStorage.clear();
        //             navigate("/");
        //         }, 2000);
        //     }
        // }
    };

    const editUser = async () => {
        // const response = await api.patch(`/users/${userData?.id}`, dataToSend);
        // if (response.status == 200) {
        //     toast.success("usuário editado com sucesso!");
        // }
        // setTimeout(() => {
        //     location.reload();
        // }, 1000);
    };

    return (
        <ModalWrapper >
            <ModalContent>
                <h2>Editar Usuário</h2>
                <form onSubmit={handleSubmit(editUser)}>
                    <div className="ProfileCardStyle" >
                        <img src="https://wp-content.bluebus.com.br/wp-content/uploads/2017/03/31142426/twitter-novo-avatar-padrao-2017-bluebus-660x440.png" />
                    </div>

                    <label htmlFor="">Nome</label>
                    <input type="text" id="name" {...register("name")} placeholder="Digite seu nome" />
                    <label htmlFor="">Email</label>
                    <input type="email" id="email" {...register("email")} placeholder="Digite seu email" />
                    <label htmlFor="">Senha</label>
                    <input type="password" id="password" {...register("password")} placeholder="Digite sua senha" />
                    <label htmlFor="">Sobre</label>
                    <textarea rows="6" cols="22" id="about" {...register("about")} placeholder="Conte um pouco sobre voce" />
                    <label htmlFor="">Facebook</label>
                    <input type="text" id="about" {...register("about")} placeholder="digite seu faceboook" />
                    <label htmlFor="">Instagram</label>
                    <input type="text" id="about" {...register("about")} placeholder="digite seu Twitter" />
                    <label htmlFor="">Twitter</label>
                    <input type="text" id="about" {...register("about")} placeholder="digite seu Twitter" />
                    <label htmlFor="">Linkedin</label>
                    <input type="text" id="about" {...register("about")} placeholder="digite seu Linkedin" />

                    <div>
                        <button type="submit">Enviar</button>
                        <button onClick={closeEditUserModal} type="button">     Fechar
                        </button>
                    </div>

                </form>
                <button className="deleteUser" onClick={deleteUser}>
                    {" "}
                    {confirmDelete ? "Confirmar?" : "Excluir Perfil"}
                </button>
            </ModalContent>
        </ModalWrapper >
    );
};

export default ModalEditUser;