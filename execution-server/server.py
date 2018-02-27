import json
from flask import Flask
from flask import request
from flask import jsonify

import execution_service

app = Flask(__name__)
@app.route("/")
def server():
    return "Hello World!"

@app.route("/execution", methods=['POST'])
def execution():
    code_and_language = json.loads(request.data)
    code = code_and_language['code']
    language = code_and_language['language']
    # return jsonify(build = code, run = language)
    result = execution_service.build_and_run(code, language)
    return jsonify(result)

if __name__ == "__main__":
    execution_service.load_image()
    app.run(debug=True)
