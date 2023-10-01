import { ContainerChats } from "components/Container/Container.styled"
import { GlobalStyle } from "components/Global.styled"
import { ListOfChats } from "components/ListOfChats/ListOfCjatsComp"

export const ListOfChatsPage = ()=> {
   
    return (
        <>
        <ContainerChats>
            <ListOfChats/>
            <GlobalStyle/>
        </ContainerChats>
        </>
    )
    
}
