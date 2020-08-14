import React from "react";
import styled from "styled-components";

import Comic from "./Comic";

const Viewport = styled.div`
  width: 100%;
  padding: 5px;
  background-color: seagreen;
`;

export default function ComicViewport() {

  return (
    <Viewport>
      <h3>Viewport</h3>
      <Comic />
    </Viewport>
  )
}