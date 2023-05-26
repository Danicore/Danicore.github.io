const menu = document.getElementById("menu");
//const gnav = document.getElementById("great-nav");
const dropdown = document.getElementById("dropdown");
const portrait = document.getElementById("portrait");

const getIt = () => {
	dropdown.classList.remove("block");
}

const dontGetIt = () => {
	dropdown.classList.add("block");
}

//const change = document.onclick;
menu.onclick = getIt;
document.onclick = dontGetIt;

if (menu.onclick === true) {
	getIt;
}

// else {
// 	dontGetIt;
// }

//menu.onclick = getIt;

//dropdown.style.display = "none"

//menu.onmouseover = getIt;
//menu.onmouseout = dontGetIt;
//window.onclick = dontGetIt;