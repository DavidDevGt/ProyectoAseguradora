//Variables utiles
//Precio base de la cotización, en quetzales, lo puede cambiar

var precio_base = 2000;

//Valores de los recargos

var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

const obtenerRecargo = (edad) => {
  if (edad <= 24) {
    return precio_base * 0.1;
  }

  if (edad <= 49) {
    return precio_base * 0.2;
  }

  return precio_base * 0.3;
};

const cotizacion = () => {
  const edad = parseInt(prompt('Cuantos años tienes?'));

  if (edad < 18) {
    return alert('No cumples con los requisitos para usar el programa.');
  }

  let precio = 2000;
  let recargo = 0;

  recargo += obtenerRecargo(edad);

  const nombreUsuario = prompt('¿Cuál es tu nombre?');

  const propiedades = prompt('¿Tienes propiedades? (si/no)');

  if (propiedades.toLowerCase() == 'si') {
    const cantidadPropiedades = parseInt(prompt('¿Cuántas propiedades tienes?'));

    for (let contador = 1; contador <= cantidadPropiedades; contador++) {
      recargo += precio * 0.35;
    }
  }

  const salario = parseInt(prompt('¿Cuál es su salario?'));

  recargo += salario * 0.05;

  const conyuge = prompt('¿Tiene cónyuge? (si/no)');

  if (conyuge.toLowerCase() == 'si') {
    const edadConyuge = parseInt(prompt('¿Cuál es la edad de su cónyuge?'));

    recargo += obtenerRecargo(edadConyuge);
  }

  const hijos = prompt('¿Tiene hijos? (si/no)');

  if (hijos.toLowerCase() == 'si') {
    const cantidadHijos = parseInt(prompt('¿Cuántos hijos tiene?'));

    for (let contador = 1; contador <= cantidadHijos; contador++) {
      recargo += precio * 0.2;
    }
  }

  const precioFinal = precio + recargo;

  alert(`${nombreUsuario}, el precio final es: ${precioFinal}`);
};

let salirPrograma = 0;
while (true) {
  if (salirPrograma > 0) {
    const continuar = prompt('¿Quieres realizar otra cotización?, Escribe SALIR para finalizar el programa');

    if (continuar.toLowerCase() == 'salir') {
      break;
    }
  }

  cotizacion();
  salirPrograma += 1;
}