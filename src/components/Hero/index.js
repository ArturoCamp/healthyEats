import React from 'react';


import {
  HeroContainer,
  HeroContainer2,
  HeroItems,
  HeroH1,
  HeroH2,
  HeroBtn,
  SvgWaves,
  PathWaves,
  HeroWaves,
  OrdersImg,
} from './HeroElements';

const Hero = ({ data }) => {

  return (
    <HeroContainer>
      <HeroContainer2>
      <HeroItems>
        <HeroH1> Healthy Treats</HeroH1>
        <HeroH2> un pecado saludable</HeroH2>
        <HeroBtn data-glf-cuid="0f68ebbc-ca45-4b0e-8703-3a007dd6959e" data-glf-ruid="66922116-96de-4baf-9d51-04ece55d47e3">
                Realizar pedido</HeroBtn>
      </HeroItems>
      
      {data.map((product, index) => {
          return (
           
               <OrdersImg src={product.img} alt={product.alt} ></OrdersImg>
           
             

          );
        })}
      <HeroWaves>
        
          <SvgWaves viewBox="0 0 500 150" preserveAspectRatio="none">
            <PathWaves d="M0.00,55.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z">
              </PathWaves></SvgWaves>
        </HeroWaves>
      </HeroContainer2>
        
      
    </HeroContainer>
    
  );
};

export default Hero;
