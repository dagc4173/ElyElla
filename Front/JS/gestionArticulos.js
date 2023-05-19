$(document).ready(() => {
    CargarArticulos();

});

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
          <td>${p.PrecioVenta}</td>
          <td>${p.Stock}</td>
          <td><img width="100" src="${p.Imagen[0]}"></td>
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
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const stock = document.getElementById("stock").value;
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value;
    const imagen = document.getElementById("imagen").value;
    const subcategoria = document.getElementById("nombre-destino").value;
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
    // Realizar la petición POST a la API para almacenar el producto
    fetch(apiUrl + "/api/articulo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    })
    .then(response => {
        if (response.ok) {
            // La petición se realizó correctamente
            // Aquí puedes realizar alguna acción adicional, como mostrar un mensaje de éxito o redireccionar a otra página
        } else {
            // Ocurrió un error en la petición
            console.error("Error al almacenar el producto.");
        }
    })
    .catch(error => {
        console.error("Error al realizar la petición:", error);
    });
}