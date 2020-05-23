import { GrFormSearch } from 'react-icons/gr';

import style from './DarkInput.module.css';

interface Props {
  text: string;
}

const DarkInput = ({ text }: Props): JSX.Element => (
  <label className={style.label}>
    <GrFormSearch />
    <input placeholder={text} />
  </label>
);

export default DarkInput;
