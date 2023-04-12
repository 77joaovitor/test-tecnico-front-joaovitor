import { createGlobalStyle } from "styled-components";

const mainColor = "aliceblue";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    background: ${mainColor};
    font-family: "Poppins";
  }

  h3 {
    margin: 0;
  }
`;

export default GlobalStyle;
