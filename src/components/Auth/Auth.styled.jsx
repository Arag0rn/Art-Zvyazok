import styled from 'styled-components';
import {  Form, Field, ErrorMessage } from 'formik'
import { ReactComponent as Line } from "./Line.svg"

export const H1 = styled.h1`
    color: var(--h-1, #FF82C6);
    font-size: 26px;
    font-family: Montserrat Alternates;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
export const RegistrDiv = styled.div`

    display: flex;
    width: 548px;
    padding: 48px;
    flex-direction: column;
    align-items: center;
    border: solid 3px white;
    border-radius: 35px;
    margin-bottom: 314px;
`

export  const StyledForm = styled(Form)`
    margin-top: 24px;
    width: 100%;
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    width: 100%;
    display: flex;
    height: 63px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    font-family: Montserrat Alternates;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #FFF;
    align-self: stretch;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 20px;
    border: 1px solid #533778;
    &:hover {
        transform: scale(105%);
        cursor: pointer;
      }
`

export const EnterBtn = styled.button`
    width: 100%;
    display: flex;
    height: 63px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 20px;
    border: none;
    color: #FFF;
    font-family: Montserrat Alternates;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: linear-gradient(90deg, #FF269B 0%, #E227B3 31.04%, #C629CC 57.60%, #A92BE4 82.08%, #892DFF 100%);
    &:hover {
        transform: scale(105%);
        cursor: pointer;
    }
 
`
export const StyledField = styled(Field)`
    display: flex;
    height: 48px;
    padding: 12px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 15px;
    background-color: transparent;
    color: #78739A;
    border-radius: 15px;
    border: 1px solid var(--input-stroke, #D0BFED);
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;

`

export const DescrTxt = styled.p`
    color: #fff;
    background: #0d011d;
    padding: 0 8px;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;

`

export const UnderBtnBox = styled.div`
    display: flex;
    margin-top: 24px;
    gap: 8px;
`
export const UnderBtnTxt = styled.div`
    color: #FFF;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

`
export const RegistTxt = styled.div`
    font-family: Montserrat Alternates;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: var(--pink-btn, linear-gradient(90deg, #FF269B 0%, #E227B3 31.04%, #C629CC 57.60%, #A92BE4 82.08%, #892DFF 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
         transform: scale(105%);
         cursor: pointer;
      }
`

export const LineSvg = styled(Line)`
    stroke: #6f5492;
    z-index: -2;
    position: absolute;
    top: 50%;
    right: -210px;
`






// .main-head {
//     align-self: stretch;
//     color: #B182FF;
//     font-family: Montserrat Alternates;
//     font-size: 22px;
//     font-style: normal;
//     font-weight: 500;
//     line-height: 135%;
// }


// .dev-txt{
//     position: relative;
//     color: #FFF;
//     font-family: Montserrat;
//     font-size: 18px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//     padding: 0px 8px;
//     background: #0D011D;
   
// }
// .inpDev{
//     position: absolute;
//     top:50%;
//     right: -210px;
//     stroke: #6F5492;
//     z-index: -2;

// }

// }


// .selectProf{
//     display: flex;
//     height: 48px;
//     padding: 12px;
//     justify-content: space-between;
//     align-items: flex-start;
//     align-self: stretch;
//     border-radius: 15px;
//     color: #78739A;
//     font-family: Montserrat;
//     font-size: 18px;
//     font-weight: 400;
// }
// .underSellectTxt{
//     display: flex;
//     align-items: center;
//     justify-content: start;
//     gap: 8px;
// }
// .checkTxt{
//     color: #FFF;
//     font-family: Montserrat;
//     font-size: 18px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//     margin-right: 100px;
// }

// textarea{
//     display: flex;
//     padding: 12px;
//     height: 115px;
//     justify-content: space-between;
//     align-items: flex-start;
//     align-self: stretch;
//     border-radius: 15px;
//     color: #78739A;
//     font-family: Montserrat;
//     font-size: 18px;
//     font-weight: 400;
// }

// .linksHead{
//     color: #FFF;
//     text-align: left;
//     font-family: Montserrat;
//     font-size: 18px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
// }
// .linkInput{
//     background-color: transparent;
//     border: 1px solid var(--input-stroke, #D0BFED);
// }

// .linkBox {
//     display: grid;
//     grid-template-columns: 48px 162px 48px 162px;
//     row-gap: 16px;
//     column-gap: 8px;
// }
// .fotoTxt{
//     position: relative;
//     color: #FFF;
//     font-family: Montserrat;
//     font-size: 18px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//     margin-left: 40px;
//     &::before {
//         content: '';
//         top:-40px;
//         left: -110px;
//         position: absolute;
//         width: 101px;
//         height: 101px;
//         border-radius: 50%;
//         border: 1px solid white;
//         z-index: 20;

//     }
// }

// .UserfotoBox{
//     margin-top: 32px;
//     margin-bottom: 32px;
//     display: flex;
//     align-items: center;
// }
// .userDown{
//     position: relative;
//     &:before{
//     position: absolute;
//     border:1px solid #FFF;
//     border-radius: 50%;
   
// }

// }

// .ContinueRegistration{
  
//     top: 139px;
//     display: none;
//     width: 548px;
//     padding: 48px;
//     flex-direction: column;
//     align-items: center;
//     border: solid 3px white;
//     border-radius: 35px;
// }