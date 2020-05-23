import TopNavigation from './TopNavigation';
import Footer from './Footer';

import style from './RegularLayout.module.css';

interface Props {
  children: React.ReactNode;
}

const RegularLayout = ({ children }: Props): JSX.Element => (
  <div className={style.layout}>
    <TopNavigation />
    {children}
    <Footer />
  </div>
);

export default RegularLayout;
