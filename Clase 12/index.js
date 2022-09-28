//AGREGAR BOTON DE CONFIRMACION
let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
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
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Su carrito esta vacio',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Su carrito sigue lleno',
            'error'
          )
        }
      })
})

//SWEETARLERT
/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
@@ -69,7 +70,7 @@ let boton = document.getElementById("boton");
  });
}); */

boton.addEventListener("click", () => {
/* boton.addEventListener("click", () => {
  Swal.fire({
    title: 'Submit your Github username',
    input: 'text',
@@ -84,4 +85,93 @@ boton.addEventListener("click", () => {
      })
    }
  })
});
}); */

//TOASTIFY
/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    style: {
      background: "linear-gradient(to left, #00b09b, #96c92d)",
    },
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    className: "notificacion",
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    onClick: () => {
      Toastify({
        text: "Clickeaste un Toast!",
        duration: 1500,
      }).showToast();
    },
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Click aquí para ir a Coder!",
    duration: 3000,
    destination: "https://www.coderhouse.com",
  }).showToast();
}); */

//LUXON
// const DateTime = luxon.DateTime;

// const fecha = DateTime.local(2022, 9, 24, 12);
// console.log(fecha.c);

// const hoy = DateTime.now();
/* console.log(hoy.toString());
console.log(hoy.year);
console.log(hoy.month);
console.log(hoy.day);
console.log(hoy.second);
console.log(hoy.weekday);
console.log(hoy.zoneName);
console.log(hoy.daysInMonth); */
/* console.log(hoy.toLocaleString());
console.log(hoy.toLocaleString(DateTime.DATE_FULL));
console.log(hoy.toLocaleString(DateTime.TIME_SIMPLE)); */
/* console.log(hoy.setLocale("en").toLocaleString(DateTime.DATE_FULL));
console.log(hoy.setLocale("es").toLocaleString(DateTime.DATE_FULL)); */

/* const hoy = DateTime.now();
console.log(hoy.toLocaleString(DateTime.DATETIME_SHORT));
const suma = hoy.plus({hours: 1, minutes: 10});
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));
const resta = hoy.plus({month: 2, days: 1});
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT)); */

const DateTime = luxon.DateTime;
const Interval = luxon.Interval;

const hoy = DateTime.now();
const diciembre = DateTime.local(2022, 12, 25);

const i = Interval.fromDateTimes(hoy, diciembre);
console.log(i.length("days"));
console.log(i.length("hours"));
console.log(i.length("minutes"));