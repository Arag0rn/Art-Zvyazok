
import { MainChatText, MainChatItemS } from "./OutMsg.styled";

export const OutMsg = ()=>{
return (
<MainChatItemS>
    
   
        <MainChatText>   
        main axis - головна вісь flex-контейнера, вздовж якої розташовуються елементи. Вона не обов'язково горизонтальна, її напрямок контролюється властивістю flex-direction.
main-start і main-end - елементи в контейнері завжди розташовуються від main-start (початок головної осі) і до main-end (кінець головної осі).
cross axis - поперечна вісь, яка завжди перпендикулярна до головної осі. Її напрямок залежить від головної осі і явно не встановлюється.
cross-start і cross-end - початок і кінець поперечної осі, вздовж якої розташовуються рядки елементів.</MainChatText></MainChatItemS>
)
}