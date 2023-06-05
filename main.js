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

    cookBtn.addEventListener('click', createRecipe);
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

function randomLoadingMessage() {
    const messages = [
        'Prepping the ingredients...',
        'Stove is heating up...',
        'Stirring ingredients in a bowl...',
        'Taking photos for Instagram...',
        'Choosing a ladle...',
        'Putting on a fancy apron...',
        'Washing my hands thoroughly...',
        'Peeling potatoes...',
        'Cleaning the countertop...'
    ];

    // Get the loading message HTML element
    const loadingMessage = document.querySelector('.loading-message');
    // Set its text to the first item in the messages array: 'Prepping the ingredients...'
    loadingMessage.innerText = messages[0];

    // Create an interval so every 2 seconds the loading message changes
    return setInterval(function () {
        // Generate a random number between 0 and the length of the messages array (9)
        const randIdx = Math.floor(Math.random() * messages.length);
        // Change the loading message to the string contained at that index in the messages array
        loadingMessage.innerText = messages[randIdx];
    }, 2000);
}

async function createRecipe() {
    let randomMessageInterval;
    randomMessageInterval = randomLoadingMessage();
    loading.classList.remove('hidden');
}

init();