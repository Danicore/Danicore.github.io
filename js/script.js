const menu = document.getElementById("menu");
const gnav = document.getElementById("great-nav");
const dropdown = document.getElementById("dropdown");

const getIt = () => {
	dropdown.style.display = "block";
}

const dontGetIt = () => {
	dropdown.style.display = "none";
}

menu.onmouseover = getIt;
menu.onmouseout = dontGetIt;

/*if (gnav.onmouseover) {
	dropdown.style.display = "block";
}*/
/*else {
	dropdown.style.display = "block";
}*/

/*input[type="radio"]:checked ~ .tick,
input[type="radio"]:checked ~ .cross {
  visibility: visible;*/