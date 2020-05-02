docker-compose build
docker-compose up -d
docker exec -it *** bash
    npm i -g create-react-app
    create-react-app react-tutorial
    cd react-tutorial/
    yarn start

http://localhost:3001/


ちょっとした勉強メモ
reducer は, state を操作するメソッドや管理そのもの
action は, type をうまく使い分けることで component から reducer を操作するための橋渡し
store や reducer は最初に App.js に初期設定する必要あり
