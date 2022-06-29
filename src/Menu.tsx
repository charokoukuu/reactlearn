import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { DataProps } from './App';

interface MenuDataProps{
  data: DataProps[]
}



export default function MultiActionAreaCard(props: MenuDataProps) {
  
  return(
    <div>
      {
        props.data.map((e,i)=>{
          return(
            <Card key = {i} style={{margin:50}}>
                   <CardActionArea style={{width:200,height:200}}>
                       <p style={{width:'50%',margin:'0 auto',fontSize:'30px',}}>{e.title}</p>
                       <p style={{width:'50%',margin:'0 auto ',fontSize:'20px',color:'#1FA7D0'}}>{e.price}円</p>
                 </CardActionArea>
               </Card>
          )
        })
      }
    </div>
  )
}
