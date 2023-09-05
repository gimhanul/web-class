import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, Dispatch, SetStateAction, useMemo, useState } from 'react';
import { Todo } from '@/types/Todo';

interface ITodoContext {
  todoList?: Todo[];
  setTodoList?: Dispatch<SetStateAction<Todo[]>>;
}

export const TodoContext = createContext<ITodoContext>({});

export default function App({ Component, pageProps }: AppProps) {

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const todoValue = useMemo(() => ({ todoList, setTodoList }), [todoList]);

  return (
    <>
      <TodoContext.Provider value={todoValue}>
        <Component {...pageProps} />
      </TodoContext.Provider>
    </>
  )
}
