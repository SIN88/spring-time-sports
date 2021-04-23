
$.ajax({
    method: "GET",
    url: "https://www.balldontlie.io/api/v1/teams?page=1"
}).done(function (response) {
	console.log(response);
});

$.ajax({
    method: "GET",
    url: "http://data.nba.net/10s/prod/v1/20170218/scoreboard.json"
}).done(function (response) {
	console.log(response);
});

