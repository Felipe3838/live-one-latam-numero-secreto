// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// es una lista que almacenará los amigos agregados

let listanombreAmigosParaSortear = [];

// funcion para agregar amigos a la lista creada anteriormente,mediante la entrada o campo
//de texto agrgar amigo,se agrgagó una validacioón del nombre ingresado.

function agregarAmigo(){
    //obttiene los valores de entrada en el campo de texto
    let nombreDeAmigo = document.getElementById("valortextonombreamigo").value.trim();
    console.log(nombreDeAmigo)
    if (nombreDeAmigo == ""){
        alert("por favor escribe un nombre válido dentro del espacio")
        return;

    }
// valida que el nombre ingresado,no tenga números ni caracteres especiales.
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!regexNombre.test(nombreDeAmigo)) {
        alert("El nombre no debe contener números ni caracteres especiales.");
        return;
    }
    //valida para que no haya nombres repetidos.
    let existe = listanombreAmigosParaSortear.some(
    amigo => amigo.toLowerCase() === nombreDeAmigo.toLowerCase()
  );

  if (existe) {
    alert("Este nombre ya está en la lista,agrega uno diferente.");
    document.getElementById("valortextonombreamigo").value = "";
    return;
  }
    // agrega el nombre a la lista creada anterioirmente.
    listanombreAmigosParaSortear.push(nombreDeAmigo);
    alert(`Nombre agregado exitosamente,bienvenido(a) ${nombreDeAmigo}`)
    console.log(listanombreAmigosParaSortear)
    //borra el espacio de la entrada para escribir un nuevo nombre
    document.getElementById("valortextonombreamigo").value = "";

    MostrarListaAmigos();
}

function MostrarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

// hace un rrecorrido de la lita
    for (let i = 0; i < listanombreAmigosParaSortear.length;i++){
        let amigo = listanombreAmigosParaSortear[i];

        lista.innerHTML += `<li>${amigo}</li>`;
    }

}

function sortearAmigo(){
//valida que la lista no este vacia para poder sortear
    if (listanombreAmigosParaSortear.length == 0){
        alert("¡No hay amigos en la lista,por favor agrega algunos primero!")
        return
    }
//genera el maigo aleatorio
    let amigosAleatorio = Math.floor(Math.random() * listanombreAmigosParaSortear.length);
    //obtenemos aquí,el nombre sorteado.

    let amigoSorteado = listanombreAmigosParaSortear[amigosAleatorio];

    let resultadoAmigoSorteado = document.getElementById("resultado");

    resultadoAmigoSorteado.innerHTML = 
    `<p>¡El amigo seleccionado aleatoriamente es: <strong>${amigoSorteado}</strong>!</p>`
    console.log(amigoSorteado);
    ;




}





















/*function validarNombre() {
    const nombreValidado = document.getElementById("valortextonombreamigo").value.trim();
    
    if ( nombreValidado == ""){
        alert("por favor escribe un nombre")

    }else{
        alert(`Nombre agregado exitosamente,bienvenido ${nombreValidado}`)


    }
}
*/