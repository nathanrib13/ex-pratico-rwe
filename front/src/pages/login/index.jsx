    import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../providers/validator";
import Container from "./style";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";



const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const { signIn } = useAuth();


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
                    {errors.email && <span className="error-message">{errors.email.message}</span>}

                    <label htmlFor="">Senha</label>
                    <input
                        type="password"
                        id="password"
                        {...register("password")}
                        placeholder="Digite sua senha"
                    />
                    {errors.password && <span className="error-message">{errors.password.message}</span>}

                    <button type="submit">Entrar</button>
                    <p> Ainda nao possui uma conta?</p>
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