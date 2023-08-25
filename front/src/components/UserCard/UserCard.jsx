/* eslint-disable react/prop-types */

import { UserCardStyle } from "./style";

const UserCard = ({ userData }) => {

    return (
        <UserCardStyle>
            <img
   src={userData?.image || 'https://www.promoview.com.br/uploads/2017/04/b72a1cfe.png'}                alt=""
            />
            <div>
                <div>
                    <h2>Bem vindo(a), {userData?.name} </h2>
                </div>
            </div>
        </UserCardStyle>
    );
};

export default UserCard;