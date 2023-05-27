const UrlApi="http://localhost:3000"
$(document).ready(() => {
    $("mimenu").load("../Components/mimenu.html");
    $("menu-principal").load("./Components/menu-principal.html");
    $("redes-sociales").load("../Components/redes-sociales.html");
    $("mifooter").load("../Components/footer.html")
    $("footer-principal").load("./Components/footer-principal.html")


    $("#btnCargar").click(ClickBtnCargar);
    $("#enviarFrm").click((event) => {
        event.preventDefault();
        const txtNombre = $("#nombre");
        const txtPwd = $("#txtPwd");
        let p = {
            Nombre: txtNombre.val(),
            Password: txtPwd.val()
        };
        $.post("https://dummyjson.com/products/add", p,
            (rs) => {
                console.log(rs);
            })
    })
});

//ingreso y registro
$(document).ready(() => {
    $("ingreso").load("./Components/ingreso.html");
    $("registro").load("./Components/registro.html");
    $("ingreso").load("../Components/ingreso.html");
    $("registro").load("../Components/registro.html");
    // Selecciona el botón
    var registroBtn = $('#registro-btn');

    // Añade un evento click al botón
    registroBtn.click(() => {
        // Muestra el offcanvas
        $('#offcanvasRight').offcanvas('show');

        // Llama al componente
        var registroComponent = $('<registro></registro>');
        $('#offcanvasRight .offcanvas-body').html(registroComponent);
    });
});

function mostrarSubMenu(subMenuId) {
    const subMenuIniciarSesion = document.getElementById('subMenuIniciarSesion');
    const subMenuRegistro = document.getElementById('subMenuRegistro');
  
    if (subMenuId === 'subMenuIniciarSesion') {
      subMenuIniciarSesion.style.display = 'block';
      subMenuRegistro.style.display = 'none';
    } else if (subMenuId === 'subMenuRegistro') {
      subMenuIniciarSesion.style.display = 'none';
      subMenuRegistro.style.display = 'block';
    }
  }

function ClickBtnCargar() {
    $.get("https://dummyjson.com/products", (rs) => {
        let tbl = $("#tblProductos");
        console.log(rs)
        rs.products.forEach(p => {
            tbl.append(`<tr>
            <td>${p.id}</td>
            <td>${p.title}</td>
            <td><img width="100" src="${p.images[0]}"></td>
            </tr>`);
        });
    });
}

$(document).ready(function () {
    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).stop(true, true).slideDown("fast");
            $(this).toggleClass('open');
        },
        function () {
            $('.dropdown-menu', this).stop(true, true).slideUp("fast");
            $(this).toggleClass('open');
        }
    );
});

