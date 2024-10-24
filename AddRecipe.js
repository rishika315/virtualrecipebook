import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AddRecipe.css';

const AddRecipe = () => {
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [link, setLink] = useState(''); // Add this state

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (recipeName && description && imageUrl && link) { // Include link in validation
            const newRecipe = { title: recipeName, description, imageUrl, link }; // Include link
            try {
                const response = await axios.post('http://localhost:5000/recipes', newRecipe);
                console.log('Recipe added:', response.data);
                // Clear form fields
                setRecipeName('');
                setDescription('');
                setImageUrl('');
                setLink(''); // Clear link field
            } catch (error) {
                console.error('Error adding recipe:', error);
            }
        }
    };

    return (
        <div className="add-recipe-page">
            <h1>Add a New Recipe</h1>
            <p>Enter the details of your new recipe below:</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Recipe Name"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="Recipe Link" // Add link input
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                />
                <button type="submit">Add Recipe</button>
            </form>
            <div className="spacing"></div>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default AddRecipe;
