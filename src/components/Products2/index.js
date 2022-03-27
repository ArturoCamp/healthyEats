import React from 'react';
import Aos from "aos";

import {
  OrdersContainer,
  OrdersWrapper,
  OrdersTitle,
  OrdersCard,
  OrdersImg,
  OrdersInfo,
  OrdersDesc,
  OrdersHorario,
  FeatureHeading
 
} from './OrdersElements';

const Orders = ({ heading,data }) => {
  Aos.init();
  return (
    <OrdersContainer>
     
     
      <FeatureHeading>{heading}</FeatureHeading>
      <OrdersWrapper>
        
        {data.map((product, index) => {
          return (
            
            <OrdersCard key={index} data-aos="fade-right">
              <OrdersImg src={product.img} alt={product.alt} ></OrdersImg>
              <OrdersInfo>
             
             <OrdersTitle>{product.name}</OrdersTitle>
               <OrdersDesc>{product.desc}</OrdersDesc>
               <OrdersDesc>{product.descrip}</OrdersDesc>
               <OrdersDesc>{product.descrip2}</OrdersDesc>
               <OrdersHorario>{product.horario}</OrdersHorario>
               
             
            </OrdersInfo>
            </OrdersCard>
          );
        })}
         
      </OrdersWrapper>
     
    </OrdersContainer>
  );
};

export default Orders;
