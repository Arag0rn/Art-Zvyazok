import profileImg from "../profimg.png";
import { Overview, ProfBox, ProfHead, ProfName, ProfTextBox, ProfTxt, StyledArrowDown, StyledArrowUp } from "./ProfileBox.styled";
import { useState } from "react";

export const ProfileBox = () => {
  const [isProfOpen, setProfOpen] = useState(false);
  const [boxHeight, setBoxHeight] = useState("256px"); // Исходно высота "fit-content"

  const toggleProfBox = () => {
    setProfOpen(!isProfOpen);
    setBoxHeight(isProfOpen ? "256px" : "634px"); 

  };

  return (
    <>
      <ProfBox style={{ height: boxHeight }}> 
        <ProfHead>
        {!isProfOpen ? (
                <StyledArrowDown onClick={toggleProfBox} />
            ) : (
                <StyledArrowUp onClick={toggleProfBox} />
            )}
          <img src={profileImg} alt="imgProf" />
          <ProfName>Dr Black</ProfName>
        </ProfHead>
        <ProfTextBox>
          <ProfTxt>Музикант</ProfTxt>
          <ProfTxt>Київ, Дистанційно</ProfTxt>
          <Overview>Привіт! Я вокаліст в групі ТАКА і я буду радий співпраці. Також граю на гітарі та піаніно.</Overview>
        </ProfTextBox>
      </ProfBox>
    </>
  );
};