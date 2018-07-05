const colors = [
    "blue",
    "green",
    "purple",
    "lime",
    "black",
    "red"
  ];

function changeTheme(position) {
  var themeName = "theme-";
  var selectedColors = colors[position];

  return themeName + selectedColors;
}

function loadColorIfPresent() {
  var savedColor = localStorage.getItem("satrioColorScheme");

  if (savedColor !== null) {
    document.body.className = changeTheme(savedColor);
  } else {
    initializeFirstColor();
  }
}

function initializeFirstColor() {
  if (typeof(Storage) !== undefined){
    localStorage.setItem("satrioColorScheme", 0);
  }
}

function updateColor(){
  var counter = localStorage.getItem("satrioColorScheme");
  var currentScheme = (counter == colors.length-1) ? 0 : parseInt(counter) + 1;

  document.body.className = changeTheme(currentScheme);
  localStorage.setItem("satrioColorScheme", currentScheme);
}

window.onload = loadColorIfPresent;

// document.addEventListener("DOMContentLoaded", function(){
//   var elem = document.getElementById("themeChange");
//   elem.addEventListener('click', function(){
//     updateColor();
//   });
// }, false);
