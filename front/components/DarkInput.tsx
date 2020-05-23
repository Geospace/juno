import { GrFormSearch } from 'react-icons/gr';

import style from './DarkInput.module.css';

interface Props {
  text: string;
}

const DarkInput = ({ text }: Props): JSX.Element => (
  <label className={style.label}>
    <GrFormSearch />
    <input
      style={{ background: 'transparent', border: '0' }}
      placeholder={text}
    />
  </label>
);

export default DarkInput;
