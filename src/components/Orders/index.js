import React from 'react';
import Aos from 'aos';

import {
  OrdersContainer,
  OrdersWrapper,

  OrdersTitle,
  OrdersCard,
  OrdersImg,
  OrdersInfo,
  OrdersDesc,
  OrdersPrice,
  OrdersButton,


 
} from './OrdersElements';

const Orders = ({ data }) => {
  Aos.init();
  return (
    <OrdersContainer>
     
      <OrdersWrapper>
        
        {data.map((product, index) => {
          return (
            
            <OrdersCard key={index} data-aos="zoom-in" data-aos-duration="500">
              <OrdersImg src={product.img} alt={product.alt} >
              
              </OrdersImg>
              <OrdersInfo>
            
               <OrdersTitle>{product.name}</OrdersTitle>
            
                 <OrdersDesc>{product.desc}</OrdersDesc>
                
                 <OrdersPrice>{product.price}</OrdersPrice>
               
              </OrdersInfo>
            </OrdersCard>
          );
        })}
        
      </OrdersWrapper>
       
      <OrdersButton data-glf-cuid="0f68ebbc-ca45-4b0e-8703-3a007dd6959e" data-glf-ruid="66922116-96de-4baf-9d51-04ece55d47e3">
                Realizar pedido
                </OrdersButton>
    </OrdersContainer>
  );
};

export default Orders;
