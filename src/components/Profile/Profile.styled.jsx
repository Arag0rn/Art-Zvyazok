import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ProfCard = styled.div`
    display: flex;
    margin: 0 auto;
    width: 1128px;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    border-radius: 35px;
    border: 1px solid var(--form-stroke, #FFCCE8);

`
export  const StyledForm = styled(Form)`
    position: relative;
    margin-top: 24px;
    width: 100%;
    display: flex;
    gap: 24px;
    flex-direction: column;
    justify-content: center;
  
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
    color:#FFFFFF;
    border-radius: 15px;
    border: 1px solid var(--input-stroke, #8B41E0);
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;

`

export const SelelectProf = styled.select`

    display: flex;
    height: 48px;
    padding: 12px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 15px;
    color: #78739A;
    border: 1px solid var(--input-stroke, #8B41E0);
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    background-color: transparent;

`

export const UnderSellectTxt = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
`
export const CheckBox = styled(Field)`
    background-color: transparent;
`


export const ErMessName = styled(ErrorMessage)`
    position: absolute;
    top: 49px;
    color: red;
`

export const CheckTxt = styled.div`
    color: #FFF;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 100px;
    

` 
export const StyledTextarea = styled(Field)`
    display: flex;
    padding: 12px;
    height: 115px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 15px;
    border: 1px solid var(--input-stroke, #8B41E0);
    color: #78739A;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    background-color: transparent;

`

export const LinksH3 = styled.h3`
    color: #FFF;
    text-align: left;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const LinkField = styled(Field)`
    background-color: transparent;
    border: 1px solid var(--input-stroke, #D0BFED);
    display: flex;
    padding: 12px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 15px;
    color: #78739A;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
  
`

export const LinkBox = styled.div`
    display: grid;
    grid-template-columns: 48px 162px 48px 162px;
    row-gap: 16px;
    column-gap: 8px;
`

export const UserfotoBox = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;

`
export const FotoTxt = styled.div`
    position: relative;
    color: #FFF;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 40px;
    &::before {
        content: '';
        top:-40px;
        left: -110px;
        position: absolute;
        width: 101px;
        height: 101px;
        border-radius: 50%;
        border: 1px solid white;
        z-index: 20;

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