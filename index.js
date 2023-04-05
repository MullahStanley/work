//tickets expression
const tickets= `${film.capacity}` -`${film.tickets_sold}`;
document.addEventListener("DOMContentLoaded",showFilm(film))
//first function
function showFilm(film) {
  let card = document.createElement("div");
  document.addEventListener("load", () => {
    const films= document.querySelector("#films")
    card.innerHTML = `
     
      <img id="image" src=${film.poster} alt="${film.title}" />
      <h3>${film.title}</h3>
      <h3>${film.runtime}</h3>
      <h3>${film.showtime}</h3>
      <h3> Available Tickets:${tickets}</h3>
    `;
  //Append the data to the DOM.
    films.appendChild(card);
  });
}
///Fetch the first movie
function fetchFilm() {
  fetch("http://localhost:3000/film/1")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then((data) => showFilm(data));
  loadFirstFilm();
  allFilms();
}

//load the first movie
function loadFirstFilm() {
  fetchFilm();
}


// fetches all movies
function allFilms() {
  fetch("http://localhost:3000/film")
    .then((res) => res.json())
    .then((data) => data.forEach((film) => filmMenu(film)));
}

//creates the ordered lists to append to the left section
function filmMenu(film) {
  const list = document.createElement("ol");
  list.innerHTML = `
      <li>
      <img id="image"src=${film.poster} alt="" />
      <h3>${film.title}</h3>
      <h3>${film.runtime}</h3>
      <h3>${film.capacity}</h3>
      <h3>${film.showtime}</h3>
      <h3>${film.description}</h3>
      <h3>${tickets}</h3>
      </li> 
        `
  document.querySelector("#left-section").append(list);
}

///button event
const button = document.querySelector("button");
button.addEventListener("click", () => {
  let availableTickets = tickets;
  if (availableTickets >= 1) {
    availableTickets-1;
  } else if(availableTickets<1){
    alert("Tickets are no longer available");
  }
});