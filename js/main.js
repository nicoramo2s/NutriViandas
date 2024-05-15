const listaDeCards = document.querySelector(".lista-cards");
const navLista = document.querySelectorAll(".nav-lista li");

const comidas = [
  {
    id: 1,
    nombre: "Chicken Crispy Roll",
    urlImagen:
      "https://imgs.search.brave.com/kJ79kW-75V4KfeNYlgHUPIZ2nGidu87A5kljNQ9201w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZmhvbWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzAxL0NyaXNw/eS1CdWZmYWxvLUNo/aWNrZW4tUm9sbC1V/cHNfZXhwczEyMjIz/NV9USDE5OTk2MzdB/MDNfMjhfMWJDX1JN/Uy02LmpwZz9maXQ9/NzAwLDcwMA",
    descripcion:
      "Experimenta el sabor incomparable del Chicken Crispy Roll: crujiente por fuera, jugoso por dentro. Una delicia que no querrás perderte.",
    precio: 4000,
    diaDeLaSemana: "Lunes",
  },
  {
    id: 2,
    nombre: "Burger Clasica",
    urlImagen:
      "https://imgs.search.brave.com/fHYC2NFjrlBnnfHZK1fmrEG1a25ecp2njaDHEKenKaI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzk0LzkyLzEw/LzM2MF9GXzk0OTIx/MDUzX0xjMDZ1YWJo/TnRNTlNLcTZINWdC/aFpWRG9JNm5LalhX/LmpwZw",
    descripcion:
      "Deléitate con nuestra Burger Clásica: una jugosa hamburguesa de carne premium, acompañada de ingredientes frescos y envuelta en un suave pan de hamburguesa. ¡Revive los sabores clásicos en cada delicioso bocado!",
    precio: 2000,
    diaDeLaSemana: "martes",
  },
  {
    id: 3,
    nombre: "Tallarines",
    urlImagen:
      "https://imgs.search.brave.com/bJZ5LLsurWZi6AUvLzVxob2KT8VrGDL8z253ZioMC8U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jaGV3/aW5naGFwcGluZXNz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wOC9UYWxs/YXJpbi1Sb2pvLmpw/Zw",
    descripcion:
      "Saborea la perfección con nuestros exquisitos tallarines: una experiencia culinaria que combina la suavidad de la pasta fresca con una irresistible salsa casera. Disfruta de la simplicidad y la exquisitez en cada bocado.",
    precio: 3000,
    diaDeLaSemana: "miercoles",
  },
  {
    id: 5,
    nombre: "Asado Parrillero",
    urlImagen:
      "https://imgs.search.brave.com/RWqSFJp5EvTnpMlOTI4DTiCegFC9p6B3eu8h_5MlZj8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0Lzc3LzA2LzQw/LzM2MF9GXzQ3NzA2/NDAxNl9aOW9zOFBq/NVVDaU9pUExIVGZN/eXBzSDNON2RjcGVi/cy5qcGc",
    descripcion:
      "Descubre el auténtico sabor del asado parrillero: cortes seleccionados, cocinados a la perfección sobre brasas ardientes. Una experiencia gastronómica inigualable en cada bocado.",
    precio: 6500,
    diaDeLaSemana: "viernes",
  },
];
function mostrarComidas(arr) {
  arr.forEach((comida) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${comida.urlImagen}" alt="image">
      <div class="card-text">
        <h5>${comida.nombre}</h5>
        <p>${comida.descripcion}</p>
      </div>
      <button class="card-price">$${comida.precio}</button>
    `;
    listaDeCards.appendChild(card);
  });
}

// Agrega un evento 'click' a cada elemento de la lista de días
navLista.forEach((dia) => {
  dia.addEventListener("click", () => {
    // Remueve la clase 'activado' de todos los elementos de la lista de días
    navLista.forEach((item) => {
      item.classList.remove("activado");
    });
    // Agrega la clase 'activado' al día clickeado
    dia.classList.add("activado");
    // Filtra las comidas basadas en el día seleccionado
    const diaSeleccionado = dia.textContent.toLowerCase();
    const comidasFiltradas = comidas.filter(
      (comida) => comida.diaDeLaSemana.toLowerCase() === diaSeleccionado
    );
    if (diaSeleccionado != "todos") {
      // Elimina las comidas actuales
      listaDeCards.innerHTML = "";
      // Muestra las comidas de la semana
      mostrarComidas(comidasFiltradas);
    } else {
      listaDeCards.innerHTML = "";
      // Muestra todas las comidas
      mostrarComidas(comidas);
    }
  });
});
// Carga desde el inicio todas las comidas
document.addEventListener("DOMContentLoaded", mostrarComidas(comidas));
