import { createGlobalStyle } from "styled-components";
import { GlobalColors } from "@/config/colors";

let rootContent = '';

Object.entries(GlobalColors).map((color) => {
  const [colorName, colorValue] = color;
  rootContent += `--${colorName}: ${colorValue};\n`;

  return true;
});

export default createGlobalStyle`
  :root{
    ${rootContent}
  }

  @media(max-width: 1088px){
    html{
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }

  *{
    margin:0;
    padding:0;

    box-sizing: border-box;
  }

  body{
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button{
    font: 400 1rem 'Inter', sans-serif;
  }

  button{
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration:none;
  }
`;