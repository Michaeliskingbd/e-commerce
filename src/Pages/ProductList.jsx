import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'

import { mobile } from "../responsive";

const Container = styled.div`
margin-top: 5rem
${mobile({ marginTop: "1rem" })}`;


const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 6rem;
  z-index: 1000;
  background-color: ${(props) => (props.scrolled ? ' rgba(255, 255, 255, 0.5)' : 'white')};
  backdrop-filter: ${(props) => (props.scrolled ? ' blur(10px)' : '')}
    ${mobile({  top:"0"  })} 
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;




const ProductList = () => {
  const [scrolled, setScrolled] = useState(false)
    

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer  scrolled={scrolled}>
            <Filter>
                <FilterText> Filter Product:</FilterText>
                <Select>
                    <Option disabled selected> color </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option >Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected> Size </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                    <Option>COW</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText> Sort Product:</FilterText>
                <Select>
                    <Option selected> Newest </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList