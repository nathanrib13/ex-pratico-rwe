import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { useAuth } from "../../hooks/useAuth";
// import { loginData, loginSchema } from "../../providers/validator";
import Container from "./style";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { register } = useForm({
        resolver: zodResolver(),
    });

    // const { signIn } = useAuth();

    return (
        <Container>
            <div>
                <img src="https://rwesistemas.com.br/wp-content/uploads/2021/09/Logo_RWE_Sistemas.png" />
                <h2>Desenvolvimento e integração de aplicações médicas</h2>
            </div>

            <section>
                <form >
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
        </Container >
    );
};

export default Login;