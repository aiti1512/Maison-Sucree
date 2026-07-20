// --- BASE DE DATOS DE PRODUCTOS Y OPINIONES ---
const infoProductos = {
    'torta-chocolate': {
        titulo: "Torta Supreme de Chocolate",
        precio: "$3.500",
        foto: "images/torta-chocolate.jpg",
        estrellas: "★★★★★",
        nota: " (4.9)",
        descripcion: "Tres capas de bizcochuelo húmedo de puro cacao artesanal, rellenas con un suave ganache de chocolate belga y una fina capa de dulce de leche premium. Decorada con rulos de chocolate artesanal.",
        comentarios: [
            { autor: "Valentina R.", texto: "La mejor torta de chocolate que probé en mi vida. Súper húmeda!" },
            { autor: "Mateo G.", texto: "La compramos para un cumpleaños y no quedó ni una miga. Excelente calidad." }
        ]
    },
    'lemon-pie': {
        titulo: "Lemon Pie Clásico",
        precio: "$2.800",
        foto: "images/lemon-pie.jpg",
        estrellas: "★★★★☆",
        nota: " (4.5)",
        descripcion: "Una base de masa quebrada crocante y mantecosa, rellena con una crema suave y perfectamente equilibrada de limones frescos, coronada con un merengue italiano dorado y sedoso.",
        comentarios: [
            { autor: "Camila L.", texto: "El equilibrio justo entre lo ácido y lo dulce. El merengue es una nube." },
            { autor: "Juan Pedro", texto: "Muy rico y fresco. Ideal para el postre del domingo." }
        ]
    }
};

// --- FUNCIONES PARA MANEJAR LA VENTANA MODAL ---

function abrirModal(idProducto) {
    const producto = infoProductos[idProducto];
    
    if (!producto) return; // Si no encuentra el producto, no hace nada

    // 1. Llenar los datos básicos del Modal
    document.getElementById('modal-titulo').innerText = producto.titulo;
    document.getElementById('modal-precio').innerText = producto.precio;
    document.getElementById('modal-descripcion').innerText = producto.descripcion;
    document.getElementById('modal-foto').src = producto.foto;
    document.getElementById('modal-estrellas').innerText = producto.estrellas;
    document.getElementById('modal-nota').innerText = producto.nota;

    // 2. Cargar los comentarios dinámicamente
    const cajaComentarios = document.getElementById('modal-comentarios');
    cajaComentarios.innerHTML = ""; // Limpiar comentarios anteriores
    
    producto.comentarios.forEach(com => {
        const divComentario = document.createElement('div');
        divComentario.classList.add('comentario');
        divComentario.innerHTML = `<span class="comentario-autor">${com.autor}:</span> "${com.texto}"`;
        cajaComentarios.appendChild(divComentario);
    });

    // 3. Configurar el enlace de WhatsApp personalizado
    // Reemplaza el número 123456789 con tu número de WhatsApp real (incluyendo el código de país sin el +)
    const numeroTelefono = "5491123456789"; 
    const textoMensaje = encodeURIComponent(`¡Hola Maison sucrée! Me interesa encargar el producto: ${producto.titulo} (${producto.precio}). ¿Me podrían dar más información sobre la disponibilidad?`);
    
    const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${textoMensaje}`;
    document.getElementById('btn-encargar-whatsapp').href = urlWhatsapp;

    // 4. Mostrar el modal en pantalla
    document.getElementById('modalProducto').style.display = "block";
}

function cerrarModal() {
    document.getElementById('modalProducto').style.display = "none";
}

// Cerrar el modal automáticamente si el usuario hace clic fuera de la caja blanca
window.onclick = function(event) {
    const modal = document.getElementById('modalProducto');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
