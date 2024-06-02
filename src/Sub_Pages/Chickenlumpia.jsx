import React from 'react';
import { Link } from 'react-router-dom';
import '../css/overall_recipes.css';

const Chickenlumpia = () => {
    return (
        <div className="body-styles">
            <nav className="nav-container-Subpages">
                <img className="logo-Subpages" src="../logo/kazervant2.png" alt="Kazervant logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/recipe">Recipe</Link></li>
                    <li><Link to="/about_us">About us</Link></li>
                </ul>
                <div className="icons-Subpages">
                    <i className="bx bx-store"></i>
                    <i className="bx bx-user-circle"></i>
                </div>
            </nav>

            <main className="page-Subpages">
                <div className="recipe-page-Subpages">
                    <section className="recipe-hero-Subpages">
                        <img src="../Images/recipe_dish_lumpia.png" className="img-Subpages recipe-hero-img-Subpages" alt="Chicken Lumpia" />
                        <article className="recipe-info-Subpages">
                            <h2>Chicken Lumpia</h2>
                            <p className="paragraph-styles">
                                Filipino chicken lumpia is a delicious variation of the traditional lumpia, filled with a
                                flavorful mixture of ground chicken, vegetables, and seasonings, all wrapped in thin spring roll
                                wrappers and deep-fried until golden and crispy, resulting in a delightful snack or appetizer
                                enjoyed with dipping sauces like sweet chili or vinegar-soy sauce.
                            </p>
                            <div className="recipe-icons-Subpages">
                                <article>
                                    <i className="fas fa-clock"></i>
                                    <h5>prep time</h5>
                                    <p className="paragraph-styles">15 min.</p>
                                </article>
                                <article>
                                    <i className="far fa-clock"></i>
                                    <h5>cook time</h5>
                                    <p className="paragraph-styles">10 min.</p>
                                </article>
                            </div>
                        </article>
                    </section>
                    <section className="recipe-content-Subpages">
                        <article>
                            <h4>Instructions</h4>
                            <div className="single-instruction-Subpages">
                                <header>
                                    <p className="paragraph-styles">step 1</p>
                                    <div></div>
                                </header>
                                <p className="paragraph-styles">
                                    Combine ground chicken, veggies, garlic, and soy sauce in a bowl.
                                </p>
                            </div>
                            <div className="single-instruction-Subpages">
                                <header>
                                    <p className="paragraph-styles">step 2</p>
                                    <div></div>
                                </header>
                                <p className="paragraph-styles">
                                    Spoon filling onto lumpia wrapper, roll tightly, and seal edges with water
                                </p>
                            </div>
                            <div className="single-instruction-Subpages">
                                <header>
                                    <p className="paragraph-styles">step 3</p>
                                    <div></div>
                                </header>
                                <p className="paragraph-styles">
                                    Heat oil in a pan. Fry lumpia until golden brown and crispy, about 3-4 mins per batch.
                                </p>
                            </div>
                            <div className="single-instruction-Subpages">
                                <header>
                                    <p className="paragraph-styles">step 4</p>
                                    <div></div>
                                </header>
                                <p className="paragraph-styles">
                                    Drain excess oil on paper towels. Serve hot with dipping sauces.
                                </p>
                            </div>
                        </article>
                        <article className="second-column-Subpages">
                            <div>
                                <h4>Ingredients</h4>
                                <p className="single-ingredient-Subpages">1 lb ground chicken</p>
                                <p className="single-ingredient-Subpages">1 cup shredded cabbage</p>
                                <p className="single-ingredient-Subpages">1 cup shredded carrots</p>
                                <p className="single-ingredient-Subpages">1 cup chopped green onions</p>
                                <p className="single-ingredient-Subpages">1/2 cup chopped onions</p>
                                <p className="single-ingredient-Subpages">2-3 cloves garlic, minced</p>
                                <p className="single-ingredient-Subpages">1 tbsp soy sauce</p>
                                <p className="single-ingredient-Subpages">Lumpia wrappers (spring roll wrappers)</p>
                            </div>
                        </article>
                    </section>
                </div>
            </main>
            <footer className="page-footer-Subpages">
                <p>
                    &copy; <span id="date"></span>
                    <span className="footer-logo-Subpages">KVRNT</span> Built by
                    <Link to="/">KAZERVANT</Link>
                </p>
            </footer>
        </div>
    );
}

export default Chickenlumpia;
