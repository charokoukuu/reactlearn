import React from 'react';
import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import { resolve } from 'path';
import { Data } from './Data';


const App = () => {
  let db
  useEffect(() => {
    const MakeDataBase = async () => {
      await new Promise((resolve: any) => {
        db = Data();
        resolve();
      })
    }
    MakeDataBase();
  }, [])
  console.log(db)

  return (
    <div>
    </div>
  );
}

export default App;
