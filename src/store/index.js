// get(스토어객체) === $todos

import { writable, get } from "svelte/store";

export const todos = writable([]);
export function saveStorage() {
  // localStorage.setItem('저장할데이터이름','실제저장할데이터')
  localStorage.setItem("todos", JSON.stringify(get(todos)));
}
