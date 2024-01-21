// 3. print all country names,region,sub region and populations

var xhr = new XMLHttpRequest();
var url = "https://restcountries.com/v3.1/all";
xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var countries = JSON.parse(xhr.responseText);   
    countries.forEach(function (country) {
      console.log("Country: " + country.name.common);
      console.log("Region: " + country.region);
      console.log("Subregion: " + country.subregion);
      console.log("Population: " + country.population);
      console.log("           ");      
    });
  }
};
xhr.send();