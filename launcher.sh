#! /bin/bash
fuser -k 3000/tcp
fuser -k 5000/tcp
redis-server &
cd ./executor_server
sudo python server.py &
cd ..
cd ./oj-server
#npm install

npm start &

echo "================================"
read -p "PRESS [ENTER] to terminate processes." PRESSKEY

fuser -k 3000/tcp
fuser -k 5000/tcp