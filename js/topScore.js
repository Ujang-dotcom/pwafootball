function topScore(data) {
let topScoreHTML = "";
          data.scorers.forEach(function(result) {
            topScoreHTML += `
                  <div class="col s12 m6 l4">
                    <div class="card">
                      <div class="card-image">
                        <img src="./img/premiere-league.jpg" onerror="this.onerror=null;this.src='./img/premiere-league.jpg';">
                        <b><span class="card-title"><a class= "white-text" href="./pages/detail-pages/detailplayer.html?id=${result.player.id}">`+ result.player["name"] +`</span></b></a>
                      </div>
                      <div class="card-content">
                        <div class="row">
                          <div class="col l9 m8 s6">
                            <center><p>Team</p></center>
                          </div>
                          <div class="col l3 m4 s6">
                            <center><p>Total Goals</p></center>
                          </div>
                        </div>
                        <div class="divider"></div>
                        <br>
                        <div class="row">
                          <div class="col l9 m8 s6">
                             <center><p class ="truncate">`+ result.team["name"] +`</p></center>
                          </div>
                          <div class="col l3 m4 s6">
                             <center><p>`+ result.numberOfGoals +`</p></center>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
          });
          // Sisipkan komponen card ke dalam elemen dengan id #content
          document.getElementById("top-score").innerHTML = topScoreHTML;
          console.dir("getTopScore " + data);
}