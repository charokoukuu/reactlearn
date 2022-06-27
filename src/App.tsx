import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header  from './Header';
import Menu from './Menu'
import Stack from '@mui/material/Stack';
import { getArticals } from './components/MenuOrder';

export interface DataProps{
  id: number;
  title: string;
  price: number;
}

function App() {
  const [data, setData] = useState<DataProps[]>([]);
  useEffect(() => {
    (async () => {
      setData((await getArticals()))
    })()
  }, [])
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <div>
    <Stack direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={8}>
    <Header/>
    <Menu/>
    </Stack>
    </div>
  );
}

export default App;
