'use strcit'

class Producto{
    constructor(descrition,price,stock){
        this.description = descrition;
        this.price = price;
        this.stock =stock;
    }
    showInfo(){
    alert(`Descripción: ${this.description}, Precio: ${this.price}, Stock: ${this.stock}`);
    }
    minusStock(cantidad){
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            alert(`${cantidad} unidades de ${this.description} han sido restadas del stock.`);
        } else {
            alert("Stock insuficiente para restar.");
        }

    }
    incrementStock(cantidad) {
        this.stock += cantidad;
        alert(`${cantidad} unidades de ${this.description} han sido añadidas al stock.`);
    }
    updatePrice(newPrice) {
        this.precio = newPrice;
       alert(`El precio de ${this.description} ha sido actualizado a ${this.precio}.`);
    }

}
let Producto1 = new Producto("Chompa",20,40);
Producto1.showInfo();
Producto1.minusStock(20);
Producto1.incrementStock(30);
Producto1.updatePrice(25);
Producto1.showInfo();