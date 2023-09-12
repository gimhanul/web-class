import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react';
import { Log } from '@/types/Log';
import TodoList from '@/components/Todo/TodoList';
import LogList from '@/components/Log/LogList';
import { useRecoilState } from 'recoil';
import { todoListState } from '@/stores/TodoList';

export default function Home() {
  const [logList, setLogList] = useState<Log[]>([]);

  const initRef = useRef<boolean>(false);

  const [todoList, setTodoList] = useRecoilState(todoListState);
  useEffect(() => {
    if (initRef.current) {
      setLogList([{
        updatedAt: new Date(),
        data: JSON.parse(JSON.stringify(todoList))
      }, ...logList])

    } else {
      initRef.current = true;
    }
  }, [todoList])

  return (
    <>
      <Head>
        <title>뚜두</title>
        <meta name="description" content="Created by Hanul" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>한울짱의 투두</h1>
        <div className={styles.layout}>
          <TodoList />
          <LogList logList={logList} />
        </div>
      </main>
    </>
  )
}
