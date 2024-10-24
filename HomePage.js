// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            {/* Lavender margin */}
            <div className="lavender-margin"></div>

            {/* Orange rectangle */}
            <div className="top-rectangle"></div>

            {/* Header container */}
            <div className="header-container">
                <div className="logo">Virtual Recipe Book</div>
                <div className="navbar">
                    <span>HOME</span>
                    <span>ABOUT</span>
                    <span>RECIPES</span>
                    <span></span>
                </div>
            </div>

            <section className="hero" data-aos="fade-up">
                <h1>Welcome to the Virtual Recipe Book! <sup>™</sup></h1>
                <p>Discover delicious recipes and share your culinary adventures with others.</p>
                <Link to="/add-recipe" className="cta-button">Add a New Recipe</Link>
                <Link to="/recipe-list" className="cta-button">Click here for more recipes</Link>
            </section>

            <section className="info-container">
                <div className="info" data-aos="fade-up" style={{ backgroundColor: '#FFE9DA' }}>
                    <h2>About Us</h2>
                    <p>Our mission is to connect food lovers and inspire everyone to cook. Explore our collection of recipes and share your own!</p>
                </div>

                <div className="info" data-aos="fade-up" style={{ backgroundColor: '#FFE9DA' }}>
                    <h2>Food Lovers Unite!</h2>
                    <p>Join our community of passionate cooks and discover new flavors, cuisines, and cooking techniques.</p>
                </div>

                <div className="info" data-aos="fade-up" style={{ backgroundColor: '#FFE9DA' }}>
                    <h2>Share Your Recipes</h2>
                    <p>Submit your favorite recipes and help others discover the joy of cooking!</p>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="image-gallery">
                <h2>Explore Our Recipes</h2>
                <div className="gallery">
                    <a href="https://inspiredbycharm.com/the-best-apple-recipes-for-fall/" target="_blank" rel="noopener noreferrer">
                        <img src="https://bing.com/th?id=OSK.97aff6446213ed0b73967438b6f6bdfe" alt="Recipe 1" />
                    </a>
                    <a href="https://inspiredbycharm.com/favorite-fall-foods-fall-recipes/" target="_blank" rel="noopener noreferrer">
                        <img src="https://bing.com/th?id=OSK.4b9b0e50598e4f54d3a97c06279a8018" alt="Recipe 2" />
                    </a>
                    <a href="https://inspiredbycharm.com/favorite-fall-recipes/" target="_blank" rel="noopener noreferrer">
                        <img src="https://bing.com/th?id=OSK.5a51a913c503729019d769984b232d39" alt="Recipe 3" />
                    </a>
                    <a href="https://gardeninthekitchen.com/pasta-salad/" target="_blank" rel="noopener noreferrer">
                        <img src="https://bing.com/th?id=OSK.c20aa5511ca1c4c484e776f53326471b" alt="Recipe 4" />
                    </a>
                </div>
            </section>


            {/* Blog Description Section */}
            <section className="blog-description">
                <h2>Why Choose Our Virtual Recipe Book?</h2>
                <div className="features">
                    <div className="feature">
                        <h3>Share Your Recipes</h3>
                        <p>Submit your own creations and inspire others with your cooking adventures.</p>
                    </div>
                    <div className="feature">
                        <h3>Discover New Flavors</h3>
                        <p>Explore diverse recipes and learn about different cultures through their cuisines.</p>
                    </div>
                    <div className="feature">
                        <h3>Connect with Fellow Food Lovers</h3>
                        <p>Engage with other passionate cooks and exchange tips, tricks, and experiences.</p>
                    </div>
                    <div className="feature">
                        <h3>Get Started on Your Culinary Journey</h3>
                        <p>Join us today and embark on your culinary journey!</p>
                    </div>
                </div>
            </section>

                        {/* Art of Food Section */}
            <section className="art-of-food">
                <div className="art-container">
                    <img src="https://th.bing.com/th/id/OIP.0zsgg-jGo4C-aNVUC8z1UwHaHj?rs=1&pid=ImgDetMain" alt="Art of Food" className="art-image" /> {/* Replace with your chosen image */}
                    <div className="art-description">
                        <h2>The Art of Food</h2>
                        <p>Food is not just nourishment; it’s an expression of culture and creativity. Every dish tells a story and reflects the traditions and innovations of its origin. From the vibrant colors of fresh vegetables to the intricate techniques used in preparation, cooking is an art form that deserves appreciation. Join us in exploring the beauty and artistry that goes into every recipe, and unleash your inner chef!</p>
                    </div>
                </div>
            </section>

            {/* Halloween Recipes Section */}
            <section className="halloween-recipes">
                <h2>Halloween Recipes</h2>
                <div className="gallery">
                    <a href="https://www.awickedwhisk.com/halloween-cheesecake-bars-3/" target="_blank" rel="noopener noreferrer">
                        <img src="https://bing.com/th?id=OSK.44962b1efc562a3b83e9e633cbb32a8a" alt="Halloween Recipe 1" />
                    </a>
                    <a href="https://sallysbakingaddiction.com/easy-halloween-recipes/" target="_blank" rel="noopener noreferrer">
                        <img src="https://bing.com/th?id=OSK.d9b4c3c2e46b091658b343293f9ad3d7" alt="Halloween Recipe 2" />
                    </a>
                    <a href="https://kimspireddiy.com/halloween-monster-cookies-best-monster-eye-cookie-recipe-easy-edible-sugar-cookie-monster-eyes-party-food-desserts-snacks/" target="_blank" rel="noopener noreferrer">
                        <img src="https://bing.com/th?id=OSK.78f403aa4e1152fb505140814751122a" alt="Halloween Recipe 3" />
                    </a>
                    <a href="https://www.mybakingaddiction.com/halloween-chocolate-chip-cookies/" target="_blank" rel="noopener noreferrer">
                        <img src="https://bing.com/th?id=OSK.e212cef05a2e21cfdcf03e23ac3d7253" alt="Halloween Recipe 4" />
                    </a>
                    <a href="https://onelittleproject.com/rice-krispie-treat-pumpkins/" target="_blank" rel="noopener noreferrer">
                        <img src="https://bing.com/th?id=OSK.e69bd829242576bbdc9db01819aa8336" alt="Halloween Recipe 5" />
                    </a>
                    <a href="https://www.crazyforcrust.com/halloween-fudge/" target="_blank" rel="noopener noreferrer">
                        <img src="https://bing.com/th?id=OSK.a83911dacfecaceacb1045f666c9bd65" alt="Halloween Recipe 6" />
                    </a>

                </div>
            </section>



            {/* Newsletter Signup Section */}
            <section className="newsletter-signup">
                <h2>Sign Up for Our Email Newsletter</h2>
                <form>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Sign Up</button>
                </form>
            </section>

            {/* Follow Us Section */}
            <section className="follow-us">
                <p>Follow us on:</p>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
            </section>

            {/* Footer Section */}
            <footer>
                <p>© 2024 Virtual Recipe Book. All Rights Reserved.</p>
                <p>A Lord New Site.</p>
                <p>
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> | 
                    <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">Terms n Conditions</a>
                </p>
                <p>Information from your device can be used to personalize your ad experience.</p>
                <p><a href="/do-not-sell" target="_blank" rel="noopener noreferrer">Do not sell or share my personal information.</a></p>
            </footer>
        </div>
    );
}

export default HomePage;
