import Link from 'next/link';

import style from './NavbarLink.module.css';

interface Props {
  children: string;
  to: string;
}

const NavbarLink = ({ children, to }: Props): JSX.Element => (
  <li className={style.link}>
    <Link href={to}>
      <a>{children}</a>
    </Link>
  </li>
);

export default NavbarLink;
