import styled from 'styled-components';
import { ReactComponent as ArrowDown } from "./arrow-down.svg"
import { ReactComponent as ArrowUp } from "./arrow-up.svg"

export const ProfBox = styled.div`
    display: flex;
    position: relative;
    width: 316px;
    padding: 24px;
    flex-direction: column;
    gap: 24px;
    border-radius: 35px;
    border: 1px solid  #FFCCE8;
    margin-left: 32px;
    overflow: hidden;
`
export const ProfHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
 

   
`

export const ProfName = styled.span`
    margin-top: 12px;
    color: #FFF;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    

`

export const ProfTextBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

`
export const ProfTxt = styled.span`
    color: #FFF;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

`
export  const StyledArrowDown = styled(ArrowDown)`
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
`
export  const StyledArrowUp = styled(ArrowUp)`
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
`

export const Overview = styled.p`
    color: #FFF;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

`