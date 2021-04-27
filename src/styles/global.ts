import { createGlobalStyle } from 'styled-components';
// import BgCity from '../assets/images/header_bg.png';
import BG from '../assets/images/bg.png';

const GlobalStyle = createGlobalStyle`
:root {
  --bg-padrao: #d63031;
  --str-h2: #4c69f6;
  --str-font: #f6db35;
  --bg-silver: #636e72;
}
/* header{
  background-color: ${props => props.theme.colors.black};
} */
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Bangers', cursive;
}
a {
    text-decoration: none;
  }

body{
  position: relative;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${BG});
    background-repeat: repeat;
    background-position: center;
    background-attachment:fixed;
    opacity: 0.3;
    backdrop-filter: hue-rotate(120deg);
    z-index: -1;
  }
 
  p {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: justify;
  }
  h1{
    color: var(--str-font);
    font-size: 4em;
    letter-spacing: 6px;
    -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #ee5454;
  }
  h2{
    color: var(--str-font);
    font-size: 3em;
    letter-spacing: 5px;
    -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #ee5454;
  }
  h3{
    text-align: center;
    color: var(--str-h2);
    font-size: 1.5em;
    letter-spacing: 5px;
  }
}
`;

export default GlobalStyle;
