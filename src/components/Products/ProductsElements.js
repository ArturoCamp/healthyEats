import styled from 'styled-components';
import ImgBg from '../../images/fondo4.png';
export const ProductsContainer = styled.div `
background: linear-gradient(to right, #12C2E960, #12C2E941, #12C2E913),
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

export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;

justify-content: center;
gap:20px;

`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: center;
  
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
  
`;

export const SocialLogo = styled.h2`
  color: #fff;
  justify-self: start;
  
  text-decoration: none;
  font-size: 3rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  
  
`;
export const SocialDesc = styled.h3`

color: #fff;
  justify-self: start;
  
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
 
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 50px;
  &:hover {
   
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #F000005D;

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
