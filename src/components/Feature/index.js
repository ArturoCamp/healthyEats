import React from 'react';
import Aos from "aos";
import { FeatureContainer,
   FeatureWrapper,
   FeatureCard,
   FeatureImg,
   FeatureInfo,
   FeatureTitle,
   FeatureDesc,
   FeatureCard2,
   SvgWaves,
   PathWaves,
   HeroWaves,
   } from './FeatureElements';

const Feature = ({data}) => {
  Aos.init();
  return (
    <FeatureContainer>
 <HeroWaves>
        
        <SvgWaves viewBox="0 0 500 150" preserveAspectRatio="none">
          <PathWaves d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z">
            </PathWaves></SvgWaves>
      </HeroWaves>
      <FeatureWrapper>
        
        {data.map((product, index) => {
          return (
            
            <FeatureCard key={index} data-aos="zoom-in" data-aos-duration="500">
              <FeatureImg src={product.img} alt={product.alt} >
              
              </FeatureImg>
           
           
            </FeatureCard>
          );
        })}
         {data.map((product, index) => {
          return (
            
            <FeatureCard2 key={index} data-aos="zoom-in" data-aos-duration="500">
             
              <FeatureInfo>
            
               <FeatureTitle>{product.name}</FeatureTitle>
            
                 <FeatureDesc>{product.desc}</FeatureDesc>
               
                
               
              </FeatureInfo>
            </FeatureCard2>
          );
        })}
      </FeatureWrapper>
       
     
    </FeatureContainer>
  );
};

export default Feature;
