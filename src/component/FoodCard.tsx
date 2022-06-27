import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  {MenuData} from '../App';


interface FoodCardProps{
    menu: MenuData;
    onClick: ()=>void;
};


export const FoodCard=(props:FoodCardProps)=> {
  return (
        <Card style={{width: "345"}} onClick={()=>{
            props.onClick();
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
                     {props.menu.title}
                </Typography>

                <Typography variant="body2" color="#48AA9B" sx={{ fontSize: 45 }}>
                    {props.menu.price}円
                </Typography>
            </CardContent>
        </Card>
  );
}
