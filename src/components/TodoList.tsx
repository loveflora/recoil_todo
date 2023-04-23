import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { todos } from "../store";
import { atomType } from "../types/atomType";

export default function TodoList() {
  const [todoList, setTodoList] = useRecoilState<atomType[]>(todos);

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  // };

  console.log(todoList);

  const onClick = (todoID: number) => {
    setTodoList((prevState) => {
      return prevState.map((item) => {
        if (item.id === todoID) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });
      // e.target.checked --> boolean 반환

      // const checked = prevState.find((elem) => elem.id === todoID);
      // checked.done = !checked;
      // return [...prevState, checked];
    });
  };

  return (
    <Container>
      <H1>To do List</H1>
      <ul>
        {todoList.map((todo) => (
          <Li key={todo.id}>
            <p>{todo.text}</p>
            <input
              type="checkbox"
              onClick={() => {
                onClick(todo.id);
              }}
            />
          </Li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div``;

const H1 = styled.h1``;

const Li = styled.li`
  list-style: none;

  & > p {
    display: inline;
  }
`;
