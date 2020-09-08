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
            </div>q
            `
        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            carArray = resultObj.data;

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
        }
    });
});