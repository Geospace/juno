import { loremIpsum } from 'lorem-ipsum';

import RegularLayout from '../displays/RegularLayout';
import SideToolBar from '../displays/SideToolBar';
import Entry from '../types/Entry';
import ArticlesListing from '../components/ArticlesListing';

// This is fake data and shall be removed
const entries: Array<Entry> = [];
for (let i = 0; i < 4; i += 1) {
  entries.push({
    title: loremIpsum({ sentenceUpperBound: 7 }).replace('.', ''),
    excerpt: loremIpsum({ count: 4 }),
    category: loremIpsum({ count: 1, units: 'words' }),
    readTime: 1 + Math.floor(Math.random() * 10),
    source: `${loremIpsum({ count: 1, units: 'words' })}.com`,
  });
}

const Index = (): JSX.Element => (
  <RegularLayout>
    <div style={{ width: '25%', float: 'left' }}>
      <SideToolBar />
    </div>
    <div style={{ width: '75%', float: 'left' }}>
      <ArticlesListing entries={entries} />
    </div>
    <div style={{ clear: 'both' }} />
  </RegularLayout>
);

export default Index;
