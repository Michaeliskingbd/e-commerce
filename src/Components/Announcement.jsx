import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    font-weight: 500;
    position: fixed;
    z-index: 998;
    width: 100%;
    top: 0;


`
const Announcement = () => {
  return (
    <Container>Allen Elisia black friDAY is on ...get up to $25 discount!!!</Container>
  )
}

export default Announcement