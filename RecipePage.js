// src/pages/RecipePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import RecipeCard from '../components/RecipeCard';
import '../App.css'; // Correct path to App.css

function RecipePage() {
    const [recipes, setRecipes] = useState([]); // State to store fetched recipes
    const [loading, setLoading] = useState(true); // State to manage loading status
    const [error, setError] = useState(null); // State to manage error messages

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/recipes'); // Fetch recipes from API
                setRecipes(response.data); // Update state with fetched recipes
            } catch (err) {
                setError('Error fetching recipes. Please try again later.'); // Handle errors
                console.error(err);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchRecipes(); // Call the fetch function
    }, []); // Empty dependency array to run on component mount

    // Show loading message while data is being fetched 
    if (loading) {
        return <div>Loading recipes...</div>;
    }

    // Show error message if there was a problem fetching data
    if (error) {
        return <div>{error}</div>;
    }

    // Render the list of recipes
    return (
        <div className="recipe-page">
            <h1>Check out more recipes</h1>
            <div className="recipe-list">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} /> // Render RecipeCard for each recipe
                ))}
            </div>
        </div>
    );
}

export default RecipePage;