// --- BASE DE DATOS DE PRODUCTOS Y RESEÑAS ---
const infoProductos = {
    'torta-chocolate': {
        titulo: "Torta Supreme de Chocolate",
        precio: "$3.500",
        foto: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        estrellas: "★★★★★",
        nota: " (4.9)",
        descripcion: "Tres capas de bizcochuelo húmedo de puro cacao artesanal, rellenas con suave ganache de chocolate belga y dulce de leche.",
        comentarios: [
            { autor: "Valentina R.", texto: "La mejor torta de chocolate. Súper húmeda y delicada!" },
            { autor: "Mateo G.", texto: "Excelente presentación y sabor inigualable." }
        ]
    },
    'lemon-pie': {
        titulo: "Lemon Pie Gourmet",
        precio: "$2.800",
        foto: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
        estrellas: "★★★★☆",
        nota: " (4.7)",
        descripcion: "Base sablée crocante, crema suave de limones orgánicos y un esponjoso merengue italiano dorado al soplete.",
        comentarios: [
            { autor: "Camila L.", texto: "El equilibrio justo entre acidez y dulzura." }
        ]
    },
    'cupcakes-velvet': {
        titulo: "Box Red Velvet (x6)",
        precio: "$2.200",
        foto: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80",
        estrellas: "★★★★★",
        nota: " (5.0)",
        descripcion: "Esponjosos cupcakes Red Velvet acompañados de una suave crema Cream Cheese con toque de vainilla.",
        comentarios: [
            { autor: "Sofía M.", texto: "Son adictivos, la crema tiene la textura perfecta." }
        ]
    },
    'macarons-box': {
        titulo: "Macarons Surtidos (x12)",
        precio: "$3.900",
        foto: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80",
        estrellas: "★★★★★",
        nota: " (4.8)",
        descripcion: "Selección de macarons estilo francés: frambuesa, pistacho, chocolate blanco, dulce de leche y maracuyá.",
        comentarios: [
            { autor: "Lucas P.", texto: "Super crujientes por fuera y suaves por dentro." }
        ]
    },
    'cheesecake-frutos': {
        titulo: "Cheesecake Frutos Rojos",
        precio: "$3.200",
        foto: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
        estrellas: "★★★★★",
        nota: " (4.9)",
        descripcion: "Clásico cheesecake horneado estilo New York con salsa casera de frutos del bosque frescos.",
        comentarios: [
            { autor: "Andrea S.", texto: "Increíble la salsa fresca que tiene encima!" }
        ]
    },
    'torta-frutillas': {
        titulo: "Pavlova & Frutillas",
        precio: "$3.000",
        foto: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
        estrellas: "★★★★☆",
        nota: " (4.6)",
        descripcion: "Base crocante de merengue horneado, crema Chantilly suave y abundantes frutillas frescas de estación.",
        comentarios: [
            { autor: "Gonzalo T.", texto: "Liviana y fresca para disfrutar en cualquier momento." }
        ]
    }
};

// --- MANEJO DEL MODAL ---
function abrirModal(idProducto) {
    const producto = infoProductos[idProducto];
    if (!producto) return;

    document.getElementById('modal-titulo').innerText = producto.titulo;
    document.getElementById('modal-precio').innerText = producto.precio;
    document.getElementById('modal-descripcion').innerText = producto.descripcion;
    document.getElementById('modal-foto').src = producto.foto;
    document.getElementById('modal-estrellas').innerText = producto.estrellas;
    document.getElementById('modal-nota').innerText = producto.nota;

    const cajaComentarios = document.getElementById('modal-comentarios');
    cajaComentarios.innerHTML = "";
    
    producto.comentarios.forEach(com => {
        const div = document.createElement('div');
        div.style.marginBottom = "5px";
        div.innerHTML = `<strong>${com.autor}:</strong> "${com.texto}"`;
        cajaComentarios.appendChild(div);
    });

    // Enlace de WhatsApp directo con el pedido
    const numeroTelefono = "5491123456789"; // Cambia por tu teléfono real
    const textoMensaje = encodeURIComponent(`¡Hola Maison sucrée! Me interesa encargar: ${producto.titulo} (${producto.precio}).`);
    document.getElementById('btn-encargar-whatsapp').href = `https://wa.me/${numeroTelefono}?text=${textoMensaje}`;

    document.getElementById('modalProducto').style.display = "block";
}

function cerrarModal() {
    document.getElementById('modalProducto').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('modalProducto');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
