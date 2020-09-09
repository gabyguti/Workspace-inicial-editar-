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
            //Muestro las imagenes en forma de galería
            showImages(carArray.images);
            showImages2(carArray.relatedProducts);
        }
    });
});

//Comentarios del producto
comentario = document.getElementById("addComment"); //textarea
error = document.getElementById("textError"); // mensaje error
submit = document.getElementById("submitComment"); //botón "Enviar"
exit = document.getElementById("commentExit"); // mensaje comentario exitoso

submit.addEventListener("click", () => {
    if (comentario.value == "" || comentario.value == null) {
        comentario.classList.add("bordeRojo");
        error.style.display = "block";
    } else {
        exit.style.display = "block";
        comentario.classList.add("bordeVerde");
        comentario.value = "";
        error.style.display = "none";
    }
});