import { atom, selector } from "recoil";
import { atomType } from "./types/atomType";

export const todos = atom<atomType[]>({
  key: "todos",
  default: [],
});

export const count = selector({
  key: "count",
  get: ({ get }) => {
    const todoCount = get(todos);
    //? done: false 인 값만 카운트
    const leftTodo = todoCount.filter((todo) => !todo.done);
    return leftTodo.length;
  },
});
