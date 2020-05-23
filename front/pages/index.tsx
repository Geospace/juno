import { loremIpsum } from 'lorem-ipsum';

import RegularLayout from '../displays/RegularLayout';
import ArticleEntryCard from '../components/ArticleEntryCard';
import SideToolBar from '../displays/SideToolBar';

const entries: Array<JSX.Element> = [];
for (let i = 0; i < 4; i += 1) {
  entries.push(
    <div key={i} style={{ margin: '0 0 2.5em 0' }}>
      <ArticleEntryCard
        entry={{
          title: loremIpsum({ sentenceUpperBound: 7 }).replace('.', ''),
          excerpt: loremIpsum({ count: 4 }),
          category: loremIpsum({ count: 1, units: 'words' }),
          readTime: 1 + Math.floor(Math.random() * 10),
        }}
      />
    </div>
  );
}

const Index = (): JSX.Element => (
  <RegularLayout>
    <div style={{ width: '25%', float: 'left' }}>
      <SideToolBar />
    </div>
    <div style={{ width: '75%', float: 'left' }}>{entries}</div>
    <div style={{ clear: 'both' }} />
  </RegularLayout>
);

export default Index;
