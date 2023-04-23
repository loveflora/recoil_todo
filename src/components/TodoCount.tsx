import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { count } from "../store";

export default function TodoCount() {
  const leftTodo = useRecoilValue(count);

  console.log(leftTodo);
  return <H3>To do Left : {leftTodo}</H3>;
}

const H3 = styled.h3`
  color: salmon;
`;
