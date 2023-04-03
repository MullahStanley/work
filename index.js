//first step
/*document.addEventListener("DOMContentLoaded",function displayFilm(films){
    const tickets = `${tickets_sold}` - `${capacity}`;
    const list=document.createElement("li")
    list.innerHTML=`
  <img src="${poster}" class="card-img-top" alt="poster">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${runtime}.</p>
    <p class="card-text">${showtime}</p>
    <p class="card-text">${tickets}</p>
    <a href="#" class="btn btn-primary">Buy Ticket</a>
  </div>
    `
  details.appendChild(list)
})



//fetch requests
function showFilm(){
    fetch("http://localhost:3000/films/1")
    .then(res=> res.json())
    .then(films => films.forEach(element => {
      
    })
    )
}*/
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/films/1')
    .then(response => response.json())
    .then(data => {
      data.forEach(films => {
        const details= document.querySelector("#main-1")
        const tickets = `${tickets_sold}` - `${capacity}`;
        const list=document.createElement("li")
        list.innerHTML=`
        <img src="${poster}" class="card-img-top" alt="poster">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${runtime}.</p>
          <p class="card-text">${showtime}</p>
          <p class="card-text">${tickets}</p>
          <a href="#" class="btn btn-primary">Buy Ticket</a>
        </div>
      `
  details.appendChild(list)
    })
  })
})