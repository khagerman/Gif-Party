const addGif = document.querySelector("#submit");
const input = document.querySelector("#searchterm");
const memeContainer = document.querySelector("#memeContainer");
const remove = document.querySelector("#remove");

addGif.addEventListener("click", function (e) {
  e.preventDefault();
  getGif(input.value);
  input.value = "";
});

async function getGif(keyword) {
  const urlGiphy = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
  const res = await axios.get(urlGiphy);

  try {
    let randomIndex = Math.floor(Math.random() * res.data.data.length);
    newGif(res.data.data[randomIndex].images.downsized_medium.url);
  } catch (e) {
    alert("Search term not found, please try again");
  }
}
function newGif(imgUrl) {
  const newIMG = document.createElement("IMG");
  newIMG.src = imgUrl;
  newIMG.classList.add("m-2");

  memeContainer.append(newIMG);
  return newIMG;
}
//
remove.addEventListener("click", function () {
  memeContainer.innerHTML = "";
});
