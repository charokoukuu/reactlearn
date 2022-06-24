// Data.tsからのData関数を取得
import axios from "axios";
import { useEffect, useState } from "react";
import { Data } from "./Data";

// 即時関数で実行することで，dbを取得

export interface DataProps {
  id: number;
  title: string;
  price: number;
}

export interface ReceiveDataProps {
  data: DataProps[];
}

const App = () => {
  const [data, setData] = useState<DataProps[]>([]);
  // const [time, SetTime] = useState<number>(0);
  useEffect(() => {
    (async () => {
      setData((await Data()).data)
    })()
  }, [])

  return (
    <div>
      <button onClick={() => {
        console.log(data.length)
      }
      }></button>
      {data.map((e: DataProps, i: number) => {
        return (<button key={i} onClick={() => {
          alert(e.title)
        }}>{e.title} {e.price}</button>)
      })}
    </div>
  );
}

export default App;
