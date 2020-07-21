function standings(data) {
  let updateInfoHtml = "";
	let liga = data.standings;
          $.each(liga, function (i, e) { 
            $.each(liga[i].table, function (index, club) { 
              $('#standing').append(`
                  <tr>
                    <td><center>`+ club.position +`</center></td>
                    <td>
                    <a href="./pages/detail-pages/detailtim.html?id=${club.team.id}">
                    <p class="hide-on-small-only">
                    <img class = "show-on-medium-and-up show-on-medium-and-down" src=${club.team.crestUrl} onerror="this.onerror=null;this.src='${club.team.crestUrl}';"  alt="logo club" style="float:left;width:22px;height:22px;margin-right:20px">
                    ${club.team.name}
                    </p>
                    <p class="hide-on-med-and-up">
                    <img src=${club.team.crestUrl} onerror="this.onerror=null;this.src='${club.team.crestUrl}';"  alt="logo club" style="float:left;width:22px;height:22px;margin-right:1px">
                    </p>
                    </a>
                    </td>
                    <td><center>`+ club.playedGames +`</center></td>
                    <td><center>`+ club.won +`</center></td>
                    <td><center>`+ club.draw +`</center></td>
                    <td><center>`+ club.lost +`</center></td>
                    <td><center>`+ club.goalsFor +`</center></td>
                    <td><center>`+ club.goalsAgainst +`</center></td>
                    <td><center>`+ club.goalDifference +`</center></td>
                    <td><center>`+ club.points +`</center></td>
                  </tr>
              `);
            });
          });

          updateInfoHtml += `  
           <center><img src="img/pl-white.png" onerror="this.onerror=null;this.src='img/pl-white.png';" width="60" alt="premiere-league"><h5 class="white-text">Premiere League</h5></center>
           <h5 class="white-text"><center>last update : ${convertUTCDate(new Date(data.competition.lastUpdated))}</center></h5>
        `;
          document.getElementById("last-update").innerHTML = updateInfoHtml;
          console.dir("getStanding " + data);
}