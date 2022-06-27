import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions } from '@mui/material';



export default function MultiActionAreaCard() {
  return (
    <Card>
         <CardActionArea style={{width:200,height:200}}>
            <p style={{width:'50%',margin:'0 auto',fontSize:'30px',}}>iosdi</p>
            <p style={{width:'50%',margin:'0 auto ',fontSize:'20px',color:'#1FA7D0'}}>dknk</p>
      </CardActionArea>
    </Card>
   
  );
}
