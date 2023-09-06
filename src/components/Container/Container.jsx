import { ContainerS, ContentWraper } from "./Container.styled";
import { Auth } from "components/Auth/Auth";
import { MainTxt } from "components/Main.txt/Main.txt";

export const Container = () => {
    return <ContainerS>
        <ContentWraper>
        <Auth></Auth>
        <MainTxt></MainTxt>
        </ContentWraper>
    </ContainerS>
}