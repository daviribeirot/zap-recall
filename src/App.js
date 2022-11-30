import styled from "styled-components";
import GlobalStyled from "./assets/css/GlobalStyle";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyled />
        <ScreenContainer>
          <Logo />
          <Footer />
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