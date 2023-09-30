import React from "react";
import ListCard from "../Components/ListCard";
import styled from "@emotion/styled";

export default function HomePage() {

  const ContainerHomePage = styled.div`
  margin-top: 60px;
  `

  return (
    <ContainerHomePage>
        <h1>HOME PAGE</h1>
        <hr />

        <ListCard/>

    </ContainerHomePage>
  );  
}
