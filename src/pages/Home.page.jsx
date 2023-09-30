
import { GlobalStyle } from "components/Global.styled"
import { RegistrPage } from "./Registr.page"
import { MainTxt } from "components/Main.txt/Main.txt"
import { ContentWraper } from "components/Container/Container.styled"

export const Homepage = ()=> {

    return (
        <>
        <ContentWraper>
        <RegistrPage/>
        <MainTxt/>
        <GlobalStyle/> 
        </ContentWraper>
        </>
    )
}