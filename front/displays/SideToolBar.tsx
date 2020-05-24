import SideWidget from '../components/SideWidget';
import DarkInput from '../components/DarkInput';

const spacing = '2em';

const SideToolBar = (): JSX.Element => (
  <>
    <div style={{ marginTop: '0.3em' }} />

    <SideWidget title="search">
      <div style={{ maxWidth: '85%' }}>
        <DarkInput text="Enter keywords" />
      </div>
    </SideWidget>

    <div style={{ marginTop: spacing }} />
    <SideWidget title="display">
      <div>A widget can go here....</div>
    </SideWidget>

    <div style={{ marginTop: spacing }} />
    <SideWidget title="sources">
      <div>Another widget!</div>
    </SideWidget>
  </>
);

export default SideToolBar;
