import React from 'react'
import styled from 'styled-components' 
import Section from './Section'

function Home() {
   return (
      <div>
         <Container>
            <Section 
               title="Model S"
               id="model-s"
               description="Order Online For Touchless Delivery."
               backgroundImg="model-s.jpg"
               leftBtnText="Custom Order"
               rightBtnText="Existing Inventory"
               nextId="model-y"
            />
            <Section 
               title="Model Y"
               id="model-y"
               description="Order Online For Touchless Delivery."
               backgroundImg="model-y.jpg"
               leftBtnText="Custom Order"
               rightBtnText="Existing Inventory"
               nextId="model-3"
            />
            <Section 
               title="Model 3"
               id="model-3"
               description="Order Online For Touchless Delivery."
               backgroundImg="model-3.jpg"
               leftBtnText="Custom Order"
               rightBtnText="Existing Inventory"
               nextId="model-x"
            />
            <Section 
               title="Model X"
               id="model-x"
               description="Order Online For Touchless Delivery."
               backgroundImg="model-x.jpg"
               leftBtnText="Custom Order"
               rightBtnText="Existing Inventory"
               nextId="solar-panel"
            />
            <Section 
               title="Lowest Cost Solar Panels In America"
               id="solar-panel"
               description="Money-Back Guarantee"
               backgroundImg="solar-panel.jpg"
               leftBtnText="Order Now"
               rightBtnText="Learn More"
               nextId="solar-roof"
            />
            <Section 
               title="Solar For New Roofs"
               id="solar-roof"
               description="Solar Roofs Cost Less Than A New Roof Plus Solar Panels"
               backgroundImg="solar-roof.jpg"
               leftBtnText="Order Now"
               rightBtnText="Learn More"
               nextId="accessories"
            />
            <Section 
               title="Accessories"
               id="accessories"
               description=""
               backgroundImg="accessories.jpg"
               leftBtnText="Shop Now"
               nextId="accessories"
            />
         </Container>
      </div>
   )
}

const Container = styled.div`
height: 100vh;
`;

export default Home
