import { ContainerChats } from "components/Container/Container.styled"
import { GlobalStyle } from "components/Global.styled"
import { Profile } from "components/Profile/Profile"


export const ProfilePage = ()=> {
    return (
        <>
         <ContainerChats>
        <h2>Profile</h2>
             <Profile/>
            <GlobalStyle/>
        </ContainerChats>
        
        </>
    )
}