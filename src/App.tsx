import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Data } from './Data';

const App = () => {
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
      <script>
        const data = await Data()
        console.log(await Data())
      </script>
      <button onClick={async () => {
        console.log(await Data())
      }}>
        <button onClick={() => {

        }}></button>


      </button>
    </div>
  );
}

export default App;
