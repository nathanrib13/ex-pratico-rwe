import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { loginSchema } from "../../providers/validator";
import Container from "./style";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";


const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const signIn = async (data) => {

        try {
            const response = await api.post("/login", data);
            const { token } = response.data;
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            localStorage.setItem("rwe:token", token);
            navigate("/dashboard");
        } catch (error) {
            if (error.response.status) toast.error("Login ou senha inválidos");
            console.log(error.response.status);
        }
    };


    return (
        <Container>
            <div>
                <img src="https://rwesistemas.com.br/wp-content/uploads/2021/09/Logo_RWE_Sistemas.png" />
                <h2>Desenvolvimento e integração de aplicações médicas</h2>
            </div>

            <section>
                <form onSubmit={handleSubmit(signIn)}>
                    <h1>Login</h1>
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        placeholder="Digite seu email"
                    />
                    <label htmlFor="">Senha</label>
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        placeholder="Digite sua senha"
                    />

                    <button type="submit">Entrar</button>
                    <span> Ainda nao possui uma conta?</span>
                    <button
                        onClick={() => {
                            navigate("/register");
                        }}
                    >
                        {" "}
                        Registre grátis
                    </button>
                </form>
            </section >
            <Toaster position="top-center" richColors />

        </Container >
    );
};

export default Login;