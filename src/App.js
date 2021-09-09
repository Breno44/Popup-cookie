import React, { useState } from "react";
import Cookie from "./assets/cookie.png";
import { Container, Button, CookiesBox, Img, H3, P, Accept, Setting, Close } from "./App.elements";

const App = () => {
  const [cookies, setCookies] = useState(false);

  const showCookiePopup = () => {
    setCookies(true);
  };

  const closeCookiePopup = () => {
    setCookies(false);
  };

  return (
    <>
      <Container>
        <Button onClick={showCookiePopup}>Show Popup</Button>
      </Container>
      {cookies && (
        <CookiesBox>
          <Close onClick={closeCookiePopup}>&times;</Close>
          <Img src={Cookie} alt="" />
          <H3>Cookies e privacidade</H3>
          <P>
            Os cookies nos permitem oferecer nossos serviços. Ao utilizá-los, você aceita o uso que fazemos dos cookies
          </P>
          <Accept href="#">Aceitar todos os cookies</Accept>
          <Setting href="#">Configurações</Setting>
        </CookiesBox>
      )}
    </>
  );
};

export default App;
