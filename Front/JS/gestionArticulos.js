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