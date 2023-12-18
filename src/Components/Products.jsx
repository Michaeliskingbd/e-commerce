import styled from 'styled-components'
import Product from './Product'
import{ popularProducts} from "../Data"
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${mobile({ marginLeft: "1.3rem" })}

 `

const Products = () => {


  return (
 
    <Container>
   
     {popularProducts.map((item) => (
      <Link to={`/product/${item.id}`}><Product item={item} key={item.id}/></Link>
    ))}
      
   
   
  </Container>
 
  )
}

export default Products
