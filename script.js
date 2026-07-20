let favoritos = [];

function agregarFavorito(producto) {
    favoritos.push(producto);
    alert(producto + " agregado a favoritos ❤️");
}

function agregarCarrito(producto) {
    alert(producto + " agregado al carrito 🛒");
}

function buscarProducto() {
    let input = document.getElementById("buscador").value.toLowerCase();
    let productos = document.getElementsByClassName("producto");

    for (let i = 0; i < productos.length; i++) {
        let nombre = productos[i].innerText.toLowerCase();

        if (nombre.includes(input)) {
            productos[i].style.display = "block";
        } else {
            productos[i].style.display = "none";
        }
    }
}

function filtrar(categoria) {
    let productos = document.getElementsByClassName("producto");

    for (let i = 0; i < productos.length; i++) {
        if (categoria == "todos" || productos[i].classList.contains(categoria)) {
            productos[i].style.display = "block";
        } else {
            productos[i].style.display = "none";
        }
    }
}
