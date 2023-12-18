import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`
const Logo = styled.h1`

`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 20%;
`

const SocialContainer = styled.div`
    display: flex;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px ;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ALLEN.</Logo>
            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ullam, aspernatur iusto minima numquam mollitia atque hic sapiente beatae aliquid doloribus facere corrupti quisquam cumque debitis tempora nostrum ipsum reprehenderit.</Desc>
            <SocialContainer>
                <SocialIcon color='385999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
            </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms & Conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>
                622 Dixie Path , South Carolina 503054
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                +234 81 667 067 41
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>
                contact@allen.org
            </ContactItem>
            <Payment src="Images/footer1.png"></Payment>
        </Right>
        </Container>
  )
}

export default Footer