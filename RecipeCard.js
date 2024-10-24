// src/components/RecipeCard.js
import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
    console.log(recipe); // Check the recipe object

    return (
        <div className="recipe-card">
            <img src={recipe.imageUrl} alt={recipe.title} /> {/* Change 'name' to 'title' */}
            <div className="recipe-info">
                <h3>{recipe.title}</h3> {/* Change 'name' to 'title' */}
                <p>{recipe.description}</p>
                <a href={recipe.link || '#'} target="_blank" rel="noopener noreferrer" className="recipe-link">
                    {recipe.link ? 'View Recipe' : 'No Link Available'} {/* Conditional link display */}
                </a>
            </div>
        </div>
    );
};

export default RecipeCard;
