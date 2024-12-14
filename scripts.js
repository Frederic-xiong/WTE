let currentMood = '';
let currentRecipeIndex = 0;

function showMoodRecipe(mood) {
    // Update current mood and reset recipe index
    currentMood = mood;
    currentRecipeIndex = 0;
    
    // Update button states
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`button[onclick="showMoodRecipe('${mood}')"]`).classList.add('active');
    
    // Show recipe
    showRecipe();
    
    // Show the "next recipe" button if there are multiple recipes
    const nextButton = document.getElementById('nextRecipe');
    if (recipeDatabase[mood].length > 1) {
        nextButton.style.display = 'block';
    } else {
        nextButton.style.display = 'none';
    }
}

function showNextRecipe() {
    currentRecipeIndex++;
    if (currentRecipeIndex >= recipeDatabase[currentMood].length) {
        currentRecipeIndex = 0;
    }
    showRecipe();
}

function showRecipe() {
    const recipe = recipeDatabase[currentMood][currentRecipeIndex];
    const resultsDiv = document.getElementById('recipe-results');
    
    resultsDiv.innerHTML = `
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

    // Scroll to the recipe
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}
