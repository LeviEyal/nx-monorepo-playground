import styles from './stam.module.css';

/* eslint-disable-next-line */
export interface StamProps {}

export function Stam(props: StamProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Stam!</h1>
    </div>
  );
}

export default Stam;
