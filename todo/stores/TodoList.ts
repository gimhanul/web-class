import { atom } from "recoil";
import { Todo } from '@/types/Todo';

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});
