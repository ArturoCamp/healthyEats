import styled, {
  keyframes
} from 'styled-components';



const ImageAnimation = keyframes`
  0%{opacity: 0; transform:scale(1.3);}

  100%{opacity: 1;}
`;
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
margin: 0 2rem;
  line-height: 2;
  width: 300px;
  flex-basis: 280px;
  margin-bottom: 4rem;
 
  position:relative;
  display:flex;
  
 
  
  &:hover {
    filter: saturate(120%);
    transition: 0.2s ease-out;
    cursor: pointer;
    -webkit-transform:scale(1.1);transform:scale(1.1);
  }

`;
export const OrdersCardInfo = styled.div`
margin: 0 5rem;
  line-height: 2;
  width: 300px;
 
  flex-basis: 280px;
  
`;

export const OrdersImg = styled.img`
height: 300px;
min-width: 300px;
max-width: 100%;


border-radius: 20px;

flex-basis: 280px;
`;



export const OrdersInfo = styled.div`
opacity:0;
background: #FFFFFF6B;
flex-direction: column;
border-radius: 20px;
height: 300px;
width: 300px;
padding: 2rem;
justify-content: center;
position:absolute;
color: #FFF;

&:hover {
  opacity:1;
  visibility: visible;
  transition-dalay: 0.5s;
  transform: scale(1);
  animation-name: ${ImageAnimation};
animation-duration: 1s;
animation-fill-mode: forwards;
}
`;

export const OrdersDesc = styled.p`

font-size: 1.1rem;
color: #000;
text-align: center;
flex-basis: 280px;
 
`;
export const OrdersHorario = styled.p`
  margin-bottom: 2rem;
  color: #050505;
  text-align: init;
  font-size: 0.9rem;
  font-weight: 600;
 
`;

export const OrdersTitle = styled.h2`

font-size: 1.8rem;
color: #000;
text-align: center;
`;

export const OrdersPrice = styled.p`


font-size: 2rem;
color: #000;
text-align: center;
flex-basis: 280px;
`;

export const OrdersButton = styled.button`
font-size: 1.2rem;
padding: 1rem 4rem;
border: none;
background: linear-gradient(to right, #F64F5A57, #C471ED59, #12C2E9);
color: #fff;
border-radius: 20px;
Text-aling: absolute;
  &:hover {
    background: linear-gradient(to right, #12C2E9, #C471ED59, #F64F5A57);
    transition: 2s ease-out;
    cursor: pointer;
    color: #FFF;
  }
`;

  