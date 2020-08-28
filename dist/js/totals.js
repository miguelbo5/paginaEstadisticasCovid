document.addEventListener("DOMContentLoaded", function () {
  var settingsTotalsRequest = {
    async: true,
    crossDomain: true,
    url: "https://covid-19-data.p.rapidapi.com/totals?format=json",
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "dbc1dfd886msh5af1fd9bd5dca23p1bda55jsnce6712877c9e",
    },
  };

  $.ajax(settingsTotalsRequest).done(function (response) {

    var obj = JSON.parse(JSON.stringify(response));

    let results = obj[0];

    loadResults(results);
  });
});

function loadResults(results) {
  let confirmedCases = results.confirmed;
  let criticalCases = results.critical;
  let totalDeaths = results.deaths;
  let recoveredPeople = results.recovered;
  let lastUpdate = new Date(results.lastUpdate);

  let formatedUpdateDate =
    lastUpdate.getDate() +
    "/" +
    (lastUpdate.getMonth() + 1) +
    "/" +
    lastUpdate.getFullYear() +
    " at " +
    lastUpdate.getHours() +
    ":" +
    lastUpdate.getMinutes();

  document.getElementById("confirmedCases").innerText = confirmedCases;
  document.getElementById("criticalCases").innerText = criticalCases;
  document.getElementById("totalDeaths").innerText = totalDeaths;
  document.getElementById("recoveredPeople").innerText = recoveredPeople;
  document.getElementById("lastUpdate").innerText = formatedUpdateDate;
}
