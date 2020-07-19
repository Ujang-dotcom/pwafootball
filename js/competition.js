function competition(data) {
	let dataHtml = '';
          let match = data.matches;
          let maxData = match.length;
          let matchday = maxData - 6
          //Membatasi maksimal 15 pertandingan saja
          
          for (let i = matchday; i < maxData; i++) {
            dataHtml += `
              <div class="col l4 m6 s12">
                <div class="card">
                <div class="col s12 purple darken-4">
                  <center><img src="./img/pl-white.png" onerror="this.onerror=null;this.src='./img/pl-white.png';" width="60" alt"premiere-league"><h5 class="white-text">Premiere League</h5></center>
                </div>
                  <div class="card-content black-text">
                    <br><center><h2><b>${match[i].score.fullTime.homeTeam} - ${match[i].score.fullTime.awayTeam}</b><h2></center>
                    <div class="row">
                      <div class="col s5  right-align">
                        <p class="truncate"><b>${match[i].homeTeam.name}</b><p></center>
                      </div>
                      <div class="col s2">
                        <center><p><b> vs </b><p></center>
                      </div>
                      <div class="col s5 left-align">
                        <p class="truncate"><b>${match[i].awayTeam.name}</b><p></center>
                      </div>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                      <p>Time : <b>${match[i].utcDate}</b></p>
                    </div>
                    <div class="divider"></div>
                    <div class="section">                  
                      <p>Matchday : <b>${match[i].matchday}</b></p>
                    </div>
                    <div class="divider"></div>
                    <div class="section">                   
                      <p>Status : <b>${match[i].status}</b></p>
                    </div>
                  </div>
                </div>
              </div>
          `
      }
      // Sisipkan komponen card ke dalam elemen
      document.getElementById("competitions").innerHTML = dataHtml;
      // Sisipkan komponen card ke dalam elemen
          console.dir("urlCompetition " + data);
}