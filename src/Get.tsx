import axios from 'axios';
 
interface jsonType {
    id:number,
    data:string,
    flag:boolean
}
 
export const ApiGet_Simple = (URL:string):jsonType[] => {
 
    // エラー用に空データを準備
    let return_Json:jsonType[] = [];
 
    axios
        .get<jsonType[]>('https://mocaff.net/order')
        .then((results) => {
            return_Json = results.data;
            console.log(return_Json);
      // 成功したら取得できたデータを返す
            return return_Json;
        })
        .catch((error) => {
            console.log('通信失敗');
            console.log(error.status);
            // 失敗したときは空のjsonを返す
        });
 
  // エラーの場合はこれを返す
    return return_Json;

   
};

