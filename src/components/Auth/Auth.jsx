import { Formik, Form, Field, ErrorMessage } from 'formik';
import { H1, RegistrDiv, StyledForm, Button, EnterBtn, StyledField, DescrTxt, UnderBtnBox,
UnderBtnTxt, RegistTxt, LineSvg} from './Auth.styled';
import { ReactComponent as GoogleIcon } from "./devicon_google.svg"
import { ReactComponent as Line } from "./Line.svg"

export const Auth = () => {
    return (
      <RegistrDiv className="registration">
        <H1>ВХІД В АКАУНТ</H1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values, actions) => {
            // Ваша логика обработки данных формы
            console.log('Submitted:', values);
            actions.resetForm();
          }}
        >
          <StyledForm>
            <StyledField type="text" placeholder="Email" name="email" />
            <StyledField type="password" placeholder="Пароль" name="password" />
            <EnterBtn className="btn enter-btn" type="submit">
              Увійти
            </EnterBtn>
            
            <DescrTxt className="dev-txt"><LineSvg></LineSvg>або</DescrTxt>
            
            <Button className="btn google-btn">
            <GoogleIcon></GoogleIcon>
              Продовжити з Google
            </Button>
          </StyledForm>
        </Formik>
  
        <UnderBtnBox className="underBtnBox">
          <UnderBtnTxt className="underBtnTxr">Вперше тут?</UnderBtnTxt>
          <RegistTxt className="RegistTxt">Зареєструватися</RegistTxt>
        </UnderBtnBox>
      </RegistrDiv>
    );
  };


export const AuthContinue = () => {
    return (
        <div className="ContinueRegistration">
  <h1>РЕЄСТРАЦІЯ</h1>
  <Formik
    initialValues={{
      nickname: '',
      specialization: '',
      city: '',
      remoteWork: false,
      profileOverview: '',
      instagram: '',
      discord: '',
      telegram: '',
      spotify: '',
    }}
    onSubmit={(values, actions) => {
      actions.resetForm();
    }}
  >
  <Form>
      <Field type="text" placeholder="Nickname"/>
      <select className="selectProf" id="single">
          <option value="">--Спеціалізація--</option>
          <option value="value 1">Value 1</option>
          <option value="value 2">Value 2</option>
          <option value="value 3">Value 3</option>
        </select>
        <Field type="text" placeholder="Місто"/>
        <div class="underSellectTxt">
          <Field type="checkbox"/>
          <div className="checkTxt">Я можу працювати дистанційно</div>
        </div>
        <Field
        as="textarea"
        name="profileOverview"
        cols="30"
        rows="10"
        placeholder="Опис профілю"
      >

      </Field>
        <h3 className="linksHead">Посилання на соцмережі:</h3>
        <div className="linkBox">
            <Field className="linkInput" type="text" placeholder="Instagram"/>

            <Field className="linkInput" type="text" placeholder="Discord"/>

            <Field className="linkInput" type="text" placeholder="Telegram"/>

            <Field className="linkInput" type="text" placeholder="Spotify"/>
        </div>
        <div className="UserfotoBox">
           <div className="fotoTxt">Завантажити фото профілю</div>
        </div>
      <button className="btn enter-btn">Зареєструватися</button>

  </Form>
  </Formik>
  </div>
    );
}
