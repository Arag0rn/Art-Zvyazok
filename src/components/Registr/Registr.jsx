import { Formik} from 'formik';
import { H1, RegistrDiv, StyledForm, Button, EnterBtn, StyledField, DescrTxt, UnderBtnBox,
UnderBtnTxt, RegistTxt, LineSvg, ErMessName, ErMessPass} from './Registr.styled';
import { ReactComponent as GoogleIcon } from "./devicon_google.svg"
import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import * as Yup from 'yup';
import { logIn } from 'components/Api';
// import { setEmail } from 'Redux/userEmailSlice';


const validationSchema1 = Yup.object({
  email: Yup.string()
    .email('Невірний формат електронної пошти')
    .min(5, 'Must be min 5 characters')
    .max(30, 'Must be 30 characters or less')
    .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/, 'Допускаються лише латинські символи та цифри')
    .required('Поле "Email" є обов\'язковим'),
    password: Yup.string()
    .min(5, 'Довжина від 8 до 16 символів')
    .max(20, 'Довжина від 8 до 16 символів')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/, 'Пароль повинен містити щонайменше: одну велику букву, одну малу букву, одну цифру.')
    .required('Поле "Пароль" є обов\'язковим'),
  
});


export const Registr = ({onRegClick, onRegOpen}) => {
  const dispatch = useDispatch();


  const navigate  = useNavigate();
    return (
      <RegistrDiv className="registration">
        <H1>РЕЄСТРАЦІЯ</H1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema1}
          onSubmit={(values, actions) => {
            console.log('Submitted:', values);
            // dispatch(setEmail(values));
            dispatch(logIn(values));
            actions.resetForm();
            navigate('/profile')
          }}
        >
          <StyledForm>
            <StyledField type="text" placeholder="Email" name="email" />
            <ErMessName name="email" component="div"/>
            <StyledField type="password" placeholder="Пароль" name="password" />
            <ErMessPass name="password" component="div" />
            <EnterBtn className="btn enter-btn" type="submit">
              Продовжити
            </EnterBtn>
            
            <DescrTxt className="dev-txt"><LineSvg></LineSvg>або</DescrTxt>
            
            <Button className="btn google-btn">
            <GoogleIcon></GoogleIcon>
              Продовжити з Google
            </Button>
          </StyledForm>
        </Formik>
  
        <UnderBtnBox className="underBtnBox">
          <UnderBtnTxt className="underBtnTxr">Маєш акаунт?</UnderBtnTxt>
          <RegistTxt onClick={() => { onRegClick(); onRegOpen(); }} className="RegistTxt">Увійти</RegistTxt>
        </UnderBtnBox>
      </RegistrDiv>
    );
  };



