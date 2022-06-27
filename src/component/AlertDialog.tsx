import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Data } from '../App';

interface AlertDialogProps{
    open: boolean;
    menu:Data;
    onClose: ()=>void;
}

export const AlertDialog= (props:AlertDialogProps)=> {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          選択したメニュー
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Title:{props.menu.title}
            Price:{props.menu.price}
            Id:{props.menu.id}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
