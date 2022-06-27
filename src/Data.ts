import axios from "axios"
import { RecieveDataProps } from "./App"

export const Data: () => Promise<any> = async () => {
  // awaitはPromiseの内部では作動しない．
  // constでデータを得てから，resolveに対して値を入力し返却
  const retData: RecieveDataProps = await axios.get("https://mocaff.net/order")
  return new Promise(resolve => {
    resolve(retData)
  })
}