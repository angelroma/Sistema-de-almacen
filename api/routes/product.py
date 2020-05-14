from flask import Blueprint

product_api = Blueprint('product', __name__)

@product_api.route("/product/product-list")
def getProductList():
    
    return "list of accounts"