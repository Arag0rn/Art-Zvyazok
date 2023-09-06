import { Component } from "react";
import { Header } from "./Header/Header";
import { GlobalStyle } from "./Global.styled";
import { Container } from "./Container/Container";
export class App extends Component  {
  render() {

  
    return (
      <div>
        <Header/>
        <Container/>
        <GlobalStyle/>
    </div>
  );}
}