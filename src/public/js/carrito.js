let carritos = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoItemsContainer = document.querySelector('.carrito-items');
const totalPrecioElement = document.getElementById('total-precio');
let totalPrecio = 0;

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carritos));
}

function renderCarrito() {
    if (carritoItemsContainer) {
        carritoItemsContainer.innerHTML = '';
        totalPrecio = 0;

        carritos.forEach((carrito, index) => {
            const carritoItem = document.createElement('div');
            carritoItem.classList.add('carrito-item');

            carritoItem.innerHTML = `
                <img src="${carrito.imagen}" alt="${carrito.nombre}">
                <div class="carrito-item-details">
                    <h3>${carrito.nombre}</h3>
                    <p>S/${carrito.precio.toFixed(2)}</p>
                </div>
                <div class="carrito-item-actions">
                    <button onclick="aumentarCantidad(${index})">+</button>
                    <button onclick="eliminarProducto(${index})">Eliminar</button>
                </div>
            `;

            carritoItemsContainer.appendChild(carritoItem);
            totalPrecio += carrito.precio;
        });

        totalPrecioElement.textContent = `S/${totalPrecio.toFixed(2)}`;
    }
    ContadorCarrito(); // Actualizar el contador del carrito
}

function agregarcarrito(nombre, precio, imagen) {
    carritos.push({ nombre, precio, imagen });
    guardarCarrito();
    renderCarrito();
}

function aumentarCantidad(index) {
    carritos[index].precio += carritos[index].precio / (carritos[index].cantidad || 1);
    carritos[index].cantidad = (carritos[index].cantidad || 1) + 1;
    guardarCarrito();
    renderCarrito();
}

function eliminarProducto(index) {
    carritos.splice(index, 1);
    guardarCarrito();
    renderCarrito();
    ContadorCarrito(); // Actualizar el contador del carrito
}

function ContadorCarrito() {
    let contador = 0;
    carritos.forEach((carrito) => {
        contador += carrito.cantidad || 1;
    });

    let contadorcarrito = document.getElementById('contador-carrito');
    if (contadorcarrito) {
        contadorcarrito.textContent = contador;
    }
}

const vaciarCarritoButton = document.querySelector('.vaciar-carrito');
if (vaciarCarritoButton) {
    vaciarCarritoButton.addEventListener('click', () => {
        carritos = [];
        guardarCarrito();
        renderCarrito();
        ContadorCarrito(); // Actualizar el contador del carrito
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCarrito();
    ContadorCarrito();

    // Deshabilitar el botón "Comprar" si el carrito está vacío
    const comprarButton = document.getElementById('comprar-button');
    const carritos = JSON.parse(localStorage.getItem("carrito")) || [];

    if (comprarButton) {
        if (carritos.length === 0) {
            comprarButton.disabled = true;
        } else {
            comprarButton.disabled = false;
        }

        // Agregar evento al botón "Comprar"
        comprarButton.addEventListener('click', (event) => {
            if (carritos.length === 0) {
                event.preventDefault(); // Evitar la navegación a la página de pago
                alert('El carrito está vacío. Agrega productos antes de proceder al pago.');
            }
        });
    }
});