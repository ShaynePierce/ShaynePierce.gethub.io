let temp = 40;
let wind = 5;
document.querySelector(".wind-speed").innerHTML = wind;
document.querySelector(".current-temp").innerHTML = temp;

if (temp < 50 && wind > 3)  {
  document.querySelector(".wind-chill").innerHTML = getWindChill(temp, wind);
} else {
  document.querySelector(".wind-chill").innerHTML = 'N/A';
}