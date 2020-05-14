from flask import Flask
from flask_cors import CORS
from routes.product import product_api, create
from routes.user import user_api

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})

app.register_blueprint(product_api)
app.register_blueprint(user_api)


@app.route('/')
def hello_world():
    return 'INDEX!'


@app.route('/test')
def test():
    test = {
        "value": "value1",
        "value1": {
            "value3": "string"
        }
    }
    return test
