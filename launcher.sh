#! /bin/bash
fuser -k 3000/tcp
fuser -k 5000/tcp
redis-server &
cd ./execution-server
python server.py &
cd ..
cd ./oj-client
ng build --watch &
cd ..
cd ./oj-server
#npm install

npm start &

echo "================================"
read -p "PRESS [ENTER] to terminate processes." PRESSKEY

fuser -k 3000/tcp
fuser -k 5000/tcp