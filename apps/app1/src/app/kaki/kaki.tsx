import styles from './kaki.module.css';

/* eslint-disable-next-line */
export interface KakiProps {}

export function Kaki(props: KakiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Kaki!</h1>
    </div>
  );
}

export default Kaki;
