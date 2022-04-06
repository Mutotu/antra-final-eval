class Jquery {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }
  on(type, cb) {
    this.element.addEventListener(type, cb);
  }
  value() {
    return this.element.value;
  }
  html(val) {
    this.element.innerHTML = val;
  }
  ajax(artist) {
    return fetch(
      `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`
    ).then((res) => res.json());
  }
}
//////////////////////////////////////////////////////
const search = new Jquery(".searchArtist");
const searchButton = new Jquery(".search-button");
const sectionList = document.querySelector(".section-list");
const h3 = new Jquery("h3");
let searched = "";
const error = new Jquery(".error");

const more = new Jquery(".more");
let limit = 5;
// import axios from "axios";

const searchArtist = (artist) => {
  //   const data = axios.get(
  //     `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`
  //   );

  const data = new Jquery(".searchArtist");
  data.ajax(artist).then((res) => {
    let sendData = res.results.slice(limit - 5, limit);

    h3.html(`${res.results.length} results for "${searched}"`);
    get20(sendData);
  });
};

searchButton.on("click", () => {
  removePrevSongs();
  if (checkInput(search.value())) {
    searched = search.value();
    searchArtist(search.value());
    error.html(null);
    search.value();
  } else {
    error.html("Please enter valid entry");
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

more.on("click", () => {
  limit += 5;
  searchArtist(searched);
});
