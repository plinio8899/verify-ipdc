function enviarDatos() {
    tipo = document.getElementById('tipo').value;
    libro = document.getElementById("libros").value;
    capitulo = document.getElementById("capitulo").value;
    versiculo = document.getElementById("versiculo").value;
    resultado = document.getElementById("resultado");
    area = document.getElementById("area");
    apiKey = "ac6e5a8781c651263e53e54afde00159"

    //console.log("La cita es " + libro + " " + capitulo + ":" + versiculo);

    const url = `https://api.biblia.com/v1/bible/content/RVR60.txt?passage=${libro}${capitulo}.${versiculo}&key=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener el versículo');
        }
        return response.text();
      })
      .then(data => {
        if(tipo == "Ta"){
            resultado.innerHTML = totalA(data);
            area.innerHTML = data.toString();
        } else if (tipo == "Te"){
            resultado.innerHTML = totalE(data);
            area.innerHTML = data.toString();
        } else if (tipo == "Ti"){
            resultado.innerHTML = totalI(data);
            area.innerHTML = data.toString();
        } else if (tipo == "To"){
            resultado.innerHTML = totalO(data);
            area.innerHTML = data.toString();
        } else if (tipo == "Pri"){
            resultado.innerHTML = primeraUltima(data).primeraPalabra;
            area.innerHTML = data.toString();
        } else if (tipo == "Ult"){
            resultado.innerHTML = primeraUltima(data).ultimaPalabra;
            area.innerHTML = data.toString();
        } else if (tipo == "PyU"){
            resultado.innerHTML = "La primera es '" + primeraUltima(data).primeraPalabra + "' Y la ultima es '" + primeraUltima(data).ultimaPalabra + "'";
            area.innerHTML = data.toString();
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert(error.message);
        window.location.reload();
      });
}

function totalA(versiculo){
      // Convierte el versículo a minúsculas para asegurarse de contar "a" y "A"
  const versiculoEnMinusculas = versiculo.toLowerCase();
  
  // Usa la función split() para dividir el versículo en un array de caracteres
  const caracteres = versiculoEnMinusculas.split('');
  
  // Inicializa una variable para contar las letras "a"
  let contadorA = 0;
  
  // Itera sobre cada carácter y cuenta las letras "a"
  for (let i = 0; i < caracteres.length; i++) {
    if (caracteres[i] === 'a') {
      contadorA++;
    }
  }
  
  return contadorA;
}

function totalE(versiculo){
    // Convierte el versículo a minúsculas para asegurarse de contar "a" y "A"
const versiculoEnMinusculas = versiculo.toLowerCase();

// Usa la función split() para dividir el versículo en un array de caracteres
const caracteres = versiculoEnMinusculas.split('');

// Inicializa una variable para contar las letras "a"
let contadorE = 0;

// Itera sobre cada carácter y cuenta las letras "a"
for (let i = 0; i < caracteres.length; i++) {
  if (caracteres[i] === 'e') {
    contadorE++;
  }
}

return contadorE;
}

function totalI(versiculo){
    // Convierte el versículo a minúsculas para asegurarse de contar "a" y "A"
const versiculoEnMinusculas = versiculo.toLowerCase();

// Usa la función split() para dividir el versículo en un array de caracteres
const caracteres = versiculoEnMinusculas.split('');

// Inicializa una variable para contar las letras "a"
let contadorI = 0;

// Itera sobre cada carácter y cuenta las letras "a"
for (let i = 0; i < caracteres.length; i++) {
  if (caracteres[i] === 'i') {
    contadorI++;
  }
}

return contadorI;
}

function totalO(versiculo){
    // Convierte el versículo a minúsculas para asegurarse de contar "a" y "A"
const versiculoEnMinusculas = versiculo.toLowerCase();

// Usa la función split() para dividir el versículo en un array de caracteres
const caracteres = versiculoEnMinusculas.split('');

// Inicializa una variable para contar las letras "a"
let contadorO = 0;

// Itera sobre cada carácter y cuenta las letras "a"
for (let i = 0; i < caracteres.length; i++) {
  if (caracteres[i] === 'o') {
    contadorO++;
  }
}

return contadorO;
}

function primeraUltima(versiculo){
      // Divide el versículo en palabras utilizando un espacio como separador
  const palabras = versiculo.split(' ');

  // La primera palabra es la primera en la matriz de palabras
  const primeraPalabra = palabras[0];

  // La última palabra es la última en la matriz de palabras
  const ultimaPalabra = palabras[palabras.length - 1];

  // Devuelve un objeto con la primera y última palabra
  return {
    primeraPalabra,
    ultimaPalabra
  };
}