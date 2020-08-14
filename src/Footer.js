import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  background-color: tomato;
`;

export default function Footer() {

  return (
    <FooterDiv>
      <h2>Footer</h2>
    </FooterDiv>
  )
}