    var productsArray = [];

    function showProductsList(array) {

        let htmlContentToAppend = "";
        for (let i = 0; i < array.length; i++) {
            let product = array[i];

            /*el operador += agrega un valor a la variable*/
            htmlContentToAppend += ` 
        <div class="list-group-item list-group-item-action" onclick="desplegar(PRODUCTS_URL)">
            <div class="row " id="` + product.name + `">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">` + product.name + `</h4>
                        <small class="text-muted">` + product.currency + " " + product.cost + "<br>" + product.soldCount + ` artículos vendidos</small>
                       
                    </div>
                    <div> ` + product.description + `</div>
                </div>
            </div>
        </div>
        `
                //Con getElementById, seleccionamos el id "product-list" que se vincula a 
                //products.html, y con innerHTML, cambiamos el contenido del HTML
            document.getElementById("product-list").innerHTML = htmlContentToAppend;
        }
    }

    //Función que se ejecuta una vez que se haya lanzado el evento de
    //que el documento se encuentra cargado, es decir, se encuentran todos los
    //elementos HTML presentes.

    document.addEventListener("DOMContentLoaded", function(e) {
        getJSONData(PRODUCTS_URL).then(function(resultObj) {
            if (resultObj.status === "ok") {
                productsArray = resultObj.data;
                //Muestro las categorías ordenadas HJFHF
                showProductsList(productsArray);
            }
        });
    });