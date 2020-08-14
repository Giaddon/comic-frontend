import React from "react";
import styled from "styled-components";

const NavDiv = styled.div`
  height: 60px;
  width: 100%;
  background-color: palevioletred;
`;

export default function NavBar() {

  return (
    <NavDiv>
      <h2>Nav Bar</h2>
    </NavDiv>
  )
}