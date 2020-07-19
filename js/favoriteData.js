
function resultPlayerFav(data) {
    let dataPlayerFavHtml = ''
    data.forEach(function (player) {
        //console.dir("cek nama pemain: " + player.name);

        dataPlayerFavHtml += `
         <div class="col l6 m12 s12">
          <div class="card">
            <div class="card-content grey lighten-4">        
              <h5><a href="./pages/detail-pages/detailplayer.html?id=${player.id}">${player.name}</h5></a>    
            </div>  
          </div>
        </div>        
        `
    });

    // Sisipkan komponen card ke dalam elemen dengan id divFavorit
    document.getElementById("divFavoritPlayer").innerHTML = dataPlayerFavHtml;
}
function resultTeamFav(data) {

    let dataTeamFavHtml = ''
    data.forEach(function (team) {
        // Objek JavaScript dari response.json() masuk lewat letiabel data.
        console.dir("setupTeamFavHtml: " + team.name);

        dataTeamFavHtml += `
        <div class="col l6 m12 s12">
          <div class="card">
            <div class="card-content">
              <ul class="collection ">
                <li class="collection-item avatar grey lighten-4">
                  <img src="${team.crestUrl}" alt="teamimage" class="circle" style="float:left;width:45px;height:60px;margin-right:40px">
                  <h5><a href="./pages/detail-pages/detailtim.html?id=${team.id}">${team.name}</h5></a> 
                </li>  
              </ul>
            </div>  
          </div>
        </div> 
          
        `
    });

    // Sisipkan komponen card ke dalam elemen dengan id divFavorit
    document.getElementById("divFavoritTeam").innerHTML = dataTeamFavHtml;
}