const recipeDatabase = {
    happy: [
        // Previous happy recipes remain, adding new ones:
        {
            name: "Zingy Turkey Keema Curry",
            description: "A mood-lifting curry rich in tryptophan",
            image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
            ingredients: [
                "500g ground turkey",
                "2 cups peas",
                "Fresh ginger",
                "Curry spices",
                "Tomatoes",
                "Onions",
                "Fresh cilantro",
                "Basmati rice"
            ],
            instructions: [
                "Sauté onions and ginger",
                "Add turkey and brown well",
                "Mix in spices and tomatoes",
                "Simmer with peas",
                "Serve over rice with cilantro"
            ],
            nutrition: {
                calories: "420",
                protein: "32g",
                carbs: "38g",
                fat: "16g"
            }
        },
        {
            name: "Mediterranean Sunshine Bowl",
            description: "Bright flavors to match your sunny mood!",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
            ingredients: [
                "Quinoa",
                "Cherry tomatoes",
                "Cucumber",
                "Kalamata olives",
                "Feta cheese",
                "Extra virgin olive oil",
                "Fresh herbs"
            ],
            instructions: [
                "Cook quinoa and let cool",
                "Chop fresh vegetables",
                "Mix with olive oil and herbs",
                "Top with feta and olives",
                "Drizzle with extra olive oil"
            ],
            nutrition: {
                calories: "380",
                protein: "12g",
                carbs: "45g",
                fat: "22g"
            }
        }
    ],
    sad: [
        // Previous sad recipes remain, adding new ones:
        {
            name: "Omega-3 Rich Salmon Bowl",
            description: "A mood-boosting bowl of goodness",
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
            ingredients: [
                "Fresh salmon fillet",
                "Brown rice",
                "Avocado",
                "Seaweed",
                "Sesame seeds",
                "Soy sauce",
                "Ginger"
            ],
            instructions: [
                "Cook brown rice",
                "Pan-sear salmon",
                "Slice avocado",
                "Assemble bowl",
                "Top with sesame and seaweed"
            ],
            nutrition: {
                calories: "520",
                protein: "34g",
                carbs: "42g",
                fat: "28g"
            }
        },
        {
            name: "Dark Chocolate Banana Smoothie",
            description: "A sweet mood lifter with antioxidants",
            image: "https://images.unsplash.com/photo-1553787499-6f5f32966e76",
            ingredients: [
                "Dark chocolate",
                "Ripe bananas",
                "Greek yogurt",
                "Almond milk",
                "Honey",
                "Cinnamon"
            ],
            instructions: [
                "Blend all ingredients",
                "Add ice if desired",
                "Top with cocoa nibs",
                "Serve immediately"
            ],
            nutrition: {
                calories: "320",
                protein: "12g",
                carbs: "48g",
                fat: "14g"
            }
        }
    ],
    stressed: [
        // Previous stressed recipes remain, adding new ones:
        {
            name: "Calming Lavender Tea Cookies",
            description: "Soothing cookies perfect for relaxation",
            image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35",
            ingredients: [
                "Butter",
                "Sugar",
                "Flour",
                "Culinary lavender",
                "Vanilla extract",
                "Eggs",
                "Salt"
            ],
            instructions: [
                "Cream butter and sugar",
                "Add eggs and vanilla",
                "Mix in dry ingredients",
                "Shape and bake",
                "Dust with powdered sugar"
            ],
            nutrition: {
                calories: "180",
                protein: "2g",
                carbs: "24g",
                fat: "9g"
            }
        },
        {
            name: "Magnesium-Rich Green Smoothie",
            description: "A nutrient-packed stress buster",
            image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec",
            ingredients: [
                "Spinach",
                "Banana",
                "Almonds",
                "Pumpkin seeds",
                "Coconut water",
                "Dates"
            ],
            instructions: [
                "Blend all ingredients until smooth",
                "Add ice if desired",
                "Garnish with seeds",
                "Serve immediately"
            ],
            nutrition: {
                calories: "280",
                protein: "8g",
                carbs: "42g",
                fat: "12g"
            }
        }
    ],
    energetic: [
        // Adding more high-energy recipes
        {
            name: "Spicy Mexican Quinoa Bowl",
            description: "A protein-packed energizing meal",
            image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d",
            ingredients: [
                "Quinoa",
                "Black beans",
                "Corn",
                "Bell peppers",
                "Jalapeños",
                "Lime",
                "Cilantro"
            ],
            instructions: [
                "Cook quinoa",
                "Sauté vegetables",
                "Mix with beans and corn",
                "Add fresh herbs and lime",
                "Top with avocado"
            ],
            nutrition: {
                calories: "440",
                protein: "18g",
                carbs: "68g",
                fat: "14g"
            }
        }
    ],
    tired: [
        // Adding more energy-boosting recipes
        {
            name: "Coffee-Rubbed Steak Bowl",
            description: "A protein and iron-rich energy booster",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
            ingredients: [
                "Sirloin steak",
                "Ground coffee",
                "Brown rice",
                "Spinach",
                "Sweet potato",
                "Garlic"
            ],
            instructions: [
                "Rub steak with coffee and spices",
                "Grill to desired doneness",
                "Serve with rice and vegetables",
                "Add sautéed spinach"
            ],
            nutrition: {
                calories: "520",
                protein: "42g",
                carbs: "48g",
                fat: "22g"
            }
        },
        {
            name: "B-Vitamin Power Bowl",
            description: "Natural energy from whole grains and legumes",
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
            ingredients: [
                "Lentils",
                "Quinoa",
                "Roasted vegetables",
                "Eggs",
                "Tahini",
                "Fresh herbs"
            ],
            instructions: [
                "Cook lentils and quinoa",
                "Roast vegetables",
                "Poach eggs",
                "Assemble bowl",
                "Drizzle with tahini sauce"
            ],
            nutrition: {
                calories: "460",
                protein: "24g",
                carbs: "52g",
                fat: "18g"
            }
        }
    ]
};
