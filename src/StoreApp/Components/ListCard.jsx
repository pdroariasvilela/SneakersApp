import React from 'react'
import Cards from './Cards'
import styled from '@emotion/styled'

export default function ListCard() {

    const Container = styled.div`
        border: 1px solid black;
        border-radius : 20px ;
        display:flex;
        gap: 20px;
        flex-wrap : wrap;
        box-shadow: 5px 5px 15px gray;
        justify-content: space-evenly;
    `
  return (
    <Container>
      <Cards/>
    </Container>
  )
}
