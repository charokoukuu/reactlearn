import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import { Data } from './Data';

export interface DataProps {
  title: string,
  id: number;
  price: number;
}

export interface RecieveDataProps {
  data: DataProps;
}

function App() {
  const [data, setData] = useState<DataProps[]>([]);
  useEffect(() => {
    (async () => {
      setData((await Data()).data)
    })()
  }, [])
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
