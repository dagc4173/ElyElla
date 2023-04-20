$(document).ready(() => {
    $("menu-principal").load("Components/menu-principal.html");
    $("redes-sociales").load("Components/redes-sociales.html");
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