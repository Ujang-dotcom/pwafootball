document.addEventListener("DOMContentLoaded", function () {
  let urlParams = new URLSearchParams(window.location.search);
  let id = Number(urlParams.get("id"));
  let isFavorit = false
  myFav("favplayer", id).then((msg) => {
    console.log("statusData: resolve = " + msg)
    document.getElementById("iconFav").innerHTML = "favorite"
    getSavedDataById("pemain")
    isFavorit = true
  }).catch((msg) => {
    console.log("statusData: reject = " + msg)
    document.getElementById("iconFav").innerHTML = "favorite_border"
    getDetailPlayerById()
    isFavorit = false
  })

  let iconFav = document.getElementById("iconFav");

  iconFav.onclick = function () {
    console.log("Tombol FAB di klik.");
    if (isFavorit) {
      deleteFavorite("favplayer", id);
      isFavorit = false
    } else {
      item = getDetailPlayerById();
      item.then(function (pemain) {
        createFavData("pemain", pemain);
      });
      isFavorit = true
    }
  };
});