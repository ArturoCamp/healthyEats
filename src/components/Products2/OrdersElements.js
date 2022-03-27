import styled from 'styled-components';

import ImgBg from '../../images/fondo4.png';
export const OrdersContainer = styled.div`


background: #fff;

    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    color: #fff;
    text-align: center;
  padding: 2rem calc((90vw - 1300px) / 2);
  
  
   color: #000;
`;

export const OrdersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
 
  justify-content: center;
 gap:20px;

`;

export const OrdersCard = styled.div`

margin: 0 5rem;
line-height: 2;
width: 315px;
justify-content: center;
flex-basis: 280px;

`;
export const OrdersCardInfo = styled.div`
margin: 0 5rem;
  line-height: 2;
  width: 300px;
 
  flex-basis: 280px;
  
`;
export const HeroWaves = styled.div`
  height: 100px;
  width: 100%;
 

  background: linear-gradient(to right, #12C2E94B, #12C2E921, #12C2E913)),
    url(${ImgBg});


`;

export const SvgWaves = styled.svg`
height: 100%;
width: 105.308%;

`;
export const PathWaves = styled.path`
stroke: none;
 fill: #fff;
`;
export const OrdersImg = styled.img`
  height: 325px;
  min-width: 325px;
  max-width: 100%;
 
  border-radius: 20px;
  &:hover {
    filter: saturate(125%);
    transition: 0.2s ease-out;
    cursor: pointer;
    -webkit-transform:scale(1.05);transform:scale(1.05);
  }
`;



export const OrdersInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  padding: 0.5rem;
  
  color: #050505;
`;

export const OrdersDesc = styled.p`
  margin-bottom: 1rem;
  color: #050505;
  text-align: init;
  font-size: 0.9rem;
  font-weight: 600;
 
`;
export const OrdersHorario = styled.p`
  margin-bottom: 2rem;
  color: #050505;
  text-align: init;
  font-size: 0.9rem;
  font-weight: 600;
 
`;

export const OrdersTitle = styled.h2`
  font-weight: 800;
  font-size: 1.5rem;
  color: #000;
 
  float: left;
`;
export const FeatureHeading = styled.h1 `
  
  font-size: clamp(3rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: #C227818F;
  
`;
export const OrdersPrice = styled.p`
 
  font-size: 0.8rem;
  color: #6D6565;
  text-align: left;
`;

export const OrdersButton = styled.button`
font-size: 1.2rem;
padding: 1rem 4rem;
border: none;
background: #FC2424;
color: #fff;
border-radius: 20px;
Text-aling: absolute;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

  