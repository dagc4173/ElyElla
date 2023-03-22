// Variables para la tabla de productos
const tablaProductos = document.querySelector('#tabla-productos tbody');
const botonEditar = document.querySelectorAll('.boton-editar');

// Función para cargar la tabla de productos
function cargarTablaProductos() {
  // Limpiar la tabla
  tablaProductos.innerHTML = '';

  // Obtener todos los productos de la base de datos
  fetch('obtener_productos.php')
    .then(response => response.json())
    .then(data => {
      // Recorrer los productos y agregarlos a la tabla
      data.forEach(producto => {
        const fila = `
          <tr>
            <td>${producto.sku}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" style="max-height: 50px;"></td>
            <td><button class="boton-editar" data-sku="${producto.sku}">Editar</button></td>
          </tr>
        `;
        tablaProductos.innerHTML += fila;
      });

      // Agregar evento click a los botones de editar
      botonEditar.forEach(boton => {
        boton.addEventListener('click', e => {
          const sku = e.target.dataset.sku;
          editarProducto(sku);
        });
      });
    });
}

// Función para crear o editar un producto
function guardarProducto() {
  // Obtener el SKU ingresado por el usuario
  const sku = document.querySelector('#sku').value;

  // Verificar si el producto ya existe en la base de datos
  fetch(`obtener_producto.php?sku=${sku}`)
    .then(response => response.json())
    .then(data => {
      if (data) {
        // Si el producto existe, cargar los datos en el formulario de edición
        document.querySelector('#nombre').value = data.nombre;
        document.querySelector('#descripcion').value = data.descripcion;
        document.querySelector('#precio').value = data.precio;
        document.querySelector('#imagen').value = data.imagen;
      } else {
        // Si el producto no existe, mostrar el formulario de creación
        document.querySelector('#formulario-crear-producto').style.display = 'block';
      }
    });
}

// Función para editar un producto
function editarProducto(sku) {
  // Obtener el producto seleccionado de la base de datos
  fetch(`obtener_producto.php?sku=${sku}`)
    .then(response => response.json())
    .then(data => {
      // Cargar los datos del producto en el formulario de edición
      document.querySelector('#sku-editar').value = data.sku;
      document.querySelector('#nombre-editar').value = data.nombre;
      document.querySelector('#descripcion-editar').value = data.descripcion;
      document.querySelector('#precio-editar').value = data.precio;
      document.querySelector('#imagen-editar').value = data.imagen;

      // Mostrar el formulario de edición
      document.querySelector('#formulario-editar-producto').style.display = 'block';
    });
}

  // Función para guardar un producto nuevo en la base de datos
function guardarProductoNuevo() {
    // Obtener los datos del formulario de creación
    const sku = document.querySelector('#sku-nuevo').value;
    const nombre = document.querySelector('#nombre-nuevo').value;
    const descripcion = document.querySelector('#descripcion-nuevo').value;
    const precio = document.querySelector('#precio-nuevo').value;
    const imagen = document.querySelector('#imagen-nuevo').value;
    
    // Crear un objeto FormData
    const formData = new FormData();
    
    // Agregar los datos del producto al objeto FormData
    formData.append('sku', sku);
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('precio', precio);
    formData.append('imagen', imagen);
    
    // Enviar los datos al servidor mediante una petición AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'guardar_producto_nuevo.php', true);
    xhr.onload = function() {
    if (xhr.status === 200) {
    // Mostrar un mensaje de éxito al usuario
    alert('Producto guardado correctamente');

    // Limpiar el formulario de creación
  document.querySelector('#sku-nuevo').value = '';
  document.querySelector('#nombre-nuevo').value = '';
  document.querySelector('#descripcion-nuevo').value = '';
  document.querySelector('#precio-nuevo').value = '';
  document.querySelector('#imagen-nuevo').value = '';
} else {
  // Mostrar un mensaje de error al usuario
  alert('Error al guardar el producto');
}

};
xhr.send(formData);
}