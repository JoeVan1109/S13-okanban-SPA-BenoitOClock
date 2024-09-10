// ===== REVISION DU DOM =====

/*
- ✅ querySelector
- ✅ querySelectorAll
- ✅ addEventListener
- ✅ createElement
- ✅ classList
- ✅ style
*/

/*
- ✅ <template>
  ✅ - cloner une template
  ✅ - selecteur par attribut slot
*/


// ===== Récupérer un élément du DOM =====

// On récupère le h1 par son tag
document.querySelector("h1");

// On récupère le H1 par son ID
document.querySelector("#title");
document.getElementById("title");

// On récupère le H1 par sa classe
document.querySelector(".title");
document.getElementsByClassName("title")[0];


const titleElement = document.querySelector("h1");
console.dir(titleElement);

// ====== Modifier le style d'un élément =====

titleElement.style.backgroundColor = "yellow";
titleElement.style.color = "#FF00FF";


// ====== Ajouter une classe sur un élément

titleElement.classList.add("underline");
// titleElement.classList.remove("title");
// titleElement.classList.toggle("title");
// titleElement.classList.contains("title");

// ====== Créer un élément
// document.createElement(tag)

// ======= insérer un element html dans le dom
// document.appendChild
// append, prepend
 // insertAdjacent[HTML, text, Element]

// ====== Réagir à un évènement ======

const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", () => {
  buttonElement.textContent = "Bingo !";
});

window.addEventListener("scroll", (event) => {
  console.log(event); // event = { ... } qui représente le scroll qui vient d'être effectué par l'utilisateur
});


// ===== Create Element ====

const fruits = [
  { name: "kiwi", unitPrice: 1, quantity: 6 },
  { name: "banane", unitPrice: 0.25, quantity: 4 },
  { name: "durian", unitPrice: 20, quantity: 1 },
  { name: "pommes", unitPrice: 0.5, quantity: 3 }
];

fruits.forEach(fruit => {
  // Créer un LI 
  const fruitLi = document.createElement("li");

  // Modifier le LI
  fruitLi.textContent = fruit.name;

  // Ajouter un listener avant d'insérer dans le DOM
  fruitLi.addEventListener("click", () => { console.log(`J'aime les ${fruit.name}`); });

  // Selectionner un parent
  const fruitsUl = document.querySelector("#fruits-list");

  // Insére le LI dans le parent
  fruitsUl.appendChild(fruitLi);
});

// ====== Selection de plusieurs éléments d'un seul coup ======
const fruitElements = document.querySelectorAll("#fruits-list li");

fruitElements.forEach(fruitElement => { // Ecouter le click sur chaque fruit
  fruitElement.addEventListener("click", () => {
    alert(`J'aime les ${fruitElement.textContent}`);
  });
});


// ====== TEMPLATE ======

// Selectionner le teamplte
const fruitTemplate = document.querySelector("#fruit-template");

// Cloner le template
const fruitClone = fruitTemplate.content.cloneNode(true);

// Modifier le clone en utilisant les slots
fruitClone.querySelector('[slot="fruit-name"]').textContent = "Poire";
fruitClone.querySelector('[slot="fruit-quantity"]').textContent = "3";
fruitClone.querySelector('[slot="fruit-price"]').textContent = 0.5;

// Selectionner un parent...
const articlesListElement = document.querySelector("#articles-list");

// ... pour insérer le clone dedans
articlesListElement.appendChild(fruitClone);


// ===== TEMPLATE pour chaque fruit !

fruits.forEach(fruit => {
  const fruitTemplate = document.querySelector("#fruit-template"); // Selectionner le template
  const fruitClone = fruitTemplate.content.cloneNode(true); // Cloner le template
  
  fruitClone.querySelector('[slot="fruit-name"]').textContent = fruit.name;
  fruitClone.querySelector('[slot="fruit-price"]').textContent = fruit.unitPrice;
  fruitClone.querySelector('[slot="fruit-quantity"]').textContent = fruit.quantity;

  const articlesListElement = document.querySelector("#articles-list"); // Selectionner un parent
  articlesListElement.appendChild(fruitClone); // Insérer dans le parent
});
