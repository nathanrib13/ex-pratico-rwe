import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
   :root {
    font-size: 60%;   
    font-family: 'Roboto';
  }

  /* font-size: 16px;
  1rem = 10px
  */

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }
  li, ul, ol {
    list-style: none  ;
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  body,html{
    width: 100vw;
    height: 100vh;  
  }

  body {
   
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;

  }
  h1, h2, h3, h4, h5, h6, p, strong{
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }
`;
