var Product = /** @class */ (function () {
    function Product(name, price, pId) {
        this.inCart = false;
        this.isOrdered = false;
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    Product.prototype.addToCart = function () {
        this.inCart = true;
    };
    Product.prototype.buyProduct = function () {
        if (this.inCart) {
            this.isOrdered = true;
            return "product name is: ".concat(this.name.toUpperCase(), " and its price is :").concat(this.price, " and its id is: ").concat(this.pId);
        }
        else {
            return 'no Product in Cart';
        }
    };
    return Product;
}());
var product = new Product('samsung', 100000, 234365);
product.addToCart();
console.log(product.buyProduct());
var product = new Product('iphone', 50000, 2325);
product.addToCart();
console.log(product.buyProduct());
