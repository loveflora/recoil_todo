import styled from "styled-components";
import Creator from "./TodoCreator";
import TodoCount from "./TodoCount";
import TodoList from "./TodoList";

export default function Todo() {
  return (
    <Container>
      <Creator />
      <TodoCount />
      <TodoList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
