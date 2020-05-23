import SiteLogo from './SiteLogo';
import NavbarLink from './NavbarLink';

import style from './TopNavigation.module.css';

const TopNavigation = (): JSX.Element => (
  <div className={style.navigation}>
    <SiteLogo size={2} />

    <ul>
      <NavbarLink to="/">Inbox</NavbarLink>
      <NavbarLink to="/saved">Saved</NavbarLink>
      <NavbarLink to="/saved">Sources</NavbarLink>
    </ul>
  </div>
);

export default TopNavigation;
