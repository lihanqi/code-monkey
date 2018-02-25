import json
from flask import Flask
from flask import request
app = Flask(__name__)

@app.route("/")
def server():
    print "GET REQUEST"
    return "Hello World!"

@app.route("/execution", methods=['POST'])
def execution():
    print request.data
    return "Flask return msg: data received"

if __name__ == "__main__":
    app.run(debug=True)
