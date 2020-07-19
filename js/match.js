function match(data) {
  let dataHtml = '';
          let match = data.matches;
          let max = match.length;

          
          if (match.length > 16) {
            max = 16;
          }
          for (let i = 0; i < max; i++) {
            dataHtml += `
            <div class="col s12 m6 l6">
              <div class="card">
                <div class="col s12 purple darken-4"><center><img src="./img/pl-white.png" width="60" onerror="this.onerror=null;this.src='./img/pl-white.png';" alt"premiere-league"><h5 class="white-text">Premiere League</h5></center></div>
                  <div class="card-content">
                    <div center-align>
                      <br>
                      <h5 class="center-align">Matchday: ${match[i].matchday}</h5>
                      <div class="center-align">Kick Off: ${convertUTCDate(new Date(match[i].utcDate))}</div>
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
      document.getElementById("divMatches").innerHTML = dataHtml;
      // Sisipkan komponen card ke dalam elemen
          document.getElementById("divMatches").innerHTML = dataHtml;
          console.dir("getMatch " + data);
}
