let currentMood = '';
let currentRecipeIndex = 0;

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const moodButtons = document.querySelectorAll('.mood-btn');
    const generateButton = document.getElementById('generateButton');
    const nextRecipeButton = document.getElementById('nextRecipe');

    // Mood button listeners
    moodButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentMood = this.getAttribute('data-mood');
            // Reset any previously selected buttons
            moodButtons.forEach(btn => btn.classList.remove('active'));
            // Activate current button
            this.classList.add('active');
            // Enable generate button
            generateButton.disabled = false;
            // Hide any previous recipe
            document.getElementById('recipe-results').innerHTML = '';
            nextRecipeButton.style.display = 'none';
        });
    });

    // Generate button listener
    generateButton.addEventListener('click', function() {
        currentRecipeIndex = 0;
        showRecipe();
    });

    // Next recipe button listener
    nextRecipeButton.addEventListener('click', function() {
        currentRecipeIndex++;
        showRecipe();
    });
});

function showRecipe() {
    const recipes = recipeDatabase[currentMood];
    if (!recipes || currentRecipeIndex >= recipes.length) {
        currentRecipeIndex = 0; // Reset to start if we've shown all recipes
    }

    const recipe = recipes[currentRecipeIndex];
    const resultsDiv = document.getElementById('recipe-results');
    
    const recipeHTML = `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" 
                 onerror="this.src='https://via.placeholder.com/400x300?text=Delicious+Recipe'">
            <div class="recipe-info">
                <span class="mood-label">${currentMood.toUpperCase()}</span>
                <h3>${recipe.name}</h3>
                <p class="description">${recipe.description}</p>
                
                <div class="recipe-details">
                    <h4>Ingredients:</h4>
                    <ul>
                        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                    </ul>
                    
                    <h4>Instructions:</h4>
                    <ol>
                        ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                    </ol>
                    
                    <div class="nutrition-info">
                        <h4>Nutrition Information:</h4>
                        <p>Calories: ${recipe.nutrition.calories}</p>
                        <p>Protein: ${recipe.nutrition.protein}</p>
                        <p>Carbs: ${recipe.nutrition.carbs}</p>
                        <p>Fat: ${recipe.nutrition.fat}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    resultsDiv.innerHTML = recipeHTML;
    document.getElementById('nextRecipe').style.display = 'block';
}
