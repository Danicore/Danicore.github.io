const menu = document.getElementById("menu");
//const gnav = document.getElementById("great-nav");
const dropdown = document.getElementById("dropdown");
const portrait = document.getElementById("portrait");

const getIt = () => {
	dropdown.classList.add("block");
}

const dontGetIt = () => {
	dropdown.classList.remove("block");
}

menu.onclick = getIt;

if (dropdown.style.display === "block") {
	document.onclick = dontGetIt;
}

// else {
// 	dontGetIt;
// }

//menu.onclick = getIt;

//dropdown.style.display = "none"

//var change = document.onclick;

//menu.onmouseover = getIt;
//menu.onmouseout = dontGetIt;
//window.onclick = dontGetIt;