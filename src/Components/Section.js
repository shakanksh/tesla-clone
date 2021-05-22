import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade' 

function Section(props) {
   return (
      <Wrap bgImg = {props.backgroundImg} id= {props.id}>
         <Fade bottom>
            <ItemText>
               <h1>{props.title}</h1>
               <p>{props.description}</p>
               </ItemText>
         </Fade>      
            <Buttons>
               <ButtonGroup>
                  <Fade left>
                     <LeftButton>
                        {props.leftBtnText}
                     </LeftButton>
                  </Fade>
                     {
                     props.rightBtnText && 
                     <Fade right>
                        <RightButton>
                           {props.rightBtnText}
                        </RightButton>
                     </Fade>
                     }
               </ButtonGroup>
               <Fade down>
                  <DownArrow src = "/images/down-arrow.svg" />
               </Fade>
            </Buttons>
      </Wrap>
   )
}

const Wrap = styled.div`
   width: 100vw;
   height: 100vh;
   background-image: ${props => `url(/images/${props.bgImg})`};
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
`

const ItemText = styled.div`
   padding-top: 15vh;
   text-align: center;

   h1{
      font-size: 34px;
   }

   p{
      font-size: 14px;
   }
`

const ButtonGroup = styled.div`
   display: flex;
   margin-bottom: 10px;

   @media (max-width: 768px){
      flex-direction: column;
   }
`

const LeftButton = styled.div`
   background-color: rgba(23, 26, 32, 0.8);
   height: 40px;
   width: 256px;
   color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 100px;
   opacity: 0.85;
   text-transform: uppercase; 
   font-size: 12px;
   cursor: pointer;
   margin: 8px;
   font-weight: 750;
`

const RightButton = styled(LeftButton)`
   background-color: white;
   opacity: 0.65;
   color: black;
`

const DownArrow = styled.img`
   margin-top: 20px;
   height: 40px;
   animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``

export default Section
