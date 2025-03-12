// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let inputText = document.getElementById("amigo");
  if (inputText.value === "") {
    alert("Por favor, inserte un nombre");
  } else {
    amigos.push(inputText.value);
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML += `<li>${inputText.value}</li>`;
    inputText.value = "";
  }
}

function sortearAmigo() {
  if (amigos.length !== 0) {
    let randomFriend = Math.floor(Math.random() * amigos.length);
    let friend = amigos[randomFriend];
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById(
      "resultado"
    ).innerHTML = `<li>El amigo secreto es: ${friend}</li>`;
  }
}
