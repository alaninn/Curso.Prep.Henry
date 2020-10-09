// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
var ultimo = array.length -1; 

return array[ultimo];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  
  for (var i = 0 ; i < array.length ; i++) {

    array[i]= array[i]+1;
                                           }
return array;

}
    
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) 
{
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadenaDePalabras = palabras.join(' ');
  return cadenaDePalabras;
}

function arrayContiene(array, elemento)
 {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  for (var i = 0; i < array.length; i++) {
   
   if (array[i] === elemento) 
   {
    return true
   }

                                         }
return false
}

function agregarNumeros(numeros)
 {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumados=0;
  for (var i = 0; i < numeros.length; i++) {
      sumados = sumados + numeros[i];
                                         }
    return sumados;

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  //var largo= resultadosTest.length;
 // var sumados=0;
 //   for (var i = 0;  i < resultadosTest.length; i++) {
//         sumados= sumados + resultadosTest[i];
//       }   
//       return sumados/largo;


    return  (agregarNumeros(resultadosTest)) / resultadosTest.length;

    

}

function numeroMasGrande(numeros) 
{
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

var elMasGrande= numeros[0];

 for (var i = 1; i < numeros.length; i++) {
    if (elMasGrande< numeros[i]) {
        elMasGrande = numeros[i]
                                 }
                                          }
  return elMasGrande;

}

function multiplicarArgumentos() 
{
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:

  if(arguments.length < 1) {
    return 0;
                           }

  var resultadoDelProducto = 1;
  for(var i = 0; i < arguments.length; i++) {
    resultadoDelProducto = resultadoDelProducto * arguments[i];
  }
  return resultadoDelProducto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
