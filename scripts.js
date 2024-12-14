// Global variables
let currentMood = '';
let currentFilters = {
    dietary: [],
    prepTime: null,
    searchTerm: ''
};

// Search functionality
function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    currentFilters.searchTerm = searchTerm;
    if (currentMood) {
        applyFilters(currentMood);
    }
}

// Mood selection
function selectMood(mood) {
    currentMood = mood;
    
    // Update active button state
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Get and filter recipes
    let recipes = recipeDatabase[mood] || [];
    applyFilters(mood);
}

// Filter application
function applyFilters(mood) {
    let recipes = recipeDatabase[mood] || [];
    
    // Apply search filter
    if (currentFilters.searchTerm) {
        recipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(currentFilters.searchTerm) ||
            recipe.description.toLowerCase().includes(currentFilters.searchTerm)
        );
    }
    
    displayRecipes(recipes, mood);
}

// Display recipes
function displayRecipes(recipes, mood) {
    const resultsDiv = document.getElementById('recipe-results');
    
    if (!recipes || recipes.length === 0) {
        resultsDiv.innerHTML = '<p>No recipes found for this mood and filters.</p>';
        return;
    }

    let htmlContent = '';
    
    recipes.forEach(recipe => {
        htmlContent += `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" onerror="this.src='https://via.placeholder.com/200x200?text=Recipe'">
                <div class="recipe-info">
                    <span class="mood-label">${mood.toUpperCase()}</span>
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                    <div class="nutrition-info">
                        <span class="nutrition-item">🔥 ${recipe.nutrition?.calories || 'N/A'} cal</span>
                        <span class="nutrition-item">🥩 ${recipe.nutrition?.protein || 'N/A'}</span>
                        <span class="nutrition-item">🍚 ${recipe.nutrition?.carbs || 'N/A'}</span>
                    </div>
                </div>
            </div>
        `;
    });

    resultsDiv.innerHTML = htmlContent;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Search input event listener
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', searchRecipes);
    }

    // Mood buttons event listeners
    document.querySelectorAll('.mood-btn').forEach(button => {
        button.addEventListener('click', function() {
            selectMood(this.getAttribute('data-mood'));
        });
    });
});
