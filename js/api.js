let id_liga = 2021 //id liga inggris
let base_url = "https://api.football-data.org/v2/";
let urlTim = `${base_url}teams/`
let urlPlayer = `${base_url}players/`
let urlStanding = `${base_url}competitions/${id_liga}/standings?standingType=TOTAL`
let urlMatchUpComing = `${base_url}competitions/${id_liga}/matches?status=SCHEDULED`
let urlMatchUpDetail = `${base_url}matches/`
let urlTopScore = `${base_url}competitions/${id_liga}/scorers`
let urlCompetition = `${base_url}competitions/${id_liga}/matches?status=FINISHED`



// deklarasi api //
let fetchApi = url => {
  return fetch(url, {
    headers: {
      'X-Auth-Token': 'bc675ba4846949d6b421fcfbd4867d9f'
    }
  });
}

/////////////////////////
// convert format time //
////////////////////////
let convertFormatDate = date => {
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
    const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date ) 

    return `${day}-${month}-${year}`
}

let convertUTCDate = date => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} ${formatAMPM(date)}`
}

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}


////////////////////////
////////response////////
///////////////////////

// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    // Method reject() akan membuat blok catch terpanggil
    return Promise.reject(new Error(response.statusText));
  } else {
    // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}

// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
  return response.json();
}

// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
  // Parameter error berasal dari Promise.reject()
  console.log("Error : " + error);
}


//////////////////////////////////////////////////////////////
/////////////////////// TopScore /////////////////////////////
//////////////////////////////////////////////////////////////

function getTopScore() {
  if ('caches' in window) {
    caches.match(urlTopScore).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          topScore(data);
        });
      }
    });
  }

  fetchApi(urlTopScore)
    .then(status)
    .then(json)
    .then(function (data) {
      console.log(data)
      console.log(data)
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card artikel secara dinamis
      topScore(data);
        
     
    })
    .catch(error);
}

//////////////////////////////////////////////////////////////
/////////////////////// Liga Standing ////////////////////////
//////////////////////////////////////////////////////////////

// Blok kode untuk melakukan request data json
function getStanding() {
  if ('caches' in window) {
    caches.match(urlStanding).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          standings(data);
        });
      }
    });
  }

  fetchApi(urlStanding)
    .then(status)
    .then(json)
    .then(function (data) {
      console.log(data)
      console.log(data)
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card artikel secara dinamis
      standings(data);
    })
    .catch(error);
}


///////////////////////
// Detail Function //
///////////////////
function getDetailKlubById() {
  return new Promise(function (resolve, reject) {
    // Ambil nilai query parameter (?id=)
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get("id");

    let dataSquadHTML = ''
    let tabelSquadHTML = ''
    if ("caches" in window) {
      caches.match(urlTim + idParam).then(function (response) {
        if (response) {
          response.json().then(function (data) {
            // Objek JavaScript dari response.json() masuk lewat letiabel data.
            console.log(data);
            // Menyusun komponen card artikel secara dinamis

            document.getElementById("clubName").innerHTML = data.name;
            document.getElementById("logo").src = data.crestUrl;
            document.getElementById("name").innerHTML = data.name;
            document.getElementById("shortName").innerHTML = data.shortName;
            document.getElementById("tla").innerHTML = data.tla;
            document.getElementById("address").innerHTML = data.address;
            document.getElementById("phone").innerHTML = data.phone;
            document.getElementById("website").innerHTML = data.website;
            document.getElementById("email").innerHTML = data.email;
            document.getElementById("founded").innerHTML = data.founded;
            document.getElementById("clubColors").innerHTML = data.clubColors;
            document.getElementById("venue").innerHTML = data.venue;

            data.squad.forEach(function (squad, index) {
              if(squad.position == null){
                squad.position = "Coach";
              }
              dataSquadHTML += `
              <tr>
                <td >
                <a href="/pwafootball/pages/detail-pages/detailplayer.html?id=${squad.id}"> ${squad.name}</a>
                </td>
                <td>${squad.position}</td>
              </tr>
`
            });
            tabelSquadHTML += `<table> <tbody> ${dataSquadHTML}  </tbody> </table>`

            document.getElementById("squad").innerHTML = tabelSquadHTML;
            // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
            resolve(data);
          });
        }
      });
    }

    fetchApi(urlTim + idParam)
      .then(status)
      .then(json)
      .then(function (data) {
        // Objek JavaScript dari response.json() masuk lewat letiabel data.
        console.log(data);
        // Menyusun komponen card artikel secara dinamis
        document.getElementById("clubName").innerHTML = data.name;
        document.getElementById("logo").src = data.crestUrl;
        document.getElementById("name").innerHTML = data.name;
        document.getElementById("shortName").innerHTML = data.shortName;
        document.getElementById("tla").innerHTML = data.tla;
        document.getElementById("address").innerHTML = data.address;
        document.getElementById("phone").innerHTML = data.phone;
        document.getElementById("website").innerHTML = data.website;
        document.getElementById("email").innerHTML = data.email;
        document.getElementById("founded").innerHTML = data.founded;
        document.getElementById("clubColors").innerHTML = data.clubColors;
        document.getElementById("venue").innerHTML = data.venue;

        
        data.squad.forEach(function (squad, index) {
          
          // console.log("show name name: " + squad.name);
          // console.log("show name position: " + squad.position);
           if(squad.position === null){
                squad.position = "Coach";
              }
          dataSquadHTML += `
          <tr>
            <td >
              <a href="/pwafootball/pages/detail-pages/detailplayer.html?id=${squad.id}"> ${squad.name}</a>
            </td>
            <td >${squad.position}</td>
          </tr>
     `
        });
        tabelSquadHTML += `<table> <tbody> ${dataSquadHTML}  </tbody> </table>`

        document.getElementById("squad").innerHTML = tabelSquadHTML;
        // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
        resolve(data);
      })
      .catch(error);
  });
}

function getDetailPlayerById() {
  return new Promise(function (resolve, reject) {
    // Ambil nilai query parameter (?id=)
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get("id");
    let dataSquadHTML = ''
    let tabelSquadHTML = ''
    if ('caches' in window) {
      caches.match(urlPlayer + idParam).then(function (response) {
        if (response) {
          response.json().then(function (data) {
            document.getElementById("name").innerHTML = data.name;
            document.getElementById("firstName").innerHTML = data.firstName;
            if (data.lastName == null) {
              data.lastName = "-"
            }
            document.getElementById("lastName").innerHTML = data.lastName;
            document.getElementById("dateOfBirth").innerHTML = `${convertFormatDate(new Date(data.dateOfBirth))}`;
            document.getElementById("countryOfBirth").innerHTML = data.countryOfBirth;
            document.getElementById("nationality").innerHTML = data.nationality;
            document.getElementById("position").innerHTML = data.position;
            resolve(data)
          });
        }
      });
    }
    fetchApi(urlPlayer + idParam)
      .then(status)
      .then(json)
      .then(function (data) {
        // Objek JavaScript dari response.json() masuk lewat letiabel data.
        console.log(data);
        // Menyusun komponen card artikel secara dinamis
        document.getElementById("name").innerHTML = data.name;
        document.getElementById("firstName").innerHTML = data.firstName;
        if (data.lastName == null) {
          data.lastName = "-"
        }
        document.getElementById("lastName").innerHTML = data.lastName;
        document.getElementById("dateOfBirth").innerHTML = `${convertFormatDate(new Date(data.dateOfBirth))}`;
        document.getElementById("countryOfBirth").innerHTML = data.countryOfBirth;
        document.getElementById("nationality").innerHTML = data.nationality;
        document.getElementById("position").innerHTML = data.position;
        resolve(data);
      })
      // .catch(error);
  });
}

///////////
// Match //
///////////
function getMatch() {
  if ('caches' in window) {
    caches.match(urlMatchUpComing).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          match(data);
        });
      }
    });
  }

  fetchApi(urlMatchUpComing)
    .then(status)
    .then(json)
    .then(function (data) {
      console.log(data)
      console.log(data)
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card artikel secara dinamis
      match(data);
    })
    .catch(error);
}
/////////////////
// competition //
////////////////
function getCompetition() {
  if ('caches' in window) {
    caches.match(urlCompetition).then(function (response) {
      if (response) {
        response.json().then(function (data) {
          competition(data);
        });
      }
    });
  }

  fetchApi(urlCompetition)
    .then(status)
    .then(json)
    .then(function (data) {
      console.log(data)
      console.log(data)
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card artikel secara dinamis
      competition(data);
    })
    
}




  
