import axios from 'axios';
import { useEffect, useState } from "react";


import './App.css';

export interface MenuData {
  title: string
  price: number
  id: string
}

export const App=()=> {
  const [menu, setMenu] = useState<MenuData[]>([]);


  useEffect(()=>{
 
    axios.get('https://mocaff.net/order')
        .then((results) => {
            setMenu( results.data);
            console.log(menu);
      // 成功したら取得できたデータを返す
          return menu;
        })


  },[])
  
  return (
    <div>
      {
        menu.map((item:any,index) => {
          return (
           <p>{item}</p>
            
          )
        })
      }
    </div>
  );

};