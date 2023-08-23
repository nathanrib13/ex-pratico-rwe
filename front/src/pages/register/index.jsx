import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Container from "./style";
import { registerSchema } from "../../providers/validator";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import api from "../../services/api";

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const registerReq = async (data) => {
        console.log('aaaaaaaa')
        try {
            await api.post("/users", data);
            toast.success("usuário criado com sucesso!");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            console.log(error);
            toast.error("nao foi possivel criar sua conta");
        }
    };

    return (
        <Container>
            <div>
                <img src="https://rwesistemas.com.br/wp-content/uploads/2021/09/Logo_RWE_Sistemas.png" />
                <h2>Aplicações rápidas e customizadas com sua necessidade</h2>
            </div>
            <section>
                <form onSubmit={handleSubmit(registerReq)}>
                    <h1>Crie sua conta</h1>
                    <label htmlFor="">Nome</label>
                    <input type="text" id="name" {...register("name")} placeholder="Digite seu nome" />
                    <label htmlFor="">Email</label>
                    <input type="email" id="email" {...register("email")} placeholder="Digite seu email" />
                    <label htmlFor="">Senha</label>
                    <input type="password" id="password" {...register("password")} placeholder="Digite sua senha" />
                    <label htmlFor="">Sobre</label>
                    <input type="text" id="about" {...register("about")} placeholder="Conte um pouco sobre voce" />
                    <label htmlFor="">Facebook</label>
                    <input type="text" id="facebook" {...register("facebook")} placeholder="Conte um pouco sobre voce" />
                    <label htmlFor="">Instagram</label>
                    <input type="text" id="instagram" {...register("instagram")} placeholder="Conte um pouco sobre voce" />
                    <label htmlFor="">Twitter</label>
                    <input type="text" id="twitter" {...register("twitter")} placeholder="Conte um pouco sobre voce" />
                    <label htmlFor="">Linkedin</label>
                    <input type="text" id="linkedin" {...register("linkedin")} placeholder="Conte um pouco sobre voce" />
                    <label htmlFor="">Photo</label>
                    <input type="text" id="photo" {...register("profilePhoto")} placeholder="Conte um pouco sobre voce" />

                    <button type="submit">Cadastrar</button>
                    <span>Ja tem uma conta?</span>
                    <button
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        {" "}
                        Faça Login
                    </button>
                </form>
            </section>
            <Toaster position="top-center" richColors />
        </Container>
    );
};

export default Register;