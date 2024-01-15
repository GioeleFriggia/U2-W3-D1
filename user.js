// Definizione della classe User
class User {
  // Costruttore della classe per inizializzare le proprietà dell'utente
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  // Metodo per confrontare l'età con un altro utente
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} is older than ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} is younger than ${otherUser.firstName}`;
    } else {
      return `${this.firstName} is the same age as ${otherUser.firstName}`;
    }
  }
}

// Lista di utenti
const userList = [];

// Funzione per creare un nuovo utente e aggiungerlo alla lista
function createUser() {
  // Ottieni i valori dai campi del modulo HTML
  const firstName = getValue("firstName");
  const lastName = getValue("lastName");
  const age = getValue("age");
  const location = getValue("location");

  // Crea un nuovo oggetto User
  const user = new User(firstName, lastName, age, location);

  // Verifica se l'utente esiste già nella lista
  if (userAlreadyExists(user)) {
    alert("User already exists in the list!");
    return;
  }

  // Aggiungi l'utente alla lista
  userList.push(user);

  // Aggiorna la visualizzazione della lista
  displayUserList();
}

// Funzione per visualizzare la lista di utenti nel modulo HTML
function displayUserList() {
  // Ottieni l'elemento HTML della lista
  const userListElement = document.getElementById("userList");
  // Cancella il contenuto attuale della lista
  userListElement.innerHTML = "";

  // Itera sulla lista di utenti e crea elementi <li> per la visualizzazione
  userList.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    // Mostra le informazioni sull'utente nel formato specificato
    listItem.textContent = `${user.firstName} ${user.lastName}, ${user.age} years old, located in ${user.location}`;
    // Aggiungi l'elemento <li> alla lista
    userListElement.appendChild(listItem);
  });
}

// Funzione di utilità per ottenere il valore di un elemento HTML dato l'ID
function getValue(elementId) {
  return document.getElementById(elementId).value;
}

// Funzione di supporto per verificare se un utente esiste già nella lista
function userAlreadyExists(newUser) {
  return userList.some((existingUser) => areUsersEqual(existingUser, newUser));
}

// Funzione di supporto per confrontare due utenti
function areUsersEqual(user1, user2) {
  // Verifica se tutte le proprietà sono uguali
  return (
    user1.firstName === user2.firstName &&
    user1.lastName === user2.lastName &&
    user1.age === user2.age &&
    user1.location === user2.location
  );
}
