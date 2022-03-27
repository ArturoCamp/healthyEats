import styled, {
  keyframes
} from 'styled-components';

import ImgBg from '../../images/fondo4.png';

export const HeroContainer = styled.div `
background: linear-gradient(to right, #12C2E9, #C471ED59, #F64F5A57),
    url(${ImgBg});

    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    color: #fff;
    text-align: center;
    
    height: auto;
    padding: 0;
    width: 100%;

`;
const textAnimation = keyframes`
  0%{opacity: 0; transform: translate(5%, 10%);}

  100%{opacity: 1;}
`;
const ImageAnimation = keyframes`
  0%{opacity: 0; transform:scale(1.3);}

  100%{opacity: 1;}
`;
const show = keyframes`
  0%{opacity: 0;}
  25%{opacity: 1;}
  75%{opacity: 1;}
  100%{opacity: 1;}
`;
export const HeroContainer2 = styled.div `
width: 95%;
max-width: 1200px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;

`;
export const HeroWaves = styled.div`
  height: 100px;
  width: 100%;
 

background: linear-gradient(to right, #12C2E900, #C471ED00, #F64F5A00);


`;

export const SvgWaves = styled.svg`
height: 100%;
width: 114.308%;
`;
export const PathWaves = styled.path`
stroke: none;
 fill: #fff;
`;
export const ContentImg = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${ImgBg});
   
    
 
  
`;
export const OrdersImg = styled.img`
display: block;
height: 300px;
  width: 100%;
  filter: saturate(120%);
flex-basis: 280px;
animation-name: ${ImageAnimation};
animation-duration: 1s;
animation-fill-mode: forwards;
  
`;


export const HeroItems = styled.div `
  width: 100%;
  color: #fff;
  flex-basis: 280px;
  position: absolut;
`;



export const HeroH1 = styled.h1 `
    font-size: 75px;
    color: #fff;
    animation-name: ${textAnimation};
    animation-duration: 1s;
    animation-fill-mode: forwards;
`;
export const HeroH2 = styled.h2 `
    font-size: 25px;
    color: #fff;
    animation-name: ${show};
  animation-duration: 10s;
  animation-fill-mode: forwards;
`;


export const HeroBtn = styled.button `
display: inline-block;
    color:#fff;
    font-weight: 300;
    text-decoration: none;
    margin-top: 30px;
    border: 1px solid #fff;
    width: 150px;
    border-radius: 3px;
    text-align: center;
    padding: 10px 0;
    font-size: 1.2rem;


background: #FC242400;
color: #fff;
border-radius: 20px;

  
  &:hover {
   background: linear-gradient(to right, #12C2E9, #C471ED59, #F64F5A57);
    
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
    
  }
`;