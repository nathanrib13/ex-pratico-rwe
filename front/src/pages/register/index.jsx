import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Container from "./style";
// import { registerSchema, registernData } from "../../providers/validator";
import { useNavigate } from "react-router-dom";
// import { Toaster, toast } from "sonner";
// import api from "../../services/api";

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(),
    });

    const registerReq = async () => {
        try {
            // await api.post("/users", data);
            // toast.success("usuário criado com sucesso!");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            console.log(error);
            // toast.error("nao foi possivel criar sua conta");
        }
    };

    return (
        <Container>
            <div>
                <div>
                    <img src="https://rwesistemas.com.br/wp-content/uploads/2021/09/Logo_RWE_Sistemas.png" />
                    <h2>Aplicações rápidas e customizadas com sua necessidade</h2>
                </div>
            </div>
            <form onSubmit={handleSubmit(registerReq)}>
                <h1>Crie sua conta</h1>
                <label htmlFor="">Nome</label>
                <input type="text" id="name" {...register("name")} placeholder="Digite seu nome" />
                <label htmlFor="">Email</label>
                <input type="email" id="email" {...register("email")} placeholder="Digite seu email" />
                <label htmlFor="">Telefone</label>
                <input type="text" id="phone" {...register("phone")} placeholder="Digite seu email" />
                <label htmlFor="">Senha</label>
                <input type="password" id="password" {...register("password")} placeholder="Digite sua senha" />
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
        </Container>
    );
};

export default Register;