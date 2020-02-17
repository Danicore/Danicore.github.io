const menu = document.getElementById("menu");
const gnav = document.getElementById("great-nav");

const getIt = () => {
	const dropdown = document.getElementById("dropdown");
	
	dropdown.style.display = "block";
}

const dontGetIt = () => {
	dropdown.style.display = "none";
}

gnav.onmouseover = getIt;
gnav.onmouseout = dontGetIt;