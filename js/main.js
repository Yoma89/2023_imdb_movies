let cont = document.querySelector('#cont');
let a = fetch('https://www.omdbapi.com/?apikey=b6003d8a&s=All');

a.then((res)=>{
    console.log(res);
    return res.json();
}).then((info)=>{
    console.log(info.Search);
    cont.innerHTML = "";
    info.Search.forEach(elem => {
        cont.innerHTML += `
        <div class="card">
        <h4>${elem.Title}</h4>
        <p>${elem.Year}</p>
        <p>IMDbid: ${elem.imdbID}</p>
        <img
          src="${elem.Poster}"
          alt="poster"
        />
      </div>
    `
    });
})