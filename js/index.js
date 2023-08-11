let date = new Date()
  .toISOString()
  .replace(/T.*/, "")
  .split("-")
  .reverse()
  .join("-");

let d = document.getElementById("date");
d.innerHTML = date;

const timeE1 = document.getElementById("time");
const degree = document.querySelector("#degree");
const temptype = document.querySelector("#temp-type");
const convertButton = document.querySelector("#button");
const result = document.querySelector("#celcius_value");

setInterval(() => {
  const time = new Date();

  const hour = time.getHours();
  const minute = time.getMinutes();
  const hourIn12Format = hour >= 13 ? hour % 12 : hour;
  const ampm = hour > 12 ? "PM" : "AM";

  timeE1.innerHTML = hourIn12Format + ":" + minute + " " + ampm;
}, 1000);

window.addEventListener("load", () => {
  degree.value = "";
  result.innerHTML = "";
});

if (degree.value === "") {
  convertButton.setAttribute("disabled", "");
  setTimeout(() => {
    convertButton.removeAttribute("disabled");
  }, 4000);
}

convertButton.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelcius();
  convertButton.innerHTML =
    "<span class=icon><i class='fa fa-spinner fa-spin'></i> Converting...</span>";

  setTimeout(() => {
    convertButton.innerHTML = `<span>Conert</span>`;
  }, 1000);
});

function convertToCelcius() {
  let input_val = degree.value;

  setTimeout(() => {
    if (temptype.value === "Fahrenheit") {
      const FahrenTocel = (input_val - 32) * (5 / 9);
      result.innerHTML = `${FahrenTocel.toFixed(3)} &deg;C`;
    }

    if (temptype.value === "Kelvin") {
      const kelvinTocel = input_val - 273.15;
      result.innerHTML = `${kelvinTocel.toFixed(3)} &deg;C`;
    }
  }, 1200);
}

