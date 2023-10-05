function getParte() {
  parte = window.document.getElementById("parte").value;
  libros = window.document.getElementById("libros");
  libros.innerHTML = "";
  if (parte == "Ant"){
    antTestamento();
  } else if (parte == "Nue"){
    NueTestamento();
  } else {
    alert("debes elegir una parte");
  }
}

function antTestamento() {
  // Lista de los libros del Antiguo Testamento
  const librosAntiguoTestamento = [
    "Génesis", "Éxodo", "Levítico", "Números", "Deuteronomio", "Josué",
    "Jueces", "Rut", "1 Samuel", "2 Samuel", "1 Reyes", "2 Reyes", "1 Crónicas",
    "2 Crónicas", "Esdras", "Nehemías", "Ester", "Job", "Salmos", "Proverbios",
    "Eclesiastés", "Cantares", "Isaías", "Jeremías", "Lamentaciones", "Ezequiel",
    "Daniel", "Oseas", "Joel", "Amós", "Abdías", "Jonás", "Miqueas", "Nahum",
    "Habacuc", "Sofonías", "Hageo", "Zacarías", "Malaquías"
  ];

  // Obtener el elemento select
  const selectElement = document.getElementById("libros");

  // Agregar las opciones dinámicamente
  librosAntiguoTestamento.forEach((libro) => {
    const option = document.createElement("option");
    option.value = libro;
    option.text = libro;
    selectElement.appendChild(option);
  });
}

function NueTestamento() {
    // Lista de los libros del Nuevo Testamento
    const librosNuevoTestamento = [
        "Mateo", "Marcos", "Lucas", "Juan", "Hechos", "Romanos", "1 Corintios",
        "2 Corintios", "Gálatas", "Efesios", "Filipenses", "Colosenses", "1 Tesalonicenses",
        "2 Tesalonicenses", "1 Timoteo", "2 Timoteo", "Tito", "Filemón", "Hebreos", "Santiago",
        "1 Pedro", "2 Pedro", "1 Juan", "2 Juan", "3 Juan", "Judas", "Apocalipsis"
      ];
  
    // Obtener el elemento select
    const selectElement = document.getElementById("libros");
  
    // Agregar las opciones dinámicamente
    librosNuevoTestamento.forEach((libro) => {
      const option = document.createElement("option");
      option.value = libro;
      option.text = libro;
      selectElement.appendChild(option);
    });
  }