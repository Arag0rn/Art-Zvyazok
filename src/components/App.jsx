import { Component } from "react";
import { Header } from "./Header/Header";
import { GlobalStyle } from "./Global.styled";
export class App extends Component  {
  render() {

  
    return (
      <div>
        <Header/>
        <GlobalStyle/>
    </div>
  );}
}