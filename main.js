// Loading component
const loading = document.querySelector('.loading');

// Modal component
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('.modal-image');
const modalContent = modal.querySelector('.modal-content');
const modalClose = modal.querySelector('.modal-close');
modalClose.addEventListener('click', function() {
    modal.classList.add('hidden');
});

const bowlSlots = document.querySelectorAll('.bowl-slot');
const cookBtn = document.querySelector('.cook-btn');

let bowl = []; // an array representing the ingredients we have selected
const bowlMaxSlots = bowlSlots.length; // so we know how many ingredients our bowl can hold

function init() {
    // Get all of the ingredient HTML elements
    const ingredients = document.querySelectorAll('.ingredient');

    ingredients.forEach((el) => {
        // Add some logic to each ingredient for when it gets clicked
        el.addEventListener('click', function () {
            // When the ingredient is clicked, run the addIngredient function using the value of el.innerText
            // which will either be a ? or an emoji
            addIngredient(el.innerText);
        });
    });
}

function addIngredient(ingredient) {
    if (bowl.length === bowlMaxSlots) {
        // Bowl is full, remove the first element before adding the new ingredient
        bowl.shift();
    }

    bowl.push(ingredient); // add the new ingredient to the bowl

    // Look at each of the 3 slots in the bowl
    bowlSlots.forEach(function (el, i) {
        // By default, the slot should be filled with a ?
        let ingredient = '?';

        // If an ingredient has been added to the bowl, use that emoji instead of the ?
        if (bowl[i]) {
            ingredient = bowl[i];
        }

        // Update the HTML element
        el.innerText = ingredient;
    });

    // When we have 3 ingredients selected, remove the "hidden" css class on the button so it appears on screen
    if(bowl.length === bowlMaxSlots) {
        cookBtn.classList.remove('hidden');
    }
}

init();