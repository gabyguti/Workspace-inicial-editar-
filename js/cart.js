<<<<<<< HEAD
const CART_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
let jsonGeneral;

// Función que calcula el costo de la compra según la cantidad de productos (Grupal)
//Si la moneda de la posición 0 del objeto del array es en UYU, se pasa a USD
function result(jsonGeneral) {
    let costo;
    let object = jsonGeneral.articles;
    let valor = document.getElementById('selector').value;
    if (object[0].currency == 'UYU') {
        costo = object[0].unitCost / 40;
    }
    let resultado = valor * costo;
    document.getElementById('carro').innerHTML = `Total = ` + object[1].currency + ` ` + resultado + ``;
}

function cartt() {
    result(jsonGeneral);
}

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(CART_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            console.log(resultObj.data);
            jsonGeneral = resultObj.data;
        }
    });
});


var cartArray = [];

function showCart(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let cart = array[i];

        htmlContentToAppend += `
        <a href="cart.html" class="list-group-item list-group-item-action">
                 <div class="col-3">
                <h5 class="mb-1">` + cart.articles.name + `</h5>
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h7 class="font-weight-bold mb-1">` + cart.articles.count + `</h7>
                        <small>` + cart.articles.unitCost + " " + "<br>" + `</small>
                    </div>
                    <h6 class="mb-1">` + cart.articles.currency + `</h6>
                    <div class="col-2">
                        <img src="` + cart.articles.imgSrc + `" alt="` + `" class="img-thumbnail">
                    </div>
                </div>
            </div>
        </a>
        `
        document.getElementById("cart").innerHTML = htmlContentToAppend;
    }
}


document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(CART_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            cartArray = resultObj.data;
            showCart(cartArray);
        }
    });
=======
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

>>>>>>> parent of 300be30... Grupal Entrega 5
});