// Array from[ES6 Feature],
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// get the slider length
var sliderCount = sliderImages.length;

// set the current slider
var currentSlider = 1;

//slider Number element
var sliderNumber = document.getElementById("slide-number");


//select previous and next button
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev")

// Add event listener to next and previous - two ways to add an event listener -
nextButton.addEventListener("click", next);
prevButton.onclick = prev;


// create a ul
var paginationElement = document.createElement("ul");

//Add an id to the ul
paginationElement.setAttribute("id", "pagination-ul");

//create a list item based on the length of the slider
for (var i = 1; i <= sliderCount; i++) {

  //create the li inside the ul
  var paginationElementChild = document.createElement("li");

  //Add a custom attribute
  paginationElementChild.setAttribute("data-slide", i);

  // set the text inslide the li
  paginationElementChild.appendChild(document.createTextNode(i));

  //Apend the item to the parent ul
  paginationElement.appendChild(paginationElementChild);

}

//Add the ul element to the parent
document.getElementById("indicators").appendChild(paginationElement);

//Select the new pagination ul created
var paginationCreatedUl = document.getElementById("pagination-ul");

// Array from[ES6 Feature],
var paginationBulltes = Array.from(document.querySelectorAll("#pagination-ul li"));



// function next Slider
function next() {
  if (nextButton.classList.contains("disabled")) {} else {
    currentSlider++;
    theChecker();
  }


}


// function previous Slider
function prev() {
  if (prevButton.classList.contains("disabled")) {} else {
    currentSlider--;
    theChecker();
  }

}

//function bullets
//Add an event listener to the li
paginationBulltes.forEach(li => {
  li.addEventListener("click", function(e) {

    currentSlider = e.target.dataset.slide;
    theChecker();
    
  });
})


// function check
function theChecker() {
  //Add the number of the slider
  sliderNumber.textContent = "slide #" + currentSlider + " of " + sliderCount;

  //call remove function
  removeAll();

  // Add the class active on current Slide
  sliderImages[currentSlider - 1].classList.add("active");

  // Add the class active to the li of the current slide
  paginationCreatedUl.children[currentSlider - 1].classList.add("active");

  //check if the current slide is the first
  if (currentSlider == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  //check if the current slide is the last
  if (currentSlider == sliderCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

theChecker();

//Remove all active from all sliderImages
function removeAll() {

  // loop through pictures
  sliderImages.forEach(slide => {
    slide.classList.remove("active");
  })

  //loop through the li
  paginationBulltes.forEach(li => {
    li.classList.remove("active");
  })

}
