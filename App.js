// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import AddRecipe from './pages/AddRecipe';

function App() {
    return (
        <Router> 
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/recipe-list" element={<RecipePage />} />
                <Route path="/add-recipe" element={<AddRecipe />} />
            </Routes>
        </Router>
    );
}

export default App;