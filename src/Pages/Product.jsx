
import { Add, Remove } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import{ popularProducts} from "../Data"
import { mobile } from "../responsive";
import { useParams } from 'react-router-dom'
import test from "../kid2.png"

const Container = styled.div`
margin-top: 7rem`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;









const Product = () => {
  const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart([...cart, product]);
  console.log(cart)
};

  const [count, setCount] = useState(0)

  const Increment = () => {

setCount(count +1)  
}

const Decrement = () => {
if (
count > 0 
) {
setCount(count -1)
}

}

const { id } = useParams();

  const product = popularProducts.find(item => item.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }
  console.log(product.img)

  
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
            <Image src={product.img} alt={product.name}  />
            </ImageContainer>
            <InfoContainer>
                <Title>{product.name}</Title>
                <Desc>
                   {product.decs}
                </Desc>
                <Price>	&#8358;{product.price}</Price>
                <FilterContainer>
                    <Filter>

                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>

                    </Filter>

                    <Filter>
                        
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                     <FilterSizeOption>S</FilterSizeOption>
                     <FilterSizeOption>M</FilterSizeOption>
                     <FilterSizeOption>L</FilterSizeOption>
                     <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                     
                    </Filter>

                    
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={Decrement}/>
                        <Amount>{count}</Amount>
                        <Add onClick={Increment}/>
                        <Button  onClick={() => addToCart(product)}>ADD TO CART</Button>
                    </AmountContainer>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
        
    </Container>
  )
}

export default Product