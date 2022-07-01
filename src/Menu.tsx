import * as React from 'react';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { DataProps } from './App';
import e from 'express';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface MenuDataProps{
  data: DataProps[]
}



export default function MultiActionAreaCard(props: MenuDataProps) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return(
    <div>
      {
        props.data.map((e,i)=>{
          
          return(   
            <Card key = {i} style={{margin:50}}>
              <Button variant="outlined" onClick={handleClickOpen}>
                   <CardActionArea style={{width:200,height:200}}>
                       <p style={{margin:'0 auto',fontSize:'30px',}}>{e.title}</p>
                       <p style={{margin:'0 auto ',fontSize:'20px',color:'#1FA7D0'}}>{e.price}円</p>
                 </CardActionArea>
                 </Button>
                
                 <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"選択されたメニュー"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{margin:'0 auto '}}>
            <p>Title:{e.title}</p>
            <p>Price:{e.price}円</p>
            <p>ID:{e.id}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus style={{margin:'0 auto '}}>
            閉じる
          </Button>
        </DialogActions>
        </Dialog>
        </Card>
               
          )
        })
      }
    </div>
  )
}