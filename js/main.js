
function cargar() {
  class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = parseFloat(precio);
      this.cantidad = parseInt(cantidad);
      this.disponible = true;
    }
    sumarIva() {
      return this.precio * 1.21;
    }
  }

  var arrayProductos = [];
  do {
    var nuevoProducto = prompt('Ingrese un nombre del producto\n  o ingrese FIN para terminar de agregar productos');
    if (nuevoProducto === "fin") {
      break;
    } else {
      nombreP = nuevoProducto;
      var precioP = prompt('Ingrese el precio del producto');
      var cantidadP = prompt('Ingrese la cantidad disponible del producto');
      arrayProductos.push(new Producto(nombreP, precioP, cantidadP));
    }
  }
  while (nuevoProducto != "fin")
  console.log(arrayProductos);

  alert("Productos ingresados:")
  for (var producto of arrayProductos) {
    var mensaje =
      "Nombre: " + producto.nombre.toUpperCase() + "\n" +
      "Cantidad: " + producto.cantidad + "\n" +
      "Precio: " + producto.precio + "\n" +
      "Precio con IVA es: " + producto.sumarIva().toFixed(2);

    alert(mensaje);

    /*   console.log(producto.nombre);
      console.log(producto.detalle);
      console.log(producto.cantidad);
      console.log(producto.sumarIva()); */
  }

  // Busqueda de producto
  var ingresado = prompt('Ingresar el producto que quiere buscar');
  var prodIngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado));

  if (prodIngresado.length === 0) {
    alert("No se encontraron productos con ese nombre.");
  } else {
    alert("Productos encontrados:");

    for (var producto of prodIngresado) {
      var mensajeEncontrados =
        "Nombre: " + producto.nombre.toUpperCase() + "\n" +
        "Precio: " + producto.precio;

      alert(mensajeEncontrados);
    }
  }


  //Ordenar productos por cantidad
  var ordenadosCantidad = []; //Declaramos el array ordenadosCantidad
  ordenadosCantidad = arrayProductos.map(elemento => elemento);
  ordenadosCantidad.sort(function (a, b) {
    return a.cantidad - b.cantidad;
  });

  if (ordenadosCantidad.length === 0) {
    alert("No hay productos para mostrar.");
  } else {
    alert("Productos ordenados por cantidad:");

    for (var producto of ordenadosCantidad) {
      var mensajeOrdenado =
        "Nombre: " + producto.nombre.toUpperCase() + "\n" +
        "Cantidad: " + producto.cantidad;

      alert(mensajeOrdenado);
    }
  }
}



function comprar() {
  /*Primero solicito datos por prompt*/
  let apellido = prompt("Por favor ingrese su Apellido");
  let nombre = prompt("Ahora Ingrese su Nombre");
  /* mensaje de bienvenida*/
  alert(`${nombre} bienvenido a Joyeria Donzela. Aqui podras calcular el total de tus compras`);
  let realizaCompra = prompt("¿Desea realizar una compra?\n * SI para realizar una compra \n * NO para salir");

  /* Pregunto si quire realizar la compra */
  if (realizaCompra == "SI" || realizaCompra == "si" || realizaCompra == "Si") {
    /* Aqui realizo el while para sumar los productos */
    let total = 0;
    let producto = prompt("Ingrese un número del 1 al 4 para seleccionar su producto o el número 0 para finalizar.\n-> 1: Anillo de oro - $ 52500\n-> 2: Aros de oro - $ 21200\n-> 3: Dije de plata - $ 7500\n-> 4: Pulsera de plata - $ 15300\n-> 0: SALIR");

    //Repetimos hasta que se ingresa "0"
    while (producto != 0) {
      switch (producto) {
        case "1":
          total += 52500;
          alert("Anillo de oro sumado");
          break;
        case "2":
          total += 21200;
          alert("Aros de oro sumado");
          break;
        case "3":
          total += 7500;
          alert("Dije de plata sumado");
          break;
        case "4":
          total += 15300;
          alert("Pulsera de plata sumada");
          break;
        default:
          alert("El codigo no existe, por favor ingrese un número del 0 al 4")
          break;
      }
      producto = prompt("Ingrese un número del 1 al 4 para seleccionar su producto o el número 0 para finalizar.\n-> 1: Anillo de oro - $ 52500\n-> 2: Aros de oro - $ 21200\n-> 3: Dije de plata - $ 7500\n-> 4: Pulsera de plata - $ 15300\n-> 0: SALIR");
    }
    if (total != 0) {
      alert(`El total de su compra es $${total}. ${nombre} gracias por visitarnos. Regresa pronto`);
    } else {
      alert("No ha realizado ninguna compra. Si aun desea realizarla, vuelva a ingresar");
    }


  } else {
    /* Aqui envio mensaje cuando no desea realizar una compra */
    alert(`${nombre} ${apellido} gracias por visitarnos. Vuelva pronto`)

  }


}


