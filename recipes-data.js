
const recipeDatabase = {
    happy: [
        {
            id: 'happy1',
            name: "Spicy Thai Noodles",
            description: "A vibrant and energetic dish perfect for good moods!",
            image: "https://images.unsplash.com/photo-1617093727343-374698b1c1d8?w=800",
            ingredients: [
                "200g rice noodles",
                "2 red chilies",
                "1 bell pepper",
                "3 cloves garlic",
                "3 tbsp soy sauce"
            ],
            instructions: [
                "Cook noodles according to package instructions",
                "Stir-fry vegetables and chilies",
                "Mix with sauce and serve hot"
            ],
            nutrition: {
                calories: 380,
                protein: "8g",
                carbs: "68g",
                fat: "8g"
            },
            prepTime: "quick",
            dietary: ["vegetarian"],
            difficulty: "easy"
        },
        // Add more happy recipes...
    ],
    sad: [
        {
            id: 'sad1',
            name: "Comfort Mac and Cheese",
            description: "A warm hug in a bowl to lift your spirits",
            image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=800",
            ingredients: [
                "400g macaroni",
                "200g cheddar cheese",
                "2 cups milk",
                "30g butter",
                "breadcrumbs"
            ],
            instructions: [
                "Cook macaroni until al dente",
                "Prepare cheese sauce with butter, milk, and cheese",
                "Combine pasta and sauce",
                "Top with breadcrumbs",
                "Bake at 350°F for 20 minutes"
            ],
            nutrition: {
                calories: 450,
                protein: "12g",
                carbs: "48g",
                fat: "22g"
            },
            prepTime: "medium",
            dietary: ["vegetarian"],
            difficulty: "medium"
        },
        // Add more sad recipes...
    ],
    // Add more moods and recipes...
};

const nutritionTips = {
    happy: "Spicy foods can trigger endorphin release!",
    sad: "Foods rich in omega-3 can help improve mood",
    stressed: "Magnesium-rich foods help reduce stress",
    energetic: "Complex carbs provide sustained energy",
    tired: "Protein-rich foods can help boost energy levels"
};
