import styles from './my-ui-library.module.css';

/* eslint-disable-next-line */
export interface MyUiLibraryProps {}

export function MyUiLibrary(props: MyUiLibraryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyUiLibrary!</h1>
    </div>
  );
}

export default MyUiLibrary;
