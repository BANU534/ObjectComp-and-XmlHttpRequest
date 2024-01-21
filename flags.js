//2.Print Flags of all country from the given url

var xhr = new XMLHttpRequest();
var url = "https://restcountries.com/v3.1/all";
xhr.open("GET", url, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var countries = JSON.parse(xhr.responseText);   
    countries.forEach(function (country) {
      if (country.flags) {
        console.log("Country: " +country.name.common,"Flag: " +country.flags.svg);
      }
    });
  }
};
xhr.send();