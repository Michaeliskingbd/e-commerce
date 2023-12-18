import { Close, Search, ShoppingCartOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from "../responsive";
import item1 from "../kid2.png"
import item2 from "../product (5).png"

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`
const Container = styled.div`
  height: fit-content;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  position: fixed;
    z-index: 998;
    top:1.9rem;
    width: 100%;
    transition: ease-in-out all;
    background-color: #fff;

  ${mobile({ height: "fit-content" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "15px" })}
  
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;















const Container2 = styled.div`
width: 80%;
height: 70%;
margin: auto;
position: fixed;
top:0;
right:8rem;
z-index: 997;
margin-top: 10rem;
border: 1px solid black;
background-color: #fcfcfc;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);

overflow-y: scroll;
  scrollbar-width: thin; /* Firefox */

  /* WebKit Scrollbar Styles */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 8px;
  }

  ${mobile({ width:" 95%", height: "50%", right: ".5rem" })}
`

const Wrapper2 = styled.div`
  padding: 20px;
  position: relative;
 

 
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ padding: " 8px" })}
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;

`;

const Buttom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  background-color: #fff;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;


const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Break = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
 
  background-color: #fff;
  margin-left: 1rem;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const CloseButton = styled.div`
  position:absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1000;


`;


const Navbar = () => {


    const [cartOpen, setCartOpen] = useState(false)

   const openCart = () => {
        setCartOpen(!cartOpen)
    }
    const closeCart = () => {
      setCartOpen(false)
      
  }

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }
  return (
    <div style={{position:"relative"}}>
    <Container>
        <Wrapper>
            <Left>
                <Language>En</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray", fontSize: "16px"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <StyledLink to="/"><Logo>ALLEN. E</Logo></StyledLink>
                
            </Center>
            <Right>
            <StyledLink to="/register"><MenuItem>REGISTER</MenuItem></StyledLink>
            <StyledLink to="/login"><MenuItem>SIGN IN</MenuItem></StyledLink>
                <MenuItem>
                <StyledLink to="" onClick={openCart}> 
                    <Badge 
                    badgeContent = {2} color= "primary">
                    <ShoppingCartOutlined/>
                    </Badge>
                </StyledLink>
                
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>






























    { cartOpen && <Container2  >
    <CloseButton  onClick={closeCart}>
    <Close/>
    </CloseButton>
        <Wrapper2 >
         
            <Title>YOUR BASKET</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>

                <TopButton type= "filled">CHECKOUT NOW</TopButton>
            </Top>
            <Buttom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image  src={item1}/>
                            <Details>
                            <ProductName> <b>Product:</b> MICHAELANGELO HAT</ProductName>
                            <ProductId> <b>ID:</b> 486534263736</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize> <b>Size:</b> XXL</ProductSize>
                            </Details>
                            
                        </ProductDetail>
                        <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice> $30</ProductPrice>
                        </PriceDetail>
                    </Product>
                        <Break/>
                    <Product>
                        <ProductDetail>
                            <Image src={item2}/>
                            <Details>
                            <ProductName> <b>Product:</b> MICHAELANGELO HAT</ProductName>
                            <ProductId> <b>ID:</b> 486534263736</ProductId>
                            <ProductColor color="lightgreen"/>
                            <ProductSize> <b>Size:</b> M</ProductSize>
                            </Details>
                            
                        </ProductDetail>
                        <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice> $ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimate Shipping</SummaryItemText>  
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>  
                        <SummaryItemPrice>$ -4.00</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>  
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton> CHECKOUT NOW</SummaryButton>
                      
                              
                    </Summary>
            </Buttom>
        </Wrapper2>
    </Container2>}


   
    </div>
  )
}

export default Navbar