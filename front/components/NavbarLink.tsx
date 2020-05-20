import Link from 'next/link';

import styles from './NavbarLink.module.css';

interface Props {
  children: string;
  to: string;
}

const NavbarLink = ({ children, to }: Props): JSX.Element => (
  <span className={styles.link}>
    <Link href={to}>
      <a>{children}</a>
    </Link>
  </span>
);

export default NavbarLink;
