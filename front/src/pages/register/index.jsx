import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Container from "./style";
import { registerSchema } from "../../providers/validator";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import api from "../../services/api";

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const registerReq = async (data) => {
        console.log('aaaaaaaa')
        try {
            await api.post("/users", data);
            alert("usuário criado com sucesso!");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            console.log(error);
            alert("nao foi possivel criar sua conta");
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
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" {...register("name")} placeholder="Digite seu nome" />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email")} placeholder="Digite seu email" />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}

                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" {...register("password")} placeholder="Digite sua senha" />
                    {errors.password && <span className="error-message">{errors.password.message}</span>}

                    <label htmlFor="about">Sobre</label>
                    <input type="text" id="about" {...register("about")} placeholder="Conte um pouco sobre voce" />
                    {errors.about && <span className="error-message">{errors.about.message}</span>}

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

                    <label htmlFor="image">Photo</label>
                    <input type="text" id="image" {...register("image")} placeholder="URL da Foto" />
                    {errors.image && <span className="error-message">{errors.image.message}</span>}

                    <button type="submit">Cadastrar</button>
                    <p>Ja tem uma conta?</p>
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