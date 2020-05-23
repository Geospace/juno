import style from './Theme.module.css';

interface Props {
  children: React.ReactNode;
}

const Theme = ({ children }: Props): JSX.Element => (
  <div className={style.theme}>{children}</div>
);

export default Theme;
