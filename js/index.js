document
  .getElementById("formButton")
  .addEventListener("click", onClickFormCountry);

function onClickFormCountry() {
  let countryName = document.getElementById("formCountryName").value;

  getDataCountry(countryName);
}

function getDataCountry(countryName) {
  let settings = {
    async: true,
    crossDomain: true,
    url:
      "https://covid-19-data.p.rapidapi.com/country?format=json&name=" +
      countryName,
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "dbc1dfd886msh5af1fd9bd5dca23p1bda55jsnce6712877c9e",
    },
  };

  $.ajax(settings).done(function (response) {
    if (response[0].country) {
      let obj = JSON.parse(JSON.stringify(response));

      showContainerResults(obj);
    }
  });
}

function showContainerResults(obj) {
  let results = obj[0];

  let countryName = results.country;
  let confirmedCases = results.confirmed;
  let recoveredPeople = results.recovered;
  let criticalCases = results.critical;
  let deaths = results.deaths;
  let lastUpdate = new Date(results.lastUpdate);

  let formatedUpdateDate =
    lastUpdate.getDay() +
    "/" +
    lastUpdate.getMonth() +
    "/" +
    lastUpdate.getFullYear() +
    " at " +
    lastUpdate.getHours() +
    ":" +
    lastUpdate.getMinutes();

  document.getElementById("containerResults").style.visibility = "visible";

  document.getElementById("countryName").innerText = countryName;
  document.getElementById("confirmedCases").innerText = confirmedCases;
  document.getElementById("recovered").innerText = recoveredPeople;
  document.getElementById("criticalCases").innerText = criticalCases;
  document.getElementById("totalDeaths").innerText = deaths;
  document.getElementById("lastUpdate").innerText = formatedUpdateDate;
}
