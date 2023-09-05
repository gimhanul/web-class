import styles from '@/styles/Home.module.css';
import LogBox from '@/components/Log/LogBox';
import { Log } from '@/types/Log';
import exp from 'constants';

const LogList = ({ logList }: {
  logList: Log[]
}) => {
  return (
    <>
      <section className={styles.container}>
        <h2>Log</h2>
        {logList.map(l => <LogBox
          log={l}
          key={l.updatedAt.toString()}
        />)}
      </section>
    </>
  )
}

export default LogList;
