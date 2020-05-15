
from flask import Blueprint, request, make_response, jsonify
import mysql.connector
import datetime

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

    mycursor.execute(
        """select * from almacen.User where User.UserName = %s""", (username,))

    row = mycursor.fetchone()

    if username == row[1] and password == row[7]:

        return {
            "id": row[0],
            "username": row[1],
            "firstName": row[2],
            "lastName": row[3],
            "middleName": row[4],
            "gender": row[5],
            "email": row[6],
            "password": row[7],
            "phoneNumber": row[8],
            "active": row[9],
            "createdOn": row[10],
            "roleId": row[11]
        }

    return custom_error("Custom Error", 401)


@user_api.route("/user/getById")
def getById():
    data = request.get_json()
    userID = data.get("userId", "")
    mycursor = myslq.cursor()

    sql = """select * from almacen.User WHERE ID = %s"""
    values = (userID, )
    mycursor.execute(sql, values)

    data = mycursor.fetchone()

    return jsonify(data)


@user_api.route("/user/user-list")
def getUserList():

    mycursor = myslq.cursor()
    mycursor.execute("""select ID,  UserName, FirstName, LastName, MiddleName, Gender, Email, Pasword, PhoneNumber, Active, CreatedOn, RoleID from almacen.User WHERE Active = 1""")
    data = mycursor.fetchall()

    return jsonify(data)


@user_api.route("/user/create", methods=['POST'])
def create():
    try:
        data = request.get_json()
        username = data.get("username", "")
        firstName = data.get("firstName", "")
        middleName = data.get("middleName", "")
        lastName = data.get("lastName", "")
        gender = data.get("gender", "")
        email = data.get("email", "")
        password = data.get("password", "")
        phoneNumber = data.get("phoneNumber", "")
        active = 1
        createdOn = datetime.datetime.now()
        roleId = data.get("roleId", "")

        mycursor = myslq.cursor()

        sql = "INSERT INTO User (UserName, FirstName, LastName, MiddleName, Gender, Email, Pasword,PhoneNumber, Active,  CreatedOn, RoleID) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (username,  firstName, lastName, middleName, gender,
               email, password, phoneNumber, active, createdOn, roleId)

        mycursor.execute(sql, val)
        myslq.commit()
        return "Se ha agregado un nuevo usuario."
    except NameError:
        return jsonify(NameError)


@user_api.route("/user/desactivate", methods=['POST'])
def desactivate():
    try:
        data = request.get_json()
        userID = data.get("userId", "")

        mycursor = myslq.cursor()

        sql = """UPDATE User SET Active = 0 WHERE ID = %s"""
        val = (userID,)

        mycursor.execute(sql, val)
        myslq.commit()
        return "Se ha desactivado el usuario."
    except NameError:
        return jsonify(NameError)


@user_api.route("/user/update", methods=['POST'])
def update():
    data = request.get_json()
    print(data)
    try:

        userID = data.get("id", "")
        username = data.get("username", "")
        firstName = data.get("firstName", "")
        middleName = data.get("middleName", "")
        lastName = data.get("lastName", "")
        gender = data.get("gender", "")
        email = data.get("email", "")
        password = data.get("password", "")
        phoneNumber = data.get("phoneNumber", "")
        roleId = data.get("roleId", "")

        mycursor = myslq.cursor()

        sql = "UPDATE User SET UserName = %s, FirstName = %s, LastName = %s, MiddleName = %s,  Gender = %s,Email = %s,Pasword = %s,PhoneNumber = %s,RoleID = %s WHERE ID = %s"
        val = (username, firstName, lastName,middleName, gender, email , password, phoneNumber, roleId, userID,)

        mycursor.execute(sql, val)
        myslq.commit()
        return "Se ha actualizado correctamente"
    except NameError:
        return jsonify(NameError)
