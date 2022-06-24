import axios from "axios"
import { DataProps, ReceiveDataProps } from "./App"
export const Data: () => Promise<any> = async () => {
  // awaitはPromiseの内部では作動しない．
  // constでデータを得てから，resolveに対して値を入力し返却
  const retData: ReceiveDataProps[] = await axios.get("https://mocaff.net/order")
  return new Promise(resolve => {
    // 入力データを受け取れた場合動作するコード（return的ニュアンス？）
    resolve(retData)
  })
}