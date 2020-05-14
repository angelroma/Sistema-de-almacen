from flask import Blueprint, jsonify
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
    mycursor.execute("""select * from almacen.Product""")
    data = mycursor.fetchall()

    return jsonify(data)
