import axios from 'axios';

// GET通信

axios.get('https://mocaff.net/order')

    // thenで成功した場合の処理をかける
    .then(response => {
        console.log('status:', response.status); // 200
        console.log('body:', response.data);     // response body.

    // catchでエラー時の挙動を定義する
    }).catch(err => {
        console.log('err:', err);
    });