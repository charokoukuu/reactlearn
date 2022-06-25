import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataProps } from '../App';

interface FCardProps {
  data: DataProps[];
}


export default function FCard(props: FCardProps) {
  return (
    <div>
      {props.data.map((e: any, i: any) => {
        return (
          <Card key={i} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {props.data[i].title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.data[i].price}yen
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" onClick={() => {
                alert("choosed menu\nTitle:" + (props.data[i].title) + "\nPrice:" + (props.data[i].price) + "\nID:" + (props.data[i].id))
              }}>+Cart</Button>
            </CardActions>
          </Card>
        )
      })
      }
    </div>
  )
}
