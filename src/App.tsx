import { useEffect, useState } from "react";
import FCard from "./compornent/Card";
import Header from "./compornent/Header";
import { Data } from "./Database";

// Dataの型を定義
export interface DataProps {
  id: number;
  title: string;
  price: number;
};

function App() {
  const [data, setData] = useState<DataProps[]>([]);
  const [menu, setMenu] = useState();
  useEffect(() => {
    // 即時関数内でasync awaitを利用
    // 値をsetDataで外部変数へ出力
    (async () => {
      setData((await Data()).data)
    })()
    // },[])から配列を持たせることで，一回のみの実行に制限
  }, [])
  console.log(data)
  return (
    <div>
      <Header />
      <FCard
        data={data} onClick={(e) => {
          alert("choosed menu\nTitle:" + (e.title) + "\nPrice:" + (e.price) + "\nID:" + (e.id))
        }} />
    </div>
  );
}

export default App;
