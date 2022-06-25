import axios from "axios"
import { DataProps } from "./App";

export const Data: () => Promise<any> = async () => {
  const RetData: DataProps = await axios.get("https://mocaff.net/order");
  return new Promise(resolve => {
    resolve(RetData);
  })
}

