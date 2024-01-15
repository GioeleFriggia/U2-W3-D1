// Definizione della classe Pet
class Pet {
  // Costruttore della classe per inizializzare le proprietà dell'animale
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  // Metodo che verifica se due animali hanno lo stesso proprietario
  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

// Lista di animali domestici
const petList = [];

// Funzione per creare un nuovo animale domestico e aggiungerlo alla lista
function createPet() {
  // Ottieni i valori dai campi del modulo HTML
  const petName = getValue("petName");
  const ownerName = getValue("ownerName");
  const species = getValue("species");
  const breed = getValue("breed");

  // Crea un nuovo oggetto Pet
  const pet = new Pet(petName, ownerName, species, breed);

  // Verifica se l'animale esiste già nella lista
  if (petAlreadyExists(pet)) {
    alert("Pet already exists in the list!");
    return;
  }

  // Aggiungi l'animale alla lista
  petList.push(pet);

  // Aggiorna la visualizzazione della lista
  displayPetList();
}

// Funzione per visualizzare la lista di animali domestici nel modulo HTML
function displayPetList() {
  // Ottieni l'elemento HTML della lista
  const petListElement = document.getElementById("petList");
  // Cancella il contenuto attuale della lista
  petListElement.innerHTML = "";

  // Itera sulla lista di animali e crea elementi <li> per la visualizzazione
  petList.forEach((pet) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    // Mostra le informazioni sull'animale nel formato specificato
    listItem.textContent = `${pet.petName}, owned by ${pet.ownerName}, ${pet.species}, ${pet.breed}`;
    // Aggiungi l'elemento <li> alla lista
    petListElement.appendChild(listItem);
  });
}

// Funzione di utilità per ottenere il valore di un elemento HTML dato l'ID
function getValue(elementId) {
  return document.getElementById(elementId).value;
}

// Funzione di supporto per verificare se un animale esiste già nella lista
function petAlreadyExists(newPet) {
  return petList.some((existingPet) => arePetsEqual(existingPet, newPet));
}

// Funzione di supporto per confrontare due animali
function arePetsEqual(pet1, pet2) {
  // Verifica se tutte le proprietà sono uguali
  return (
    pet1.petName === pet2.petName &&
    pet1.ownerName === pet2.ownerName &&
    pet1.species === pet2.species &&
    pet1.breed === pet2.breed
  );
}
