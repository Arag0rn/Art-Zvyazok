import { ContainerS, ContentWraper } from "./Container.styled";
import { Auth } from "components/Auth/Auth";
import { MainTxt } from "components/Main.txt/Main.txt";
import { Registr } from "components/Registr/Registr";
import { useState } from "react";
import { AuthContinue } from "components/ContinueReg/ContinueReg";

export const Container = () => {
    const [isRegistrOpen, setIsRegistrOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(true);
    const [isContinueReg, setIsContinueReg] = useState(false);
    


    return <ContainerS>
        <ContentWraper>
       {isAuthOpen &&(<Auth onRegClick={() => setIsRegistrOpen(true)} onRegOpen={() => setIsAuthOpen(false)}></Auth>)} 
        {isRegistrOpen &&(<Registr 
        onRegClick={() => setIsRegistrOpen(false)} 
        onRegOpen={() => setIsAuthOpen(true)} 
        onContPress={() => setIsRegistrOpen(false)}
        onContOpen={()=> setIsContinueReg(true)}
        ></Registr>)}
      {isContinueReg && (<AuthContinue ></AuthContinue>)}  
        <MainTxt></MainTxt>
        </ContentWraper>
    </ContainerS>
}