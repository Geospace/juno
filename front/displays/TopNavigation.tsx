import SiteLogo from '../components/SiteLogo';
import NavbarLink from '../components/NavbarLink';

import style from './TopNavigation.module.css';

const elements = [
  { to: '/', text: 'Inbox' },
  { to: '/saved', text: 'Saved' },
  { to: '/saved', text: 'Sources' },
];

const links = elements.map((e) => (
  <span style={{ marginLeft: '1.5em' }}>
    <NavbarLink to={e.to}>{e.text}</NavbarLink>
  </span>
));

const TopNavigation = (): JSX.Element => (
  <div className={style.navigation}>
    <SiteLogo size={2} />

    <ul>{links}</ul>
  </div>
);

export default TopNavigation;
