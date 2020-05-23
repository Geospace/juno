import style from './SideWidget.module.css';
import SideTitle from './SideTitle';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const SideWidget = ({ title, children }: Props): JSX.Element => (
  <div className={style.widget}>
    {title && <SideTitle title={title} />}
    {children}
  </div>
);

export default SideWidget;
