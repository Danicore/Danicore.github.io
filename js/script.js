const menu = document.getElementById("menu");
const gnav = document.getElementById("great-nav");
const dropdown = document.getElementById("dropdown");
const portrait = document.getElementById("portrait");

const getIt = () => {
	dropdown.style.display = "block";
}

const dontGetIt = () => {
	dropdown.style.display = "none";
}

menu.onclick = getIt;
//menu.onmouseover = getIt;
//menu.onmouseout = dontGetIt;
portrait.onclick = dontGetIt;