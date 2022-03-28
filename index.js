const search = document.querySelector(".searchArtist");
const searchButton = document.querySelector(".search-button");
const sectionList = document.querySelector(".section-list");
const h3 = document.querySelector("h3");
let searched = "";
const error = document.querySelector(".error");
const loading = document.querySelector(".load");

/////
async function searchArtist(artist) {
  const response = fetch(`https://itunes.apple.com/search?term=${artist}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      renderCardList(json);
      loader();
    });
}

function loader() {
  loading.classList.add("loading");
}
function unloader() {
  loading.classList.remove("loading");
}

function checkInput(value) {
  if (value.length > 3) return true;
}
////change search bar
//// modify the eventlisteners and error message
search.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    // loader();
    searched = search.value;
    if (checkInput(search.value)) {
      searchArtist(search.value);
      error.innerHTML = null;
      search.value = null;
    } else {
      console.log("wrongs");
      error.innerHTML = "Please enter valid entry";
    }
  }
});
searchButton.addEventListener("click", () => {
  if (checkInput(search.value)) {
    // loader();
    searched = search.value;
    searchArtist(search.value);
    error.innerHTML = null;
    search.value = null;
  } else {
    console.log("wrongs");
    error.innerHTML = "Please enter valid entry";
  }
});

function generateCard(artist) {
  return `<div class='artist-card' id='${artist.artistId}'>
  
  <img src=${artist.artworkUrl100} />
    <p>${artist.artistName} </p>
    <p>${artist.trackName}</p>    
  
  </div>`;
}

function renderCardList(artists) {
  return artists.results.map((artist) => {
    let generatedCard = generateCard(artist);
    insertIntoHtml(generatedCard);
  });
}

function insertIntoHtml(data) {
  sectionList.insertAdjacentHTML("afterbegin", data);
  h3.innerHTML = `${data.length} results for "${searched}"`;
}
