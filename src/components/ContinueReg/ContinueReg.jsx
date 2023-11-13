import { Formik } from 'formik';
import {
  RegistrForm,
  StyledForm,
  StyledField,
  SelelectProf,
  UnderSellectTxt,
  CheckTxt,
  StyledTextarea,
  LinksH3,
  LinkField,
  LinkBox,
  UserfotoBox,
  FotoTxt,
  EnterBtn,
  H1,
  CheckBox,
  ErMessName,
} from './ContinueReg.styled';
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Discord } from './discord.svg';
import { ReactComponent as Telegram } from './telegram.svg';
import { ReactComponent as Spotify } from './spotify.svg';
import { ReactComponent as LoadImg } from './Group.svg';
import * as Yup from 'yup';
// import { RegNewUser } from 'components/Api';

const validationSchema1 = Yup.object({
  nickname: Yup.string()
    .min(2, 'мінімум 2 символи')
    .max(25, 'максимум 25 символів')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ']{2,25}$/,
      'Допускаються лише латинські та українські букви'
    )
    .required('Поле "Nickname" є обов\'язковим'),
});

export const AuthContinue = () => {
  return (
    <RegistrForm className="ContinueRegistration">
      <H1>РЕЄСТРАЦІЯ</H1>
      <Formik
        initialValues={{
          toggle: false,
          checked: [],
          nickname: '',
          city: '',
          instagram: '',
          discord: '',
          telegram: '',
          spotify: '',
        }}
        validationSchema={validationSchema1}
        onSubmit={(values, actions) => {
          console.log(values);
          // RegNewUser();
          // getTrendingMovie()
          // GetNewUser();
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledField type="text" placeholder="Nickname" name="nickname" />
          <ErMessName name="nickname" component="div" />
          <SelelectProf className="selectProf" id="single">
            <option value="">--Спеціалізація--</option>
            <option value="value 1">Value 1</option>
            <option value="value 2">Value 2</option>
            <option value="value 3">Value 3</option>
          </SelelectProf>
          <StyledField type="text" placeholder="Місто" name="city" />
          <UnderSellectTxt className="underSellectTxt">
            <CheckBox type="checkbox" name="toggle" />
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
            <Instagram></Instagram>
            <LinkField
              className="linkInput"
              type="text"
              placeholder="Instagram"
              name="instagram"
            />
            <Discord></Discord>
            <LinkField
              className="linkInput"
              type="text"
              placeholder="Discord"
              name="discord"
            />
            <Telegram></Telegram>
            <LinkField
              className="linkInput"
              type="text"
              placeholder="Telegram"
              name="telegram"
            />
            <Spotify></Spotify>
            <LinkField
              className="linkInput"
              type="text"
              placeholder="Spotify"
              name="spotify"
            />
          </LinkBox>
          <UserfotoBox className="UserfotoBox">
            <LoadImg></LoadImg>
            <FotoTxt className="fotoTxt">Завантажити фото профілю</FotoTxt>
          </UserfotoBox>
          <EnterBtn className="btn enter-btn" type="submit">
            Зареєструватися
          </EnterBtn>
        </StyledForm>
      </Formik>
    </RegistrForm>
  );
};
