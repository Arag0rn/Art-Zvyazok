
import { selectUser } from "Redux/selectors/authSelectors";
import { useSelector } from "react-redux";
import profileImg from './userfoto.png';
import { DeleteBtn, UserAnswers, UserCard, UserH3, UserList, UserSection, UserSocial } from "./User.styled";
import { ReactComponent as Instagram } from "../images/Instagram.svg";
import { ReactComponent as Discord } from "../images/discord.svg";
import { ReactComponent as Telegram } from "../images/telegram.svg";
import { ReactComponent as Spotify } from "../images/spotify.svg";
import { MainBtn } from "components/global-components/MainBtn/MainBtn";

export const User = () => {
    const ActivUser = useSelector(selectUser);
    console.log(ActivUser);
    return (
        <UserSection>
            <UserCard>
            
                <div>
                <img src={profileImg} alt="avatar" width="350" height="350" />
                <MainBtn className="btn downl-foto" type="submit">Завантажити фото</MainBtn>
                <DeleteBtn>Видалити фото</DeleteBtn>
                </div>
               
                <UserList>
                    <li>
                        <UserH3>Nickname:</UserH3>
                        <UserAnswers>{ActivUser.username}</UserAnswers>
                    </li>
                    <li>
                        <UserH3>Спеціалізація:</UserH3>
                        <UserAnswers>тут скоро буде</UserAnswers>
                    </li>
                    <li>
                        <UserH3>Місто:</UserH3>
                        <UserAnswers>{ActivUser.city}</UserAnswers>
                    </li>
                    <li>
                        <UserH3>Дистанційно:</UserH3>
                        <UserAnswers>{ActivUser.isRemote ? "так" : "ні"}</UserAnswers>
                    </li>
                    <li>
                        <UserH3>Опис:</UserH3>
                        <UserAnswers>{ActivUser.description}</UserAnswers>
                    </li>
                    <li>
                        <UserH3>Посилання на соцмережі:</UserH3>
                        <UserSocial><Instagram /><Discord /> <Telegram/> <Spotify/></UserSocial>
                    </li>

                    <li>
                    <MainBtn>Редагувати</MainBtn>
                    </li>
                </UserList>
            </UserCard>
        </UserSection>
    )
}