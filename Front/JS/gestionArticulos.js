$(document).ready(() => {
    CargarArticulos();

});

function redondearACentena(numero) {
    return Math.round(numero / 100) * 100;
}

// Muestra los articulos almacenados en la base de datos 
function CargarArticulos() {
    $.get(UrlApi + "/api/articulo", (items) => {
        let tbl = $("#tblArticulo");
        console.log(items)
        items.forEach(p => {
            tbl.append(`<tr>
          <td>${p.Codigo}</td>
          <td>${p.Nombre}</td>
          <td>${p.Descripcion}</td>
          <td>$${redondearACentena(p.PrecioVenta).toLocaleString()}</td>
          <td>${p.Stock}</td>
          <td><img width="100" src="/Front/Imagenes/${p.Imagen}"></td>
          <td class="d-flex justify-content-between">
              <div class="container-fluid text-center">
                  <button type="button" onClick="Actualizar(${p.IdArticulo})" class="btn btn-success actualizar-btn">Actualizar</button>
              </div>
              <div class="container-fluid text-center">
                  <button type="button" class="btn btn-danger eliminar-btn">Eliminar</button>
              </div>
          </td>
          </tr>`);
        });
    });
}

function guardarProducto() {
    // Obtener los valores de los campos del formulario
    const codigo = $("#sku").val();
    const nombre = $("#nombre").val();
    const precio = $("#precio").val();
    const stock = $("#stock").val();
    const categoria = $("#categoria").val();
    const descripcion = $("descripcion").val();
    const imagen = $("#imagen").val();
    const subcategoria = $("#nombre-destino").val();
    // Crear el objeto con los datos del producto
    const producto = {
        codigo: codigo,
        nombre: nombre,
        precio: precio,
        stock: stock,
        categoria: categoria,
        descripcion: descripcion,
        imagen: imagen,
        subcategoria: subcategoria
    };

    console.log(producto);

    $.post(apiUrl + "/api/articulo", producto,
        (rs) => {
            console.log(rs);
        })
}

// Definimos la URL de la API
const apiUrl = "http://localhost:3000";

// Obtenemos la lista de categorías desde la API
$.get(apiUrl + "/api/categoria", function (data) {
    // Agregamos las opciones al primer menú desplegable
    $("#categoria").append("<option value=''>Selecciona una categoría</option>");
    data.forEach(function (categoria) {
        $("#categoria").append("<option value='" + categoria.IdCategoria + "'>" + categoria.Nombre + "</option>");
    });
});

// Cuando se selecciona una categoría, obtenemos las subcategorías correspondientes
$("#categoria").change(function () {
    const idCategoria = $(this).val();
    if (idCategoria !== "") {
        $.get(apiUrl + "/api/categoria/" + idCategoria, function (data) {
            // Limpiamos el segundo menú desplegable y agregamos las opciones correspondientes
            $("#subcategoria").empty().append("<option value=''>Selecciona una subcategoría</option>");
            data.forEach(function (subcategoria) {
                $("#subcategoria").append("<option value='" + subcategoria.IdCategoria + "'>" + subcategoria.Nombre + "</option>");
            });
        });
    } else {
        // Si no se ha seleccionado ninguna categoría, limpiamos el segundo y tercer menú desplegable
        $("#subcategoria").empty().append("<option value=''>Selecciona una subcategoría</option>");
        $("#subsubcategoria").empty().append("<option value=''>Selecciona una subsubcategoría</option>");
    }
});

// Cuando se selecciona una subcategoría, obtenemos las subsubcategorías correspondientes
$("#subcategoria").change(function () {
    const idSubcategoria = $(this).val();
    if (idSubcategoria !== "") {
        $.get(apiUrl + "/api/categoria/" + idSubcategoria, function (data) {
            // Limpiamos el tercer menú desplegable y agregamos las opciones correspondientes
            $("#subsubcategoria").empty().append("<option value=''>Selecciona una subsubcategoría</option>");
            data.forEach(function (subsubcategoria) {
                $("#subsubcategoria").append("<option value='" + subsubcategoria.IdCategoria + "'>" + subsubcategoria.Nombre + "</option>");
            });
        });
    } else {
        // Si no se ha seleccionado ninguna subcategoría, limpiamos el tercer menú desplegable
        $("#subsubcategoria").empty().append("<option value=''>Selecciona una subsubcategoría</option>");
    }
});