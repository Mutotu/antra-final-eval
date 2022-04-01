const search = document.querySelector(".searchArtist");
const searchButton = document.querySelector(".search-button");
const sectionList = document.querySelector(".section-list");
const h3 = document.querySelector("h3");
let searched = "";
const error = document.querySelector(".error");
const loading = document.querySelector(".load");
const more = document.querySelector(".more");
let limit = 5;
import axios from "axios";

const searchArtist = (artist) => {
  const data = axios.get(
    `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`
  );
  data.then((res) => {
    let sendData = res.data.results.slice(limit - 5, limit);
    console.log(res.data.results.length);
    h3.innerHTML = `${res.data.results.length} results for "${searched}"`;
    get20(sendData);
  });
};

searchButton.addEventListener("click", () => {
  removePrevSongs();
  if (checkInput(search.value)) {
    searched = search.value;
    searchArtist(search.value);
    error.innerHTML = null;
    search.value = null;
  } else {
    error.innerHTML = "Please enter valid entry";
  }
});

function removePrevSongs() {
  while (sectionList.firstChild) {
    sectionList.removeChild(sectionList.firstChild);
  }
  limit = 5;
}
function checkInput(value) {
  if (value.length > 3) return true;
}

function generateCard(artist) {
  return `<div class='artist-card' id='${artist.artistId}'>

   <img src=${artist.artworkUrl100} />
    <p>${artist.artistName} </p>
    <p>${artist.collectionName}</p>

  </div>`;
}

const get20 = (data) => {
  data.map((art) => {
    let generatedCard = generateCard(art);
    insertIntoHtml(generatedCard);
  });
};

function insertIntoHtml(data) {
  sectionList.insertAdjacentHTML("afterbegin", data);
}

more.addEventListener("click", () => {
  limit += 5;
  searchArtist(searched);
  console.log(limit);
});
