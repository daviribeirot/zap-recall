import styled from "styled-components";
import GlobalStyled from "./assets/css/GlobalStyle";
import Logo from "./components/Logo";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [renderingFooter, setRenderingFooter] = useState([]);

  return (
    <>
      <GlobalStyled />
      <ScreenContainer>
        <Logo />
        <Cards
          renderingFooter={renderingFooter}
          setRenderingFooter={setRenderingFooter}
        />

        <Footer
          renderingFooter={renderingFooter}
        />
      </ScreenContainer>
    </>

  );
}

export default App;


const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`