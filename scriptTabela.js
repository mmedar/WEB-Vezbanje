$(document).ready(function () {
    showEeastConferenceTeams();

    $("#easternConference").click(function(){
        showEeastConferenceTeams();
        $("#westernConference").removeClass("btn-primary", "active");
        $("#easternConference").addClass("btn-primary", "active");
    });
    $("#westernConference").click(function(){
        showWestConferenceTeams();
        $("#easternConference").removeClass("btn-primary", "active");
        $("#westernConference").addClass("btn-primary", "active");
    });
});

function showEeastConferenceTeams(){
    fetch('db.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            var tableData = '<table class="table thead-light table-hover">' + 
                            '<tr><th></th><th>P</th><th>W</th><th>L</th><th>GB</th><th>Str</th><th>Poslednjih 5</th><th>Pct</th></tr>';
            var nbaTable = document.getElementById("nbaTable");
            myJson.teamsEast.sort((a,b) => (a.winPercent < b.winPercent) ? 1 : ((b.winPercent < a.winPercent) ? -1 : 0));
            let counter = 1;
            $.each(myJson.teamsEast, function(index, nbaTeam){
            tableData += `<tr><td class="font-weight-bold"><span class="h5 font-weight-bold"> styledCounter(counter) </span>  
                <img src=" ${nbaTeam.logo} " class="img=fluid" alt="...">
                  ${nbaTeam.name} </td><td> ${nbaTeam.played} </td><td>
                ${nbaTeam.wins} </td><td> ${nbaTeam.losses} </td><td>
                ${nbaTeam.gamesBehind} </td><td>
                ${nbaTeam.streak} </td><td> ${lastFiveStyled(nbaTeam.lastfive)} </td><td>
                ${nbaTeam.winPercent} </td></tr>`
                counter++;
            });
            nbaTable.innerHTML ='';
            nbaTable.innerHTML = tableData;
        });
}

function showWestConferenceTeams(){
    fetch('db.json')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            var tableData = '<table class="table thead-light table-hover">' + 
                            '<tr><th></th><th>P</th><th>W</th><th>L</th><th>GB</th><th>Str</th><th>Poslednjih 5</th><th>Pct</th></tr>';
            var nbaTable = document.getElementById("nbaTable");
            myJson.teamsEast.sort((a,b) => (a.winPercent < b.winPercent) ? 1 : ((b.winPercent < a.winPercent) ? -1 : 0));
            let counter = 1;
            $.each(myJson.teamsEast, function(index, nbaTeam){
            tableData += `<tr><td class="font-weight-bold"><span class="h5 font-weight-bold"> styledCounter(counter) </span>  
                <img src=" ${nbaTeam.logo} " class="img=fluid" alt="...">
                  ${nbaTeam.name} </td><td> ${nbaTeam.played} </td><td>
                ${nbaTeam.wins} </td><td> ${nbaTeam.losses} </td><td>
                ${nbaTeam.gamesBehind} </td><td>
                ${nbaTeam.streak} </td><td> ${lastFiveStyled(nbaTeam.lastfive)} </td><td>
                ${nbaTeam.winPercent} </td></tr>`
                counter++;
            });
            nbaTable.innerHTML ='';
            nbaTable.innerHTML = tableData;
        });
}

function styledCounter(counter) {
    return counter <=8 ? '<div class="WinLost bg-success text-white"><span>'+counter+'</span></div>' : 
    '<div class="WinLost bg-transparent"><span>'+counter+'</span></div>';
}

function lastFiveStyled(lastFive){
    winStreak = '';
    for(i=0; i<lastFive.length; i++){
        if(lastFive[i] == "W"){
            winStreak += '<div class="WinLost bg-success text-white">W</span></div>';
        }
        else{
            winStreak += '<div class="WinLost bg-danger text-white"><span>L</span></div>';
        }
    }
    return winStreak;
}
