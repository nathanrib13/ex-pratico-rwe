import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Container from "./style";
import { registerSchema, registernData } from "../../providers/validator";
import { useNavigate } from "react-router-dom";
// import { Toaster, toast } from "sonner";
// import api from "../../services/api";

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm < registernData > ({
        resolver: zodResolver(registerSchema),
    });

    const registerReq = async (data) => {
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
                <h1>Link Up</h1>
                <h2>
                    {" "}
                    Crie sua conta e tenha o controle total de seus contatos mais
                    importantes
                </h2>
            </div>
            <form onSubmit={handleSubmit(registerReq)}>
                <h1>Crie sua conta</h1>
                <label htmlFor="">Nome</label>
                <input type="text" id="name" {...register("name")} />
                <label htmlFor="">Email</label>
                <input type="email" id="email" {...register("email")} />
                <label htmlFor="">Telefone</label>
                <input type="text" id="phone" {...register("phone")} />
                <label htmlFor="">Senha</label>
                <input type="password" id="password" {...register("password")} />
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