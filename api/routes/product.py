from flask import Blueprint, jsonify, request
import datetime
import mysql.connector

myslq = mysql.connector.connect(
    host="165.227.62.99",
    user="angelroma",
    passwd="Secure!31",
    database="almacen"
)

product_api = Blueprint('product', __name__)


@product_api.route("/product/product-list")
def getProductList():

    mycursor = myslq.cursor()
    mycursor.execute("""select * from almacen.Product WHERE Active = 1""")
    data = mycursor.fetchall()

    return jsonify(data)


@product_api.route("/product/create", methods=['POST'])
def create():
    try:
        data = request.get_json()
        name = data.get("name", "")
        description = data.get("description", "")
        price = data.get("price", "")
        active = 1
        createdOn = datetime.datetime.now()
        category = 1

        mycursor = myslq.cursor()

        sql = "INSERT INTO Product (Name, Description, Price, Active, CreatedOn, CategoryID) VALUES (%s, %s, %s, %s, %s, %s)"
        val = (name, description, price, active, createdOn, category)

        mycursor.execute(sql, val)
        myslq.commit()
        return "Se ha agregado un nuevo producto."
    except NameError:
        return jsonify(NameError)


@product_api.route("/product/desactivate", methods=['POST'])
def desactivate():
    try:
        data = request.get_json()
        productID = data.get("producId", "")

        mycursor = myslq.cursor()

        sql = """UPDATE Product SET Active = 0 WHERE ID = %s"""
        val = (productID,)

        mycursor.execute(sql, val)
        myslq.commit()
        return "Se ha agregado un nuevo producto."
    except NameError:
        return jsonify(NameError)

