class Product {
    name: string;
    price: number;
    pId: number;
    inCart = false;
    isOrdered = false;
    constructor(name: string, price: number, pId: number) {
        this.name = name;
        this.price = price;
        this.pId = pId;

    }    
    addToCart(): void{
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            this.isOrdered = true;
            return`product name is: ${this.name.toUpperCase()} and its price is :${this.price} and its id is: ${this.pId}`
        } else {
            return 'no Product in Cart'
        }
    }
}

var product = new Product('samsung', 100000, 234365);
product.addToCart()
console.log(product.buyProduct())
var product = new Product('iphone', 50000, 2325);
product.addToCart()
console.log(product.buyProduct())
