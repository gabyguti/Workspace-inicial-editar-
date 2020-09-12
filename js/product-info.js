var carArray = [];

function showImages(array) { //Muestra imágenes del producto
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
            <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
                </div>
            </div>
            `
        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            carArray = resultObj.data;
            //Datos del producto
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
});


var relatedProducts = [];

function showRelatedProducts(array) { // Muestra productos relacionados
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let relProd = array[i];

        htmlContentToAppend += `
            <div class="col-lg-3 col-md-4 col-6">
                <div class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="` + relProd + `" alt="">
                </div>
            </div>
            `
        document.getElementById("productImagesGallery2").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            relatedProducts = resultObj.data;

            let a = document.getElementById("rel");

            a.innerHTML = relatedProducts.name;
            //Muestra imágenes en forma de galería
            showRelatedProducts(relatedProducts.relProd);
        }
    });
});


















//Comentarios 
var carComments = [];

function showComments() {

    let htmlContentToAppend = "";
    for (let i = 0; i < carComments.length; i++) {
        let comment = carComments[i];

        htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="font-weight-bold row">Estrellas
                    <div class="col-3">
                    <h5 class="mb-1">` + comment.score + `</h5>
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

//Llama al Json 
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            carComments = resultObj.data;
            //Muestra los comentarios
            showComments();
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

    if (comentario.value == "" || comentario.value == null) {
        comentario.classList.add("bordeRojo");
        error.style.display = "block";

    } else if (rating1.value != 1) {
        error2.style.display = "block";
        error.style.display = "none";
        comentario.classList.remove("bordeRojo");

    } else if (comentario.value != "" || comentario.value != null && rating1.value == 1) {
        exit.style.display = "block";
        comentario.classList.add("bordeVerde");
        comentario.value = "";
        error.style.display = "none";
        error2.style.display = "none";
    };
});