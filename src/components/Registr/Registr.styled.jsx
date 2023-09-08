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
export const ErMessName = styled(ErrorMessage)`
    position: absolute;
    top: 41%;
    color: red;
`
export const ErMessPass = styled(ErrorMessage)`
    position: absolute;
    top: 51%;
    color: red;
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

