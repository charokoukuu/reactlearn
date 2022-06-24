import axios from "axios"
import { resolve } from "path"

export const Data = async () => {
  let datab = await axios.get("https://mocaff.net/order")
  datab = datab.data
  return datab

}

export const Timer = () => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      console.log("Let's!")
      resolve()
    }, 1000)
  })
}

