const basesrc= "http://localhost:3000/films";
const details=document.querySelector("#section-1")
function showFilm(films){
    
}
//first step
function displayFilm(films){
    const tickets = `${tickets_sold}` - `${capacity}`;
    const list=document.createElement("li")
    list.innerHTML=`
  <img src="`${poster}`" class="card-img-top" alt="poster">
  <div class="card-body">
    <h5 class="card-title">`${title}`</h5>
    <p class="card-text">`${runtime}`.</p>
    <p class="card-text">`${showtime}`</p>
    <p class="card-text">`${tickets}`</p>
    <a href="#" class="btn btn-primary">Buy Ticket</a>
  </div>
    `
  details.appendChild(list)
}



//fetch requests
function showFilm(){
    fetch("http://localhost:3000/films")
    .then(res=> res.json())
    .then()
}