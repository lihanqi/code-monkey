import json
from flask import Flask
from flask import request
from flask import jsonify
app = Flask(__name__)

@app.route("/")
def server():
    print "GET REQUEST"
    return "Hello World!"

@app.route("/execution", methods=['POST'])
def execution():
    print request.data
    return jsonify(build = "flask build", run = "flask run")

if __name__ == "__main__":
    app.run(debug=True)
