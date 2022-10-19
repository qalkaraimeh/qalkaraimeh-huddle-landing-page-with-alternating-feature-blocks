import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
//fonts
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

@import url('https://fonts.google.com/specimen/Open+Sans');
*{
    box-sizing: border-box;
    margin: 0;
   
}
:root{
    //root font-size
    font-size: 18px;

    // color vars
    --pink: hsl(322, 100%, 66%);
    --very-pale-cyan: hsl(193, 100%, 96%);
    --very-dark-cyan: hsl(192, 100%, 9%);
    --grayish-blue: hsl(208, 11%, 55%);
}
img{
    width: 100%
}

`;

export default GlobalStyles;
