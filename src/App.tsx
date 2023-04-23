import React from "react";
import { RecoilRoot } from "recoil";
import Todo from "./components/Todo";

export default function App() {
  return (
    <RecoilRoot>
      <Todo />
    </RecoilRoot>
  );
}
