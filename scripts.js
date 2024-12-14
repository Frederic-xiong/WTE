let currentFilters = {
    dietary: [],
    prepTime: null,
    searchTerm: ''
};

function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    currentFilters.searchTerm = searchTerm;
    applyFilters();
}

function updateDietaryFilters() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    currentFilters.dietary = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    applyFilters();
}

function updatePrepTimeFilter() {
    const selected = document.querySelector('input[name="prep-time"]:checked');
    currentFilters.prepTime = selected ? selected.value : null;
    applyFilters();
}

function applyFilters() {
    const mood = document.querySelector('.mood-btn.active')?.getAttribute('data-mood');
    if (!mood) return;
    
    let recipes = recipeDatabase[mood];
    
    // Apply search filter
    if (currentFilters.searchTerm) {
        recipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(currentFilters.searchTerm) ||
            recipe.description.toLowerCase().includes(currentFilters.searchTerm)
        );
    }
    
    // Apply dietary filters
    if (currentFilters.dietary.length > 0) {
        recipes = recipes.filter(recipe => 
            currentFilters.dietary.every(diet => recipe.dietary.includes(diet))
        );
    }
    
    // Apply prep time filter
    if (currentFilters.prepTime) {
        recipes = recipes.filter(recipe => recipe.prepTime === currentFilters.prepTime);
    }
    
    displayRecipes(recipes, mood);
}

function selectMood(mood) {
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('data-mood', mood);
    });
    document.querySelector(`button[onclick="selectMood('${mood}')"]`).classList.add('active');
    applyFilters();
}

function displayRecipes(recipes, mood) {
    const resultsDiv = document.getElementById('recipe-results');
    resultsDiv.innerHTML = `
        <div class="mood-tip">
            <i class="fas fa-lightbulb"></i> ${nutritionTips[mood]}
        </div>
    `;

    recipes.forEach(recipe => {
        const recipeCard = `
            <div class="recipe-card" onclick="showRecipeDetails('${recipe.id}')">
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
                <div class="recipe-info">
                    <span class="mood-label">${mood.toUpperCase()}</span>
                    <span class="difficulty-badge difficulty-${recipe.difficulty}">${recipe.difficulty}</span>
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <div class="nutrition-info">
                        <span class="nutrition-item">🔥 ${recipe.nutrition.calories} cal</span>
                        <span class="nutrition-item">🥩 ${recipe.nutrition.protein}</span>
                        <span class="nutrition-item">🍚 ${recipe.nutrition.carbs}</span>
                    </div>
                </div>
            </div>
        `;
        resultsDiv.innerHTML += recipeCard;
    });
}

function showRecipeDetails(recipeId) {
    const recipe = findRecipeById(recipeId);
    if (!recipe) return;

    const modal = document.getElementById('recipeModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}" style="max-width: 100%; border-radius: 10px;">
        <h3>Ingredients</h3>
        <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
        <h3>Instructions</h3>
        <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol>
        <div class="nutrition-details">
            <h3>Nutrition Information</h3>
            <p>Calories: ${recipe.nutrition.calories}</p>
            <p>Protein: ${recipe.nutrition.protein}</p>
            <p>Carbs: ${recipe.nutrition.carbs}</p>
            <p>Fat: ${recipe.nutrition.fat}</p>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Event Listeners
document.querySelector('.close').onclick = function() {
    document.getElementById('recipeModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Add event listeners for filters
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateDietaryFilters);
});

document.querySelectorAll('input[name="prep-time"]').forEach(radio => {
    radio.addEventListener('change', updatePrepTimeFilter);
});

// Helper function to find recipe by ID
function findRecipeById(id) {
    for (const mood in recipeDatabase) {
        const recipe = recipeDatabase[mood].find(r => r.id === id);
        if (recipe) return recipe;
    }
    return null;
}
