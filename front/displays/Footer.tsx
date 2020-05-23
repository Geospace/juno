import SiteLogo from '../components/SiteLogo';

import style from './Footer.module.css';

const Footer = (): JSX.Element => (
  <div className={style.footer}>
    <p>
      <SiteLogo size={1} />, all rights reserved.
    </p>
  </div>
);

export default Footer;
