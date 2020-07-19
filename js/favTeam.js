document.addEventListener("DOMContentLoaded", function () {
  let urlParams = new URLSearchParams(window.location.search);
  let id = Number(urlParams.get("id"));
  let isFavorit = false
  myFav("favteam", id).then((msg) => {
    console.log("statusData: resolve = " + msg)
    document.getElementById("iconFav").innerHTML = "favorite"
    getSavedDataById("tim")
    isFavorit = true
  }).catch((msg) => {
    console.log("statusData: reject = " + msg)
    document.getElementById("iconFav").innerHTML = "favorite_border"
    getDetailKlubById()
    isFavorit = false
  })

  let iconFav = document.getElementById("iconFav");

  iconFav.onclick = function () {
    console.log("Tombol FAB di klik.");
    if (isFavorit) {
      deleteFavorite("favteam", id);
      isFavorit = false
    } else {
      item = getDetailKlubById();
      item.then(function (tim) {
        createFavData("tim", tim);
      });
      isFavorit = true
    }

  };
});