const recipeDatabase = {
    happy: [
        {
            name: "Spicy Thai Noodles",
            description: "A vibrant and energetic dish perfect for good moods!",
            ingredients: [
                "Rice noodles",
                "Red chilies",
                "Bell peppers",
                "Garlic",
                "Soy sauce"
            ],
            instructions: "1. Cook noodles according to package instructions\n2. Stir-fry vegetables and chilies\n3. Mix with sauce and serve hot"
        },
        {
            name: "Colorful Summer Salad",
            description: "Fresh and bright, just like your mood!",
            ingredients: [
                "Mixed greens",
                "Mango",
                "Avocado",
                "Cherry tomatoes",
                "Lime dressing"
            ],
            instructions: "1. Wash and chop all ingredients\n2. Mix in a bowl\n3. Add dressing and serve"
        }
    ],
    sad: [
        {
            name: "Comfort Mac and Cheese",
            description: "A warm hug in a bowl to lift your spirits",
            ingredients: [
                "Macaroni",
                "Cheddar cheese",
                "Milk",
                "Butter",
                "Breadcrumbs"
            ],
            instructions: "1. Cook macaroni\n2. Make cheese sauce\n3. Combine and bake until golden"
        },
        {
            name: "Chocolate Chip Cookies",
            description: "Classic comfort cookies to brighten your day",
            ingredients: [
                "Flour",
                "Butter",
                "Chocolate chips",
                "Sugar",
                "Eggs"
            ],
            instructions: "1. Mix ingredients\n2. Form cookies\n3. Bake at 350°F for 12 minutes"
        }
    ],
    stressed: [
        {
            name: "Calming Chamomile Smoothie",
            description: "A soothing blend to help you relax",
            ingredients: [
                "Banana",
                "Chamomile tea",
                "Honey",
                "Yogurt",
                "Vanilla"
            ],
            instructions: "1. Brew tea and cool\n2. Blend all ingredients\n3. Serve chilled"
        }
    ],
    energetic: [
        {
            name: "Rainbow Protein Bowl",
            description: "A nutritious bowl to match your high energy!",
            ingredients: [
                "Quinoa",
                "Mixed vegetables",
                "Chickpeas",
                "Avocado",
                "Tahini dressing"
            ],
            instructions: "1. Cook quinoa\n2. Roast vegetables\n3. Assemble bowl with all ingredients"
        }
    ],
    tired: [
        {
            name: "Energy-Boosting Breakfast Bowl",
            description: "A perfect pick-me-up when you're feeling low on energy",
            ingredients: [
                "Oats",
                "Banana",
                "Chia seeds",
                "Almond milk",
                "Honey"
            ],
            instructions: "1. Mix oats with almond milk\n2. Add toppings\n3. Let sit for 5 minutes and enjoy"
        }
    ]
};

function selectMood(mood) {
    const recipes = recipeDatabase[mood];
    const resultsDiv = document.getElementById('recipe-results');
    resultsDiv.innerHTML = ''; // Clear previous results

    recipes.forEach(recipe => {
        const recipeCard = `
            <div class="recipe-card">
                <span class="mood-label">${mood.toUpperCase()}</span>
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <h4>Ingredients:</h4>
                <ul>
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
                <h4>Instructions:</h4>
                <p class="recipe-instructions">${recipe.instructions}</p>
            </div>
        `;
        resultsDiv.innerHTML += recipeCard;
    });
}
