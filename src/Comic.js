import React from "react";
import styled from "styled-components";

const ComicDiv = styled.div`
  background-color: palegreen;
  height:100%;
`;

export default function Comic() {

  return (
    <ComicDiv>
      <h4>Comic</h4>
    </ComicDiv>
  )
}