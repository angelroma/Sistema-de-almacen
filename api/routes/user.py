
from flask import Blueprint, request, make_response, jsonify
import mysql.connector

myslq = mysql.connector.connect(
    host="165.227.62.99",
    user="angelroma",
    passwd="Secure!31",
    database="almacen"
)

user_api = Blueprint('user', __name__)

def custom_error(message, status_code):
    return make_response(jsonify(message), status_code)

@user_api.route("/login", methods=['POST'])
def login():
    data = request.get_json()
    username = data.get("username", "")
    password = data.get("password", "")

    mycursor = myslq.cursor()

    mycursor.execute("""select * from almacen.User where User.UserName = %s""", (username,))

    row = mycursor.fetchone()
    

    if username == row[1] and password == row[7]:

        return {
            "id": row[0],
            "username":row[1],
            "firstName":row[2],
            "lastName":row[3],
            "middleName":row[4],
            "gender":row[5],
            "email":row[6],
            "password":row[7],
            "phoneNumber":row[8],
            "active":row[9],
            "createdOn":row[10],
            "roleId":row[11]
        }

    return custom_error("Custom Error", 401)
