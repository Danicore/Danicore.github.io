const menu = document.getElementById("menu");
//const gnav = document.getElementById("great-nav");
const dropdown = document.getElementById("dropdown");
//const portrait = document.getElementById("portrait");

// const getIt = () => {
// 	dropdown.classList.add("block");
// }

// const dontGetIt = () => {
// 	dropdown.classList.remove("block");
// }

// menu.onclick = getIt;

// if (dropdown.style.display === "block") {
// 	alert("apple");
// 	dontGetIt;
// }

// else {
// 	alert("orange");
// }

const getIt = (e) => {
  	const style = window.getComputedStyle(dropdown);

    console.log(style.display);

    if (style.display !== "block") {
        dropdown.classList.add("block");
        e.stopImmediatePropagation();
    }  
}

const dontGetIt = (e) => {
    const style = window.getComputedStyle(dropdown);
	
    if (style.display === "block") {
        dropdown.classList.remove("block");
        console.log("Remove Block");
        e.stopImmediatePropagation();
    }  
}

//document.body.addEventListener('click', dontGetIt);
document.onclick = dontGetIt;
menu.onclick = getIt;