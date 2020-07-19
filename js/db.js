function myFav(storeName, id) {
  return new Promise(function (resolve, reject) {
    databasePromise(idb)
    .then(function (db) {
      let tx = db.transaction(storeName, "readonly");
      let store = tx.objectStore(storeName);
      return store.get(id);
    })
    .then(function (data) {
      if (data != undefined) {
        resolve("Favorite")
      } else {
        reject("Not my favorit")
      }
    });
  });
}

// tambah data favorit
  function createFavData(dataType, data) {
      let storeName = "";
      let dataToCreate = {}
      if (dataType == "pemain") {
        storeName = "favplayer";
        dataToCreate = {
          id: data.id,
          name: data.name,
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: data.dateOfBirth,
          counrtyOfBirth: data.counrtyOfBirth,
          nationality: data.nationality,
          position: data.position
        }
      } else if (dataType == "tim") {
        storeName = "favteam"
        dataToCreate = {
          id: data.id,
          name: data.name,
          shortName: data.shortName,
          tla: data.tla,
          crestUrl: data.crestUrl,
          address: data.address,
          phone: data.phone,
          website: data.website,
          email: data.email,
          founded: data.founded,
          clubColors: data.clubColors,
          venue: data.venue,
          squad: data.squad
        }
      
      }

      console.log("data " + dataToCreate);
      databasePromise(idb).then(db => {
        const tx = db.transaction(storeName, 'readwrite');
        tx.objectStore(storeName).put(dataToCreate);

        return tx.complete;
      }).then(function () {
        console.log('data tim berhasil disimpan.');
        document.getElementById("iconFav").innerHTML = "favorite";
        M.toast({
          html: 'Check My Favorite!',
          classes: 'rounded'
        });
      }).catch(function () {
        M.toast({
          html: 'terjadi kesalahan'
        });
      });

  }

// hapus data favorit
function deleteFavorite(storeName, data) {
  databasePromise(idb).then(function (db) {
    let tx = db.transaction(storeName, 'readwrite');
    let store = tx.objectStore(storeName);
        //console.log("deleteDataPlayerfav: cek id= " + data);
        store.delete(data);
        return tx.complete;
      }).then(function () {
        console.log('Item deleted');
        document.getElementById("iconFav").innerHTML = "favorite_border";
        M.toast({
          html: 'Not My Favorite',
          classes: 'rounded'
        });
      }).catch(function () {
        M.toast({
          html: 'Error',
          classes: 'rounded'
        });
      });
}

// ambil data tersimpan berdasarkan id
  function getSavedDataById(dataType) {
    // Ambil nilai query parameter (?id=)
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = Number(urlParams.get("id"));

    if (dataType == "tim") {
      let dataSquadHTML = ''
      let tabelSquadHTML = ''
      getDataById("favteam", idParam).then(function (tim) {
          // Objek JavaScript dari response.json() masuk lewat letiabel data.
          // console.dir("getSavedTimById: " + tim);
          // Menyusun komponen card artikel secara dinamis
          dataDetailTeam(tim)
          dataTeamJSON = tim;
          tim.squad.forEach(function (squad) {
            dataSquadJSON = squad;
            // console.log("getSavedTimById show name name: " + squad.name);
            // console.log("getSavedTimById show name position: " + squad.position);
            dataSquadHTML += `
            <tr>
            <td >
            <a href="./detailplayer.html?id=${squad.id}"> ${squad.name}</a>
            </td>
            <td >${squad.position}</td>
            </tr>
            `
          });
          tabelSquadHTML += `<table> <tbody> ${dataSquadHTML}  </tbody> </table>`

          document.getElementById("squad").innerHTML = tabelSquadHTML;
        })
    } else if (dataType == "pemain") {
      getDataById("favplayer", idParam).then(function (player) {

            // Objek JavaScript dari response.json() masuk lewat letiabel data.
            console.dir("getSavedPlayerById: data: " + player);
            // Menyusun komponen card artikel secara dinamis
            dataDetailPlayer(player);
          });
      }
  }

// ambil data dari database berdasarkan id
  function getDataById(storeName, id) {
    return new Promise(function (resolve, reject) {
      databasePromise(idb)
      .then(function (db) {
        let tx = db.transaction(storeName, "readonly");
        let store = tx.objectStore(storeName);
        return store.get(id);
      })
      .then(function (data) {
        resolve(data);
      });
    });
  }

// ambil semua data dari database
  function getAllData(storeName) {
    return new Promise(function (resolve, reject) {
      databasePromise(idb)
      .then(function (db) {
        let tx = db.transaction(storeName, "readonly");
        let store = tx.objectStore(storeName);
        return store.getAll();
      })
      .then(function (data) {
        resolve(data);
      });
    });
  }

  