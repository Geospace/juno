import style from './SideTitle.module.css';

interface Props {
  title: string;
}

const SideTitle = ({ title }: Props): JSX.Element => (
  <span className={style.title}>{title}</span>
);

export default SideTitle;
