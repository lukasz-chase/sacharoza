import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
body{
    font-family: 'Raleway', sans-serif;
    text-decoration:none;
}
input{
    font-family: 'Raleway', sans-serif;
    font-weight:bold;
}

`;

export default GlobalStyles;
