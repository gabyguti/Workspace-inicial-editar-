const CART_URL = "https://japdevdep.github.io/ecommerce-api/cart/654.json";
let jsonGeneral;
let jsonGeneral1;
let jsonSubtotal;
let totalFinal = [];

//ENTREGA 5: Json productos del carrito
var cartArray = [];

function showCart(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let cart = array[i];

        htmlContentToAppend += `
        <div class="container-md-6 my-3">
        <a href="cart.html" class="row list-group-item-action">
        <div class="col-md-3"><img src="` + cart.src + `" alt="` + `" class="img-thumbnail"></div>
            <h5 class="col">` + cart.name + `</h5>
            <h6 class="col">` + cart.currency + "   " + cart.unitCost + `</h6>
            </div>
            <div container-md-6>    
                <h7 class="col">` + cart.count + `</h7>
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

// //ENTREGA 5: Grupal
//Cálculo cantidad de productos por costo unitario del Producto 1
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

// Mismo cálculo del Producto 2
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


//ENTREGA 6: Cálculo SUBTOTAL
function subTotal() {
    let costo1;
    let costo2;
    let object = jsonSubtotal.articles;
    let valor1 = document.getElementById('selector').value; //Input cantidad producto 1
    let valor2 = document.getElementById('selector1').value; //Input cantidad producto 2

    costo1 = object[0].unitCost / 40; //Pasa de $ a USD
    costo2 = object[1].unitCost;

    totalFinal = (valor1 * costo1) + (valor2 * costo2);
    document.getElementById('subtotal').innerHTML = object[1].currency + ` ` + totalFinal + ``; //Muestra el valor subtotal en pantalla
}

// Cálculo ENVIO Y TOTAL
function costoEnvioConTotal() {
    let costoEnvio = document.getElementById('costoEnvio'); //Muestra el valor del envío en pantalla
    let tipoEnvio = document.getElementById('envio').value; //Select con drop-down y opciones de envío

    let total = document.getElementById('total'); //Muestra el valor del total en pantalla

    if (tipoEnvio == 1) {
        costoEnvio.innerHTML = `USD 12`;
        total.innerHTML = totalFinal + 12;
    } else if (tipoEnvio == 2) {
        costoEnvio.innerHTML = `USD 25`;
        total.innerHTML = totalFinal + 25;
    } else if (tipoEnvio == 3) {
        costoEnvio.innerHTML = `USD 50`;
        total.innerHTML = totalFinal + 50;
    }
}

// Validación Envío
function validarEnvio() {
    var envio = document.getElementById('envio').value;
    var errorEnvio = document.getElementById('errorEnvio');

    if (envio == 0) {
        document.getElementById('envio').style.borderColor = 'red';
        errorEnvio.innerHTML = 'Debe seleccionar metodo de envio';
    } else if (envio != 0) {
        document.getElementById('envio').style.borderColor = 'black';
        errorEnvio.innerHTML = '';
        document.getElementById('myBtn').style.display = "block";
        document.getElementById('btn2').style.display = "block";
    };
};

// Validación Pago
function validarPago() {
    var pago = document.form.tarjeta; //Toma el elemento con name "tarjeta" que está dentro del elemento de name "form" (línea 157-160 de cart.html)
    var errorFormaPago = document.getElementById('errorFormaPago');
    var errorFormaPago2 = document.getElementById('errorFormaPago2');

    for (i = 0; i < pago.length; i++) {
        if (pago[i].checked) {
            errorFormaPago.innerHTML = '';
            errorFormaPago2.innerHTML = '';
            document.getElementById('myBtn2').style.display = "block";
        } else {
            errorFormaPago.innerHTML = 'Debe seleccionar forma de pago';
            errorFormaPago2.innerHTML = 'Debe seleccionar forma de pago';
        }
    }
}
// Validación Modal
function validarModal() {
    var pago1 = document.getElementById('pago1');
    // var pago2 = document.getElementById('pago2');
    // var pago3 = document.getElementById('pago3');
    var tipoTarj = document.getElementById('tarj').value;
    var errorFormaPago = document.getElementById('errorFormaPago');

    for (i = 0; i < pago1.length; i++) {
        if ((pago1[i].checked) && (tipoTarj == 0) && (document.forms["form"]["nom"] == "")) {
            errorFormaPago.innerHTML = 'Complete todos los campos';
            document.getElementById("aceptar").disabled = true;
        } else {
            errorFormaPago.innerHTML = 'asd';
            document.getElementById("aceptar").disabled = false;
        }
    }
}

function confirmar() {
    exito.innerHTML = '¡Has comprado con éxito!';
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