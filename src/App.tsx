import React from 'react';
import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import { Data } from './Data';

interface DocumentData {
  [field: string]: any;
}

const App = () => {
  // const [data, setData] = useState<DocumentData[]>([]);
  // const GetData = async () => {
  //   const d = await Data();
  //   setData(data => [...data, d]);
  // }
  // useEffect(() => {
  //   GetData()
  //   console.log(data)
  // },)
  return (
    <div>
      {/* <button style={{ padding: "50vw 50vw" }} onClick={async () => {
        // console.log(await Data());
        await Timer()
        setTimeout(() => {
          console.log("GO!");
        }, 1000)
        // await Timer();
      }}></button>
      <button style={{ padding: "50vw 50vw" }} onClick={() => {
        Timer().then(() => {
          setTimeout(() => {
            console.log("Go")
          }, 1000)
        })
      }}>
      </button> */}
      <button onClick={async () => {
        console.log(await Data())
      }}></button>
    </div>
  );
}

export default App;
