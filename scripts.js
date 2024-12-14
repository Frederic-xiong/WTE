// Global variables
let currentMood = '';

// Function to handle mood selection and display a recipe
function handleMoodClick(event) {
    const mood = event.target.getAttribute('data-mood');
    currentMood = mood;
    displayRecipe(mood);
}

// Function to display a random recipe for the selected mood
function displayRecipe(mood) {
    const recipes = recipeDatabase[mood];
    if (!recipes || recipes.length === 0) {
        document.getElementById('recipe-results').innerHTML = '<p>No recipes found for this mood.</p>';
        return;
    }

    // Pick a random recipe
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];

    // Generate recipe HTML
    const recipeHTML = `
        <div class="recipe-card">
            <img src="${randomRecipe.image}" alt="${randomRecipe.name}">
            <h3>${randomRecipe.name}</h3>
            <p>${randomRecipe.description}</p>
            <h4>Ingredients:</h4>
            <ul>
                ${randomRecipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h4>Instructions:</h4>
            <ol>
                ${randomRecipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;

    // Display the recipe
    document.getElementById('recipe-results').innerHTML = recipeHTML;
}

// Add event listeners to mood buttons
document.addEventListener('DOMContentLoaded', function () {
    const moodButtons = document.querySelectorAll('.mood-btn');
    moodButtons.forEach(button => {
        button.addEventListener('click', handleMoodClick);
    });
});
