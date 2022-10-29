// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    let suma = 0;
    for( let i = 0; i < 11; i++){
     suma = suma + i;
    } 
    return suma;


}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  arraypar = [];
/* for (var i = 0; i < array.length; i++){
  if((array[i] % 2 ) == 0 ){                        FUNCIONA (:
    arraypar.push(array[i])
  }
} */
for(let pos of array){
  if((pos % 2) == 0){
    arraypar.push(pos)
  }
}

  return arraypar;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  array2= [];
  // for (var i = 0; i < array.length ; i++)       FUNCIONA
  for(pos of array){
    array2.push(pos**2)
  }return array2;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
let suma = 0;
        //for(var i = 0; i < array.length; i++){     FUNCIONA
        for(let i of array){
suma = suma +  i;   // array[i]
}return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
/* if((num / 1000) > 1){
  return 4
}else if((num / 100) > 1){                           FUNCIONA
  return 3
}else if((num /10) > 1){
  return 2
} */
let digitos = String(num);
return digitos.length;
} 
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
