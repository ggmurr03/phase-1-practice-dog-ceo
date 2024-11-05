console.log('%c HI', 'color: firebrick')


// on page load, fetches the images using the url above ⬆️
function fetchFunction() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then((data)=>{
     data.message.forEach((element)=>{
         let img = document.createElement("img")
         let div = document.getElementById("dog-image-container")
         img.src = `${element}`
         div.appendChild(img)
         console.log(div)
     })
    })
} 

// fetchFunction()

document.addEventListener("DOMContentLoaded", fetchFunction)
// // parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array
function fetchBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then((data)=>{
     Object.entries(data.message).forEach((element)=>{
         let li = document.createElement("li")
         let ul = document.getElementById("dog-breeds")
         li.textContent = `${element}`
         ul.appendChild(li)
         console.log(li)
         li.addEventListener("click", event=>{
            li.style.color = "red"
         })
     })
    })
} 

// fetchFunction()

document.addEventListener("DOMContentLoaded", fetchBreeds)

// // Code that doesnt work from Ada Function to filter and populate the dropdown
// function filterBreeds() {
//     fetch("https://dog.ceo/api/breeds/list/all")
//         .then(resp => resp.json())
//         .then(data => {
//             const dropDown = document.getElementById("breed-dropdown");
//             const filterInput = document.getElementById("filter-input"); // Assume you have an input field with this ID

//             // Function to populate dropdown based on filtered breeds
//             const populateDropdown = (breeds) => {
//                 dropDown.innerHTML = ""; // Clear existing options
//                 breeds.forEach(breed => {
//                     const option = document.createElement('option');
//                     option.value = breed;
//                     option.innerText = breed;
//                     dropDown.appendChild(option);
//                 });
//             };

//             // Event listener for the filter input
//             filterInput.addEventListener("input", event => {
//                 const filterLetter = event.target.value.toLowerCase();
//                 const filteredBreeds = Object.keys(data.message).filter(breed => breed.startsWith(filterLetter));
//                 populateDropdown(filteredBreeds);
//             });

//             // Listen for changes on the dropdown
//             dropDown.addEventListener("change", event => {
//                 const selectedBreed = event.target.value;
//                 displaySelectedBreed(selectedBreed);
//             });
//         });
// }

// // Function to display the selected breed
// function displaySelectedBreed(breed) {
//     const displayArea = document.getElementById('breed-display');
//     displayArea.innerText = `Selected breed: ${breed}`;
// }

// document.addEventListener("DOMContentLoaded", filterBreeds);
