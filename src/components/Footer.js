import styled from "styled-components";
import questions from "./questions";

export default function Footer({ renderingFooter}){
    return(
        <FooterConcluidos data-test="footer">
              <p>{renderingFooter.length}/{questions.length} CONCLUÍDOS</p>
        </FooterConcluidos>
    )
}

const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;

  p{
    font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  background-color:white;
  }
`