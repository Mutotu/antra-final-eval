const search = document.querySelector(".searchArtist");
const searchButton = document.querySelector(".search-button");
const sectionList = document.querySelector(".section-list");
const h3 = document.querySelector("h3");
let searched = "";
const error = document.querySelector(".error");
const loading = document.querySelector(".load");
const more = document.querySelector(".more");

// async function searchArtist(artist) {
//   const response = fetch(
//     `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`
//   )
//     .then((res) => res.json())
//     .then((json) => {
//       get20(json);
//       loader();
//     });
// }

// function loader() {
//   loading.classList.add("loading");
// }
// function unloader() {
//   loading.classList.remove("loading");
// }

// function checkInput(value) {
//   if (value.length > 3) return true;
// }

// search.addEventListener("keypress", (e) => {
//   if (e.keyCode === 13) {
//     searched = search.value;
//     if (checkInput(search.value)) {
//       searchArtist(search.value);
//       error.innerHTML = null;
//       search.value = null;
//     } else {
//       error.innerHTML = "Please enter valid entry";
//     }
//   }
// });
// searchButton.addEventListener("click", () => {
//   if (checkInput(search.value)) {
//     searched = search.value;
//     searchArtist(search.value);
//     error.innerHTML = null;
//     search.value = null;
//     // limit = 20;
//     arr = [];
//   } else {
//     error.innerHTML = "Please enter valid entry";
//   }
// });

// function generateCard(artist) {
//   return `<div class='artist-card' id='${artist.artistId}'>

//    <img src=${artist.artworkUrl100} />
//     <p>${artist.artistName} </p>
//     <p>${artist.trackName}</p>

//   </div>`;
// }

// let limit = 0;
// let arr = [];
// function get20(songs) {
//   arr = songs.results.slice(limit, limit + 3);

//   for (let i = 0; i < arr.length; i++) {
//     let generatedCard = generateCard(arr[i]);
//     insertIntoHtml(generatedCard);
//   }
// }

// more.addEventListener("click", () => {
//   get20;
//   searchArtist(searched);
//   limit += 3;
// });
// function insertIntoHtml(data) {
//   sectionList.insertAdjacentHTML("afterbegin", data);
//   h3.innerHTML = `${data.length} results for "${searched}"`;
// }
