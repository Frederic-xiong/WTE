document.addEventListener('DOMContentLoaded', function() {
    const moodInput = document.getElementById('moodInput');
    const submitButton = document.getElementById('submitMood');
    const validMoods = ['happy', 'sad', 'stressed', 'energetic', 'tired'];
    
    function processEmotion(input) {
        // Convert input to lowercase and trim whitespace
        const cleanInput = input.toLowerCase().trim();
        
        // Simple emotion mapping
        const emotionMap = {
            // Happy variations
            'happy': 'happy',
            'joyful': 'happy',
            'excited': 'happy',
            'great': 'happy',
            'good': 'happy',
            
            // Sad variations
            'sad': 'sad',
            'down': 'sad',
            'depressed': 'sad',
            'blue': 'sad',
            'unhappy': 'sad',
            
            // Stressed variations
            'stressed': 'stressed',
            'anxious': 'stressed',
            'worried': 'stressed',
            'overwhelmed': 'stressed',
            'tense': 'stressed',
            
            // Energetic variations
            'energetic': 'energetic',
            'active': 'energetic',
            'energized': 'energetic',
            'motivated': 'energetic',
            'pumped': 'energetic',
            
            // Tired variations
            'tired': 'tired',
            'sleepy': 'tired',
            'exhausted': 'tired',
            'fatigued': 'tired',
            'drained': 'tired'
        };
        
        return emotionMap[cleanInput] || null;
    }

    function showRecipe(mood) {
        const recipes = recipeDatabase[mood];
        if (!recipes || recipes.length === 0) {
            document.getElementById('recipe-results').innerHTML = 
                '<p class="error-message">No recipes available for this mood.</p>';
            return;
        }

        const recipe = recipes[Math.floor(Math.random() * recipes.length)];
        
        document.getElementById('recipe-results').innerHTML = `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.name}"
                     onerror="this.src='https://via.placeholder.com/400x300?text=Recipe+Image'">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <h4>Ingredients:</h4>
                <ul>
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
                <h4>Instructions:</h4>
                <ol>
                    ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ol>
            </div>
        `;

        document.getElementById('recipe-results').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }

    function handleSubmit() {
        const userInput = moodInput.value;
        const processedMood = processEmotion(userInput);
        
        if (!processedMood) {
            document.getElementById('recipe-results').innerHTML = `
                <p class="error-message">
                    I don't recognize that emotion. Try one of these: happy, sad, stressed, energetic, tired
                </p>
            `;
            return;
        }
        
        showRecipe(processedMood);
    }

    // Event listeners
    submitButton.addEventListener('click', handleSubmit);
    moodInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });
});
