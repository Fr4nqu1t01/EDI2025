let lista1 = ["a", "4", "c", "b", "a"];
let lista2 = ["c", "a", "c", "4", "c"];
let igualdad = true;

// Verifica que todos los elementos de lista1 estén en lista2
for (let i = 0; i < lista1.length; i++) {
  let encontrado = false;
  for (let j = 0; j < lista2.length; j++) {
    if (lista1[i] === lista2[j]) {
      encontrado = true;
      break;
    }
  }
    if (!encontrado) {
     igualdad = false;
     break;
    }
}

// Verifica que todos los elementos de lista2 estén en lista1
if (igualdad) {
  for (let i = 0; i < lista2.length; i++) {
    let encontrado = false;
    for (let j = 0; j < lista1.length; j++) {
      if (lista2[i] === lista1[j]) {
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      igualdad = false;
      break;
    }
  }
}

// Mostrar el resultado
if (igualdad) {
  console.log(
    "Ambas listas contienen los mismos valores, aunque en diferente orden."
  );
} else {
  console.log("Las listas contienen valores distintos.");
}