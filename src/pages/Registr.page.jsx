import { AuthContinue } from "components/ContinueReg/ContinueReg";
import { Registr } from "components/Registr/Registr";
import { useState } from "react";
import { Auth } from "components/Auth/Auth";

export const RegistrPage = () => {
    const [isRegistrOpen, setIsRegistrOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(true);
    // const [isContinueReg, setIsContinueReg] = useState(false);

  return (
    <div>
     {isAuthOpen &&(<Auth onRegClick={() => setIsRegistrOpen(true)} onRegOpen={() => setIsAuthOpen(false)}></Auth>)} 
        {isRegistrOpen &&(<Registr 
        onRegClick={() => setIsRegistrOpen(false)} 
        onRegOpen={() => setIsAuthOpen(true)} 
        onContPress={() => setIsRegistrOpen(false)}
        // onContOpen={()=> setIsContinueReg(true)}
        ></Registr>)}
      {/* {isContinueReg && (<Pofi ></Pofi>)}   */}
    </div>
  );
};




