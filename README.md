# React勉強班の課題内容 (期限:7月1日)
## 簡易なモバイルオーダーアプリのメニューを作ってみよう！
- UIは下記のリンクの通りでお願いします。ヘッダー色や文字色はコメント欄に記載してあります。
(https://xd.adobe.com/view/9fb4b3ba-6af3-411c-a0d7-1a198f98a79c-cae7/)

- メニューデータはサーバにあります。以下のURLでGET通信を行い、メニューデータを取得したものを描画してください。なお、GET通信にはaxiosライブラリを使用してください。
(https://mocaff.tk/order)

- データ取得に成功すると以下のようなデータが返ってきますので、map関数を使って描画してください。

[
  { id: 1, title: 'うどん', price: 320 },
  { id: 2, title: 'ラーメン', price: 280 },
  { id: 3, title: 'とりまよ丼', price: 390 },
  { id: 4, title: 'ネギトロ丼', price: 450 },
  { id: 5, title: '菜の花定食', price: 490 }
]

- サーバは貧弱なため、リクエストを送る際は必ずアプリが立ち上がった初めの一回のみにしてください。

- 型定義やコンポーネントの分け方ですが、チーム内で話し合って決めてもらって構いません。

- 該当するメニューをクリックするとid・タイトル・価格が記載されているダイアログを表示してください。

- GitHubにちょくちょくpushしてくれると嬉しいです。ブランチの分け方は任せます。

