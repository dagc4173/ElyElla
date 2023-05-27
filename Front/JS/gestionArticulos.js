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
                  <button type="button" onClick="Eliminar(${p.IdArticulo})"class="btn btn-danger eliminar-btn">Eliminar</button>
              </div>
          </td>
          </tr>`);
        });
    });
}

function guardarProducto() {
    // Obtener los valores de los campos del formulario
    const IdCategoria = $("#subsubcategoria").val();
    const Codigo = $("#codigo").val();
    const Nombre = $("#nombre").val();
    const PrecioCompra = $("#precio").val();
    const Stock = $("#stock").val();
    const Descripcion = $("#descripcion").val();
    const Imagen = $("#imagen").val();
    
    // Crear el objeto con los datos del producto
    const producto = {
        IdCategoria: IdCategoria,
        Codigo: Codigo,
        Nombre: Nombre,
        PrecioCompra: PrecioCompra,
        Stock: Stock,
        Descripcion: Descripcion,
        Imagen: Imagen,
    };

    console.log(producto);

    $.ajax({
        url: apiUrl + "/api/articulo",
        type: "POST",
        data: JSON.stringify(producto),
        contentType: "application/json",
        success: function(response) {
          console.log(response);
        },
        error: function(error) {
          console.error(error);
        }
      });
}

// Definimos la URL de la API
const apiUrl = "http://localhost:3000";

// Obtenemos la lista de categorías desde la API
$.get(apiUrl + "/api/categoria", function(data) {
    // Agregamos las opciones al primer menú desplegable
    $.each(data, function(index, categoria) {
        if (categoria.IdCategoriaPadre === null) {
            $("#categoria").append("<option value='" + categoria.IdCategoria + "'>" + categoria.Nombre + "</option>");
        }
    });
});

// Cuando se seleccione una categoría, obtenemos las subcategorías correspondientes
$("#categoria").change(function() {
    // Obtenemos el ID de la categoría seleccionada
    const idCategoria = $(this).val();

    // Limpiamos las opciones del segundo y tercer menú desplegable
    $("#subcategoria").empty();
    $("#subsubcategoria").empty();

    // Si no se ha seleccionado ninguna categoría, no hacemos nada
    if (idCategoria === "") {
        return;
    }

    // Obtenemos las subcategorías correspondientes desde la API
    $.get(apiUrl + "/api/categoria?IdCategoriaPadre=" + idCategoria, function(data) {
        // Agregamos las opciones al segundo menú desplegable
        $.each(data, function(index, categoria) {
            $("#subcategoria").append("<option value='" + categoria.IdCategoria + "'>" + categoria.Nombre + "</option>");
        });
    });
});

// Cuando se seleccione una subcategoría, obtenemos las subsubcategorías correspondientes
$("#subcategoria").change(function() {
    // Obtenemos el ID de la subcategoría seleccionada
    const idSubcategoria = $(this).val();

    // Limpiamos las opciones del tercer menú desplegable
    $("#subsubcategoria").empty();

    // Si no se ha seleccionado ninguna subcategoría, no hacemos nada
    if (idSubcategoria === "") {
        return;
    }

    // Obtenemos las subsubcategorías correspondientes desde la API
    $.get(apiUrl + "/api/categoria?IdCategoriaPadre=" + idSubcategoria, function(data) {
        // Agregamos las opciones al tercer menú desplegable
        $.each(data, function(index, categoria) {
            $("#subsubcategoria").append("<option value='" + categoria.IdCategoria + "'>" + categoria.Nombre + "</option>");
        });
    });
});


// Función para eliminar un artículo
function Eliminar(idArticulo) {
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar este artículo?");
  
    if (confirmacion) {
      // Realiza la petición DELETE a la API
      $.ajax({
        url: apiUrl + "/api/articulo/" + idArticulo,
        type: "DELETE",
        success: function(response) {
          console.log(response);
          // Actualiza la vista o realiza alguna acción adicional después de eliminar el artículo
          // Por ejemplo, puedes recargar la página o actualizar la tabla de artículos
          location.reload(); // Recargar la página
        },
        error: function(error) {
          console.error(error);
          // Maneja el error de eliminación de artículo si es necesario
        }
      });
    }
  }
  