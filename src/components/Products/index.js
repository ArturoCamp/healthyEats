import React from 'react';
import Aos from "aos";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  
} from 'react-icons/fa';
import {
  ProductsContainer,
  ProductWrapper,
  SocialMedia,
  SocialDesc,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  SvgWaves,
  PathWaves,
  HeroWaves
 
} from './ProductsElements';

const Products = () => {
  Aos.init();
  return (
    <ProductsContainer>
      <HeroWaves>
        
        <SvgWaves viewBox="0 0 500 150" preserveAspectRatio="none">
          <PathWaves d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z">
            </PathWaves></SvgWaves>
      </HeroWaves>
     <ProductWrapper>
     <SocialLogo >Visita nuestras redes sociales</SocialLogo>
     <SocialMedia><SocialDesc>Podrás encontrar recetas, alimentación, rutinas y estilos de vida saludables</SocialDesc> </SocialMedia>
    
        <SocialMedia>
        
           
            <SocialIcons  data-aos="flip-left">
              <SocialIconLink href='https://www.facebook.com/Healthy-treats-105467998586920' target='_blank' aria-label='Facebook'>
                <FaFacebook  />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/he.healthytreats/?hl=es' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              
              <SocialIconLink
                href='https://api.whatsapp.com/send?phone=50671061743'
                target='_blank'
                aria-label='Whatsapp'
               
              >
                <FaWhatsapp />
              </SocialIconLink>
             
            </SocialIcons>
         
        </SocialMedia>
      
      </ProductWrapper>
      <HeroWaves>
        
        <SvgWaves viewBox="0 0 500 150" preserveAspectRatio="none">
          <PathWaves d="M0.00,55.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z">
            </PathWaves></SvgWaves>
      </HeroWaves>
    </ProductsContainer>
  );
};

export default Products;
