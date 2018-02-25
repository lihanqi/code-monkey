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
    codeAndLanguage = json.loads(request.data)
    code = codeAndLanguage['code']
    language = codeAndLanguage['language']

    print code
    print language
    # print request.data.build
    # print request.data.run
    return jsonify(build = code, run = language)

if __name__ == "__main__":
    app.run(debug=True)