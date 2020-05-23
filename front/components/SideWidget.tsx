import style from './SideWidget.module.css';
import SideTitle from './SideTitle';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const SideWidget = ({ title, children }: Props): JSX.Element => (
  <div>
    {title && (
      <div className={style.title}>
        <SideTitle title={title} />
      </div>
    )}
    {children}
  </div>
);

export default SideWidget;
