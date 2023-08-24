/* eslint-disable react/prop-types */

import { UserCardStyle } from "./style";

const UserCard = ({ userData }) => {

    return (
        <UserCardStyle>
            <img
                src={userData?.image}
                alt=""
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