//Imágenes del producto
var carArray = [];

function showImages(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let image = array[i];

        htmlContentToAppend += `
            <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="` + image + `" alt="">
                </div>
            </div>
            `
        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Comentarios 
var carComments = [];

function showComments() {

    let htmlContentToAppend = "";
    for (let i = 0; i < carComments.length; i++) {
        let comment = carComments[i];

        //AGREGAR ESTRELLAS AL LADO RATING COMENTARIOS, id="score1"

        htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="font-weight-bold row">Estrellas
                    <div class="col-3">
                    <h5 class="mb-1" id="score1">` + comment.score + `</h5> 
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h7 class="font-weight-bold mb-1">` + comment.user + `</h7>
                            <small>` + comment.dateTime + " " + "<br>" + `</small>
                        </div>
                        <h6 class="mb-1">` + comment.description + `</h6>
                    </div>
                </div>
            </a>
            `
    }
    document.getElementById("comment-list").innerHTML = htmlContentToAppend;
}


//Productos relacionados
var relProd = [];

function showRelProd(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let product = array[i];

        /*        if ((carArray.relatedProducts.value === 1) || (carArray.relatedProducts.value === 3)) {
                         if ((product.name == "Fiat Way") || (product.name == "Peugeot 208")) {   */

        htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2">
                        <img src="` + product.imgSrc + `" alt="` + `" class="img-thumbnail">
                    </div>
                    <div class="col-4">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + product.name + `</h4>
                            </div>
                        <p class="mb-1">` + product.description + `</p>
                        <small>` + ` Ver</small>
                    </div>
                </div>
            </a>
            `
        document.getElementById("relProd").innerHTML = htmlContentToAppend;
    }
}



//Datos del producto
document.addEventListener("DOMContentLoaded", function(e) {

    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            carArray = resultObj.data;

            let a = document.getElementById("name");
            let b = document.getElementById("categoryDescription");
            let c = document.getElementById("cost");
            let d = document.getElementById("currency");
            let e = document.getElementById("soldCount");
            let f = document.getElementById("category");

            a.innerHTML = carArray.name;
            b.innerHTML = carArray.description;
            c.innerHTML = carArray.cost;
            d.innerHTML = carArray.currency;
            e.innerHTML = carArray.soldCount;
            f.innerHTML = carArray.category;
            //Muestra imágenes en forma de galería
            showImages(carArray.images);
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            carComments = resultObj.data;
            //Muestra los comentarios
            showComments();
        }
    });

    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            relProd = resultObj.data;
            //Muestra los productos relacionados
            showRelProd(carArray.relatedProducts);
        }
    });
});


//Agregar comentario y puntuación
var comentario = document.getElementById("addComment"); //textarea
var error = document.getElementById("textError"); // mensaje error comentario
var error2 = document.getElementById("textError2"); // mensaje error calificación
var submit = document.getElementById("submitComment"); //botón "Enviar"
var exit = document.getElementById("commentExit"); // mensaje comentario exitoso
var rating1 = document.getElementById("radio1"); //estrella #1

submit.addEventListener("click", function() {

    if (comentario.value === "" || comentario.value == null) {
        comentario.classList.add("bordeRojo");
        error.style.display = "block";

    } else if (rating1.value != 1) {
        comentario.classList.remove("bordeRojo");
        error2.style.display = "block";
        error.style.display = "none";
        rating1.value = 1;

    } else if (comentario.value != "" || comentario.value != null || rating1.value === 1) {
        exit.style.display = "block";
        comentario.classList.add("bordeVerde");
        comentario.value = "";
        error.style.display = "none";
        error2.style.display = "none";
    };
});