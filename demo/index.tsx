/**
 * debug: true
 * transform: true
 * defaultShowCode: false
 * background: '#f6f7f9'
 */

import useValue, { IFCProps } from '@uhooks/use-value';
import 'antd/dist/antd.css';
import { ChangeEvent, useState } from 'react';

function Input(props: IFCProps) {
  const [val, setVal] = useValue<string>(props);

  const changed = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setVal(v);
  };

  return <input value={val} onChange={changed} />;
}

export default function App() {
  const [val, setVal] = useState('');

  return (
    <div>
      <p>
        <Input value={val} />
      </p>
      <p>
        <Input defaultValue={1} />
      </p>
    </div>
  );
}
