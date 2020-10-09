const CART_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
let jsonGeneral;
let jsonGeneral1;
let jsonSubtotal;
let jsonTotal;

/*Cálculo cantidad de productos por costo unitario del Producto 1*/
function result(jsonGeneral) {
    let costo;
    let object = jsonGeneral.articles;
    let valor = document.getElementById('selector').value;
    if (object[0].currency == 'UYU') {
        costo = object[0].unitCost / 40;
    }
    let resultado = valor * costo;
    document.getElementById('carro').innerHTML = object[1].currency + ` ` + resultado + ``;
}

function cartt() {
    result(jsonGeneral);
}

/*Mismo cálculo del Producto 2*/
function result1(jsonGeneral1) {
    let costo;
    let object = jsonGeneral1.articles;
    let valor = document.getElementById('selector1').value;
    if (object[1].currency == 'USD') {
        costo = object[1].unitCost;
    }
    let resultado = valor * costo;
    document.getElementById('carro1').innerHTML = object[1].currency + ` ` + resultado + ``;
}

function cartt1() {
    result1(jsonGeneral1);
}

/*Cálculo subtotal*/
function subtotal(jsonSubtotal) {
    let valorProducto1 = document.getElementById('carro').value;
    let valorProducto2 = document.getElementById('carro1').value;
    let object = ss.articles;
    let resultado = valorProducto1 + valorProducto2;
    document.getElementById('subtotal').innerHTML = object[1].currency + ` ` + resultado + ``;
}

function cartt2() {
    subtotal(jsonSubtotal);
}


document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(CART_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj.data);
            jsonGeneral = resultObj.data;
            jsonGeneral1 = resultObj.data;
            jsonSubtotal = resultObj.data;
        };
    });
});


// Json productos del carrito
var cartArray = [];

function showCart(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let cart = array[i];

        htmlContentToAppend += `
        <a href="cart.html" class="list-group-item list-group-item-action">
                 <div class="row">
                <h5 class="col-sm">` + cart.name + `</h5>
                </div>
                <div> 
                    <h6 class="mb-1">` + cart.currency + " " + cart.unitCost + `</h6>
                    <h7 class="font-weight-bold mb-1">` + cart.count + `</h7>
                    <div class="col-4">
                        <img src="` + cart.src + `" alt="` + `" class="img-thumbnail">
                    </div>
                </div>
            </div>
        </a>
        `
    }
    document.getElementById("cart").innerHTML = htmlContentToAppend;
};

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(CART_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            cartArray = resultObj.data;
            showCart(cartArray.articles);
        };
    });
});