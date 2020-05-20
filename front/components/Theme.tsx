import styles from './Theme.module.css';

interface Props {
  children: React.ReactNode;
}

const Theme = ({ children }: Props): JSX.Element => (
  <div className={styles.theme}>{children}</div>
);

export default Theme;
