import { resolve } from "path";
import { useEffect } from "react";
import { Data } from "./Data";


const MakeData = async () => {
  const database = await Data();
  return database
}
const db = MakeData();
console.log(db)


const App = () => {
  return (

    <div>
    </div>
  );
}

export default App;
