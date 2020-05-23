import Entry from '../types/Entry';
import ArticleEntryCard from './ArticleEntryCard';

interface Props {
  entries: Array<Entry>;
}

const ArticlesListing = ({ entries }: Props): JSX.Element => {
  const articles = entries.map((e, i) => (
    <div key={i} style={{ margin: '0 0 2.5em 0' }}>
      <ArticleEntryCard entry={e} />
    </div>
  ));

  return <>{articles}</>;
};

export default ArticlesListing;
