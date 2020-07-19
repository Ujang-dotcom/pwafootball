// membuat buat database

function databasePromise(idb) {
  let dbPromise = idb.open("Football PL", 1, function (upgradeDb) {
    if (!upgradeDb.objectStoreNames.contains("favteam")) {
      let indexTimFav = upgradeDb.createObjectStore("favteam", {
        keyPath: "id"
      });
      indexTimFav.createIndex("namaTim", "name", {
        unique: false
      });
    }

    if (!upgradeDb.objectStoreNames.contains("favplayer")) {
      let indexPlayerFav = upgradeDb.createObjectStore("favplayer", {
        keyPath: "id"
      });
      indexPlayerFav.createIndex("namaPemain", "name", {
        unique: false
      });
    }
  });

  return dbPromise;
}