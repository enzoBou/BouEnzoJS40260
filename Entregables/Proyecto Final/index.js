let carrito = [];
const moneda = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonComprar = document.querySelector('#boton-comprar');
const miLocalStorage = window.localStorage;


const renderProduct = async () => {
    const response = await fetch("/Entregables/Proyecto Final/data.json");
    const baseDeDatos = await response.json();
    let contenedor = document.getElementById("items");

    baseDeDatos.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("card", "col-sm-6")
        div.innerHTML = `
        <h3 class="card-title">${item.nombre}</h3>
        <p class="card-text">${item.horario}</p>
        <p class="card-text">${item.precio}</p>
        <button type="button" class="btn btn-primary marcador" onclick="anyadirProductoAlCarrito()">+</button>
        `;
        contenedor.append(div);
      });
    }

// Funciones

function anyadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute("marcador"))
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
}

function renderizarCarrito() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${moneda}`;
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    DOMtotal.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    renderizarCarrito();
    guardarCarritoEnLocalStorage();

}

function calcularTotal() {
    return carrito.reduce((total, item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

function vaciarCarrito() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          swalWithBootstrapButtons.fire({
            title: 'Desea eliminar su carrito?',
            text: "Este cambio no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar carrito',
            cancelButtonText: 'No, cancelar',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {          //             
              swalWithBootstrapButtons.fire(                                                    
                'Eliminado!',
                'Su carrito esta vacio',
                'success'
              )
              carrito = [];
              renderizarCarrito();
              localStorage.clear();
            } else if (
              result.dismiss === Swal.DismissReason.cancel  //
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Su carrito sigue lleno',
                'error'
              )
            }
          })
}
function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {                      
    /* if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    } */
    miLocalStorage.getItem('carrito') !== null && carrito == JSON.parse(miLocalStorage.getItem('carrito'));
}

function comprarCarrito () {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su compra ha sido realizada con exito',
        showConfirmButton: false,
        timer: 1500
      })
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);
DOMbotonComprar.addEventListener('click', comprarCarrito);

// Inicio
cargarCarritoDeLocalStorage();
renderProduct();
renderizarCarrito();
setTimeout(() => {
    Swal.fire({
        title: 'Ya conoces nuestras instalaciones?',
        text: 'Visita nuestra web y encontra tu sucursal mas cercana',
        imageUrl: 'https://s.yimg.com/ny/api/res/1.2/wJe7xKteba5kncM_Ea1qLA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTQ4MTtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/4FG.sdU5j_9HdkiZ3lq00w--~B/aD03MjI7dz0xNDQwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/es/runner_s_world_es_761/498b596d34874cf88d174a3cbd099c92',
        imageWidth: 450,
        imageHeight: 200,
        imageAlt: 'Musc',
      })
}, 2000)
