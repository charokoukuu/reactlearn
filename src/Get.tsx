import axios from 'axios';
 
interface jsonType {
    title:""
    price:0,
    id:"",
    
}
 
export const Get = () => {
 
    // エラー用に空データを準備
    let return_Json;
 
    axios
        .get('https://mocaff.net/order')
        .then((results) => {
            return_Json = results.data;
            console.log(return_Json);
      // 成功したら取得できたデータを返す
            return return_Json;
        })


    return return_Json;

   
};

