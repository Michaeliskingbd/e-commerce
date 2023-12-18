import React from 'react'
import styled from 'styled-components'
import { categories } from '../Data'
import { mobile } from "../responsive";
import CategoryItems from "./CategoryItems";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column", marginTop: "6rem" })}

`;

const Categories = () => {
  return (
    <Container>
       {categories.map(item=> (
        <CategoryItems item = {item}/>
       ))}
    </Container>
  )
}

export default Categories