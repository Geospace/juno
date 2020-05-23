import SideWidget from './SideWidget';
import DarkInput from './DarkInput';

const SideToolBar = (): JSX.Element => (
  <>
    <div style={{ marginTop: '0.3em' }} />

    <SideWidget title="Search">
      <div style={{ marginTop: '1em' }} />
      <DarkInput text="Enter keywords" />
    </SideWidget>

    <SideWidget title="display">
      <p>A widget can go here....</p>
    </SideWidget>

    <SideWidget title="sources">
      <p>Another widget!</p>
    </SideWidget>
  </>
);

export default SideToolBar;
