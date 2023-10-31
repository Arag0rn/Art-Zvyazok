import { Cell, CellContainer, CellText, MainContainer, NewsCell, NewsContainer, NewsHead, WelcomeText } from "./Main.styled"

export const Main = () => {
    return (
        <MainContainer>
        <WelcomeText>Ласкаво просимо на наш веб-портал для творчих душ!</WelcomeText>
        <CellContainer>
            <Cell><CellText>Перейти до чатів</CellText></Cell>
            <Cell><CellText>Редагувати профіль</CellText></Cell>
            <Cell><CellText>Шукати друзів</CellText></Cell>
            <Cell><CellText>Правила спільноти</CellText></Cell>
        </CellContainer>
        <NewsHead>НОВИНИ</NewsHead> 
        <NewsContainer>
            <NewsCell></NewsCell>
            <NewsCell></NewsCell>
            <NewsCell></NewsCell>
            <NewsCell></NewsCell>
            <NewsCell></NewsCell>
            <NewsCell></NewsCell>
        </NewsContainer>
        </MainContainer>
    )
}