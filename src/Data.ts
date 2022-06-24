import axios from "axios"
import { resolve } from "path"

// export const Data = async () => {
//   let datab = await axios.get("https://mocaff.net/order")
//   datab = datab.data
//   // console.log(datab)
//   return datab
// }

export const Data = () => {
  return new Promise(resolve => {
    resolve(axios.get("https://mocaff.net/order"))
  })
}

