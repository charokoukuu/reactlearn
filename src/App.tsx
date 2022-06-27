import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {FoodCard} from './component/FoodCard';
import Header from './Header';
import { AlertDialog } from './component/AlertDialog';


export interface MenuData{
  id:string;
  price:number;
  title:string;
};

export interface Data{
  id:string;
  price:number;
  title:string;
};


export const App=()=> {
  const [menu,setMenu]=useState<MenuData[]>([])
  const [dialogOpen,setDialogOpen]=useState(false)
  const [choose,setChoose]=useState<Data>({
    id:"",
    price:0,
    title:""
  });
  
  useEffect(()=>{
    axios.get('https://mocaff.net/order').then(res=>{
      setMenu(res.data)
      // console.log(menu)
    })
  },[]);

  return (
    <div>
      <Header />
 
        {menu.map((value,index)=>{
          return (
            <FoodCard key={index} menu={value} onClick={()=>{
              console.log(value);
              setChoose({
                id: value.id,
                price: value.price,
                title: value.title
              });
              setDialogOpen(true);
            }}/>
            );
          })
        }
        <AlertDialog open={dialogOpen} menu={choose} onClose={()=>{
          setDialogOpen(false);
        }}/>

    </div>
  );
}

export default App;
