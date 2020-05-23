import Link from 'next/link';
import { BsDot } from 'react-icons/bs';

import Entry from '../types/Entry';

import style from './ArticleEntryCard.module.css';

interface Props {
  entry: Entry;
}

const ArticleEntryCard = ({ entry }: Props): JSX.Element => (
  <div className={style.card}>
    <div className={style.selectable}>
      <h2 className={style.title}>
        <Link href="#">
          <a>{entry.title}</a>
        </Link>
      </h2>
      <p className={style.meta}>
        {entry.source} <BsDot /> {entry.readTime} minute
        {entry.readTime > 1 && 's'}
      </p>
      <p className={style.excerpt}>{entry.excerpt}</p>
    </div>
  </div>
);

export default ArticleEntryCard;
