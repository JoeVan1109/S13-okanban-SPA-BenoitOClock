/*
// Ton code JavaScript ici !
const baseAPIURL = 'http://localhost:4000'
// 1. récupérer les listes
const httpResponse = await fetch(`${baseAPIURL}/lists`);
const data = await httpResponse.json();

console.log(data)

const listContainer = document.querySelector('#lists-container');
// 2. fabriqué les elements html necessaire à l'affichage
const listTemplate = document.querySelector("#list-template");

for(const list of data){
  const listClone = listTemplate.content.cloneNode(true);
  listClone.querySelector(".list-title").textContent = list.title;
  // 3. ajouter ces éléments dans le div qui à l'id lists-container
  listContainer.appendChild(listClone)
}
  */ 
