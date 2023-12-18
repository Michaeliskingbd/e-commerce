import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../Data'

import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 8rem;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: ${props=> props.direction === "left" && "10px" };
    right: ${props=> props.direction === "right" && "10px" };
    cursor: pointer;
    opacity: 0.5;
    z-index: 1;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
    margin-right: 30px;
   

    `
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    width: max-content;
    align-items: center;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * - 100}vw);
   
   
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;

    `
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
   
`
const Image = styled.img`
    height: 80%;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    `
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


const Slider = () => {
    const [slideIndex, setslideIndex] = useState(0);
    const handleClick = (direction) =>{
        if (direction === "left") {
            setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

  return (
    <Container>
        <Arrow direction= "left" onClick={()=> handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
            {sliderItems.map((item) =>
            <Slide bg= {item.bg}>
              <Wrapper slideIndex = {slideIndex}>
                <ImgContainer>
                   <Image src= {item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc> 
                    <Button>SHOP NOW</Button>
                </InfoContainer>
              </Wrapper>
            </Slide>
            )}
            
         
        <Arrow direction= "right" onClick={()=> handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider