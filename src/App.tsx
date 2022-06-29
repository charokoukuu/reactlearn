import React, { useEffect, useState } from 'react';
import './App.css';
import Header  from './Header';
import Menu from './Menu'
import Stack from '@mui/material/Stack';
import { getArticals } from './components/MenuOrder';
import { Grid } from '@mui/material';

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



  return (
    <div>
      <Grid
  container
  direction="column"
  alignItems="center"
>
🇰   <Menu data={data}/>
    <Header/>
    </Grid>
    </div>
  );
}

export default App;
