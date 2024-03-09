const isLogged = localStorage.getItem("isLogged");
if (isLogged != "tak") {
  window.location.href = "index.html";
}

const $logoutBtn = document.getElementById("logout");
const $countryInput = document.getElementById("country_input");
const $getCountryBtn = document.getElementById("get_Country_Btn");
const $countryName = document.getElementById("country_name");
const $countryPopulation = document.getElementById("country_population");
const $countryCapital = document.getElementById("country_capital");
const $countryFlag = document.getElementById("country_flag");

$logoutBtn.addEventListener("click", () => {
  localStorage.setItem("isLogged", "nie");
  window.location.href = "index.html";
});

$getCountryBtn.addEventListener("click", () => {
  const countryName = $countryInput.value;
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      const country = response[0];

      $countryName.innerText = country.name.official;
      $countryPopulation.innerText = country.population;
      $countryCapital.innerText = country.capital[0];
      $countryFlag.innerText = country.flag;
    });
});
