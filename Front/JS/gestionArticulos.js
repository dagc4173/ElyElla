$(document).ready(() => {
    CargarArticulos();

});

function CargarArticulos() {
    $.get(UrlApi + "/api/articulo", (items) => {
      let tbl = $("#tblArticulo");
      console.log(items)
      items.forEach(p => {
        tbl.append(`<tr>
          <td>${p.SKU}</td>
          <td>${p.Nombre}</td>
          <td>${p.Descripcion}</td>
          <td>${p.Precio}</td>
          <td>${p.Stock}</td>
          <td><img width="100" src="${p.Imagen[0]}"></td>
          <td>
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
  