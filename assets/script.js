const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const countSlide = slides.length;

//Function to add dot(s)
function addDot(count) {
	
	for (i = 1; i <= count; i++) { 
		//We append new class "dot" in class "dots"
		document.querySelector('.dots').innerHTML += '<div class="dot" data-id="'+i+'"></div>';
	}
}

//We call the function and select the first dot when the page loads
window.onload = function() {

	addDot(countSlide);
	let firstDotClass = document.querySelector(".dot");
	firstDotClass.classList.add("dot_selected");

	setInterval(showNext, 4000);
}

const prevButton = document.querySelector(".arrow_left_img");
const nextButton = document.querySelector(".arrow_right_img");

//Function to show the previous image
function showPrev() {

	let actualDot = document.querySelector(".dot_selected");
	let dataIdActualDot = parseInt(actualDot.dataset.id);

	
	//We check if we are in the first dot if yes we go to last dot
	if(dataIdActualDot == 1){

        //We we remove selected dot from class
		actualDot.classList.remove("dot_selected");
	
        //We select last dot and then add a new class to select it
		var prevDot = document.querySelectorAll(".dot")[countSlide-1];
		prevDot.classList.add("dot_selected");


	}else{
	
	    //We select the previous sibling element of actual dot
		var prevDot = actualDot.previousElementSibling;
	
	    //We add a new class for previous dot and  remove the class of actual dot
		prevDot.classList.add("dot_selected");
	    actualDot.classList.remove("dot_selected");

	}

	//We store the data id of previous dot in a variable
	let dataIdPrevDot = parseInt(prevDot.dataset.id);

	//We store data in variables and construct the image path
	let imagePath = "./assets/images/slideshow/"+slides[dataIdPrevDot-1].image;
	let tagline = slides[dataIdPrevDot-1].tagLine;

	//We select the image class the we change it
	let img = document.querySelector(".banner-img");
	img.setAttribute("src", imagePath);

	//We insert the html and change the paragraphe
	document.querySelector('#banner p').innerHTML = tagline;

}


//Function to show the next image
function showNext() {
	
	let actualDot = document.querySelector(".dot_selected");
	let dataIdActualDot = parseInt(actualDot.dataset.id);
	
	//We check if we are in the last dot if yes we  go to first dot
	if(dataIdActualDot == countSlide){

        //We remove selected dot from class
		actualDot.classList.remove("dot_selected");
	
        //We select first dot and then add a new class to select it
		var nextDot = document.querySelector(".dot");
		nextDot.classList.add("dot_selected");

	}else{
	
		//We select the next sibling element of actual dot
	    var nextDot = actualDot.nextElementSibling;
	
	    //We add a new class for next dot and remove the class of actual dot
		nextDot.classList.add("dot_selected");
	    actualDot.classList.remove("dot_selected");

	}

    //We store the data id of next dot in a variable
	let dataIdNextDot = parseInt(nextDot.dataset.id);

	//We store data in variables and construct the image path
	let imagePath = "./assets/images/slideshow/"+slides[dataIdNextDot-1].image;
	let tagline = slides[dataIdNextDot-1].tagLine;

	//We select the image class the we change it
	let img = document.querySelector(".banner-img");
	img.setAttribute("src", imagePath);

	//We insert the html and change the paragraph
	document.querySelector('#banner p').innerHTML = tagline;
}

//Next event click button
nextButton.addEventListener("click", () => {

    showNext();

});

//Previous event click button
prevButton.addEventListener("click", () => {

	showPrev();

});