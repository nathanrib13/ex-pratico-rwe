import { UserCardStyle } from "./style";


const UserCard = () => {

    return (
        <UserCardStyle>
            <img
                src="https://img.freepik.com/fotos-premium/pessoa-usando-telefone-celular-sobre-fundo-isolado_1368-174417.jpg?w=2000"
                alt=""
            />
            <div>
                <div>
                    <h2>Bem vinda, Gisele</h2>
                </div>
            </div>
        </UserCardStyle>
    );
};

export default UserCard;