const container = document.querySelector(".container");
const botoaReiniciar = document.querySelector("button");
let cartas;
let primeiraCarta = "";
let segundaCarta = "";

botoaReiniciar.addEventListener("click", () => location.reload());

let items = [
    { nome: "ellie", imagem: "ellie.jpg" },
    { nome: "jill", imagem: "jill.jpg" },
    { nome: "kratos", imagem: "kratos.webp" },
  
];

function criarCartas() {
  let itemsDuplicados = [...items, ...items];
  let jogo = itemsDuplicados.sort(() => Math.random() - 0.5);

  jogo.map((jogo) => {
    container.innerHTML += `
    <div class="carta" data-carta=${jogo.nome}>
    <div class="atras">?</div>
    <div class="frente">
      <img src=${jogo.imagem} width="180px" height="180px" />
    </div>`;
  });
}
criarCartas();

function virarCarta() {
  cartas = document.querySelectorAll(".carta");

  cartas.forEach((carta) => {
    carta.addEventListener("click", () => {
      if (primeiraCarta == "") {
        carta.classList.add("carta-virada");
        primeiraCarta = carta;
      } else if (segundaCarta == "") {
        carta.classList.add("carta-virada");
        segundaCarta = carta;
        checarCartas(carta);
      }
    });
  });
}
virarCarta();

function checarCartas() {
  const primeiroJogo = primeiraCarta.getAttribute("data-carta");
  const segundoJogo = segundaCarta.getAttribute("data-carta");

  if (primeiroJogo == segundoJogo) {
    primeiraCarta = "";
    segundaCarta = "";
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove("carta-virada");
      segundaCarta.classList.remove("carta-virada");

      primeiraCarta = "";
      segundaCarta = "";
    }, 600);
  }
}