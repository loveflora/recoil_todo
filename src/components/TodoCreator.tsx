import { useState } from "react";
import { useRecoilState } from "recoil";
import { todos } from "../store";
import styled from "styled-components";
import { atomType } from "../types/atomType";

//? ESLint 지정하는 법 알아보기

export default function TodoCreator() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState<atomType[]>(todos);

  // const onChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  const onChange = ({ target: { value } }: { target: { value: string } }) => {
    setInputValue(value);
  };

  const addHandler = () => {
    setTodoList((v) => {
      return [
        ...v,
        {
          id: v.length + 1,
          text: inputValue,
          done: false,
        },
      ];
    });
    setInputValue("");
  };

  return (
    <div>
      <Input type="text" value={inputValue} onChange={onChange} />
      <Button onClick={addHandler}>CLICK !</Button>
    </div>
  );
}

const Input = styled.input`
  margin: 40px;
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  color: white;
  background-color: salmon;
  padding: 5px;
`;
