from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'INDEX!'

@app.route('/hello')
def hello():
    return 'Hello World!'

@app.route("/me")
def me_api():
    return {
        "username": "Angel",
        "theme": "haha",
        "image": "RUL",
    }