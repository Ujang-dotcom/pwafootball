function dataMatch(data) {
  let dataMatchesHtml = '';
  let match = data.matches;
  let maxData = match.length;

  //Membatasi maksimal 15 pertandingan saja
  if (match.length > 15) {
    maxData = 15;
  }

  for (let i = 0; i < maxData; i++) {
    dataMatchesHtml += `
    <div class="col s12 m6 l6">
      <div class="card">
        <div class="card-content">
          <div center-align>
            <div class="right-align">
              <a class="red waves-effect waves-light btn" href="./detailmatch.html?id=${match[i].id}">Go Detail To Save</a>
            </div>
            <h5 class="center-align">Matchday: ${match[i].matchday}</h5>
            <div class="center-align">Kick Off: ${convertUTCDate(new Date(match[i].utcDate))}</div
            <div class="row" style="margin:20px">
              <div class="col s5 truncate right-align">
                <span class="blue-text text-darken-2">  ${match[i].homeTeam.name}</span>
              </div>
              <div class="col s2 ">
                VS
              </div>
              <div class="col s5 truncate left-align">
                <span class="blue-text text-darken-2">  ${match[i].awayTeam.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `
  }
  // Sisipkan komponen card ke dalam elemen
  document.getElementById("divMatches").innerHTML = dataMatchesHtml;
}

function dataDetailPlayer(data) {
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
}

function dataDetailTeam(data) {
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
}

