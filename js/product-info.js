var carArray = [];

function showImages(array) {

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

function showImages2(array) {

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
        document.getElementById("productImagesGallery2").innerHTML = htmlContentToAppend;
    }
}

var carComments = [];

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            carArray = resultObj.data;
            //Datos del producto
            let a = document.getElementById("categoryName");
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


//Comentarios de usuarios
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PPRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            carComments = resultObj.data;

            let a = document.getElementById("score");
            let b = document.getElementById("description");
            let c = document.getElementById("user");
            let d = document.getElementById("dateTime");

            a.innerHTML = carComments.score;
            b.innerHTML = carComments.description;
            c.innerHTML = carComments.user;
            d.innerHTML = carComments.dateTime;
            //Muestra imagenes en forma de galeria
            showImages2(carArray.relatedProducts);
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