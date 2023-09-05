import { Log } from '@/types/Log';
import styles from '@/styles/Log.module.css';

const LogBox = ({ log }: { log: Log }) => {
  return (
    <div className={styles.container}>
      <h4>Todo list updated.</h4>
      <p>{log.updatedAt.toLocaleString()}</p>
      <details>
        <summary>view data</summary>
        <p>{JSON.stringify(log.data, null, 2)}</p>
      </details>
    </div>
  )
}

export default LogBox;
