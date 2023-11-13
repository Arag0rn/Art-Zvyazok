import { ProfCard } from './Profile.styled';
import { Formik } from 'formik';
import {
  StyledForm,
  StyledField,
  SelelectProf,
  UnderSellectTxt,
  CheckTxt,
  StyledTextarea,
  LinksH3,
  LinkField,
  LinkBox,
  EnterBtn,
  CheckBox,
  ErMessName,
} from './Profile.styled';
// import { ReactComponent as Instagram } from '../ContinueReg/instagram.svg';
// import { ReactComponent as Discord } from '../ContinueReg/discord.svg';
// import { ReactComponent as Telegram } from '../ContinueReg/telegram.svg';
// import { ReactComponent as Spotify } from '../ContinueReg/spotify.svg';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'Redux/selectors/authSelectors';
import { register } from 'components/api';

const validationSchema1 = Yup.object({
  username: Yup.string()
    .min(2, 'мінімум 2 символи')
    .max(25, 'максимум 25 символів')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ']{2,25}$/,
      'Допускаються лише латинські та українські букви'
    )
    .required('Поле "Nickname" є обов\'язковим'),
});

export const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector(getUser);

  const handleSubmit = values => {
    const data = { ...user.user, ...values };
    dispatch(register(data));
  };

  return (
    <ProfCard>
      <Formik
        initialValues={{
          isRemote: false,
          username: '',
          city: '',
          instagram: '',
          discord: '',
          telegram: '',
          spotify: '',
        }}
        validationSchema={validationSchema1}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm(values);
        }}
      >
        <StyledForm>
          <StyledField type="text" placeholder="Nickname" name="username" />
          <ErMessName name="username" component="div" />
          <SelelectProf className="selectProf" id="single">
            <option value="">--Спеціалізація--</option>
            <option value="value 1">Музикант</option>
            <option value="value 2">Value 2</option>
            <option value="value 3">Value 3</option>
          </SelelectProf>
          <StyledField type="text" placeholder="Місто" name="city" />
          <UnderSellectTxt className="underSellectTxt">
            <CheckBox type="checkbox" name="isRemote" />
            <CheckTxt className="checkTxt">
              Я можу працювати дистанційно
            </CheckTxt>
          </UnderSellectTxt>
          <StyledTextarea
            as="textarea"
            name="profileOverview"
            cols="30"
            rows="10"
            placeholder="Опис профілю"
          />
          <LinksH3 className="linksHead">Посилання на соцмережі:</LinksH3>
          <LinkBox className="linkBox">
            {/* <Instagram></Instagram> */}
            <LinkField
              className="linkInput"
              type="text"
              placeholder="Instagram"
              name="instagram"
            />
            {/* <Discord></Discord> */}
            <LinkField
              className="linkInput"
              type="text"
              placeholder="Discord"
              name="discord"
            />
            {/* <Telegram></Telegram> */}
            <LinkField
              className="linkInput"
              type="text"
              placeholder="Telegram"
              name="telegram"
            />
            {/* <Spotify></Spotify> */}
            <LinkField
              className="linkInput"
              type="text"
              placeholder="Spotify"
              name="spotify"
            />
          </LinkBox>

          <EnterBtn className="btn enter-btn" type="submit">
            Зареєструватися
          </EnterBtn>
        </StyledForm>
      </Formik>
    </ProfCard>
  );
};
