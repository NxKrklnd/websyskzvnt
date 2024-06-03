import React from 'react';
import { Link } from 'react-router-dom';
import '../css/recipe.css'; // Import your CSS file here

function Recipes() {
    return (
        <div>
            <nav className="nav-container-recipe">
                <img className="logo-recipe" src="../logo/kazervant2.png" alt="Kazervant logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/recipe">Recipe</Link></li>
                    <li><Link to="/about_us">About us</Link></li>
                </ul>
                <div className="icons">
                    <i className="bx bx-store"></i>
                    <i className="bx bx-user-circle"></i>
                </div>
            </nav>

            <section className="section__container-recipe event__container-recipe" id="event">
                <div className="event__content-recipe">
                    <div className="event__image-recipe">
                        <img src="../Images/recipe_bg.png" alt="event" />
                    </div>
                    <div className="event__details-recipe">
                        <h2 className="section__header-recipe">RECIPE & MENU</h2>
                        <p className="section__description-recipe">
                            Our recipe and menu collection embodies the essence of Filipino culinary artistry. From classic
                            adobo simmered to perfection to the flavorful delight of sisig, each dish tells a story of tradition
                            and innovation. Explore our menu to discover crispy lumpia bursting with savory goodness or indulge
                            in the rich flavors of our Kare-Kare. At Kazervant Kitchen, every recipe and menu item invites you
                            to savor the authentic flavors and hospitality of Filipino cuisine.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section__container-recipe menu-1__container-recipe" id="menu">
                <h2 className="section__header-recipe">POPULAR DISHES THIS WEEK</h2>
                <p className="section__description-recipe">
                    Our popular recipes this week highlight the diverse flavors of Filipino cuisine, drawing in diners with
                    their delicious simplicity and authentic taste.
                </p>
                <div className="menu-1__grid-recipe">
                    <div className="menu-1__card-recipe">
                        <img src="../Images/pork_sisig.png" alt="menu" />
                        <h4>Pork Sisig</h4>
                        <p>
                            Pork sisig is a spicy Filipino dish made from chopped pork parts, often served sizzling hot.
                        </p>
                        <Link to="/Porksisig" className="btn">RECIPES</Link>
                    </div>
                    <div className="menu-1__card-recipe">
                        <img src="../Images/recipe_pork_chop.png" alt="menu" />
                        <h4>Grilled Pork Chop</h4>
                        <p>
                            Grilled pork chops are seasoned and cooked to perfection on the grill, offering a delicious and
                            savory dining experience.
                        </p>
                        <Link to="/Porkchop" className="btn">RECIPES</Link>
                    </div>
                    <div className="menu-1__card-recipe">
                        <img src="../Images/recipe_dish_lumpia.png" alt="menu" />
                        <h4>Chicken Lumpia</h4>
                        <p>
                            Chicken lumpia is ground chicken and veggies wrapped in thin spring roll
                            wrappers, then deep-fried until crispy.
                        </p>
                        <Link to="/Chickenlumpia" className="btn">RECIPES</Link>
                    </div>
                </div>
            </section>

            <section className="section__container-recipe menu-2__container-recipe" id="menu">
                <h2 className="section__header-recipe-2">OVERALL DISHES</h2>
                <p className="section__description-recipe">
                    This is our overall menu, featuring a variety of dishes crafted with culinary expertise and quality
                    ingredients to delight every palate.
                </p>
                <div className="menu-2__grid-recipe">
                    <div className="menu-2__card-recipe">
                        <img src="../Images/kare_kare.png" alt="order" />
                        <h4>Kare Kare</h4>
                        <p>
                            Kare-Kare is a Filipino stew with a rich peanut sauce, tender meat, and a variety of vegetables,
                            often served with shrimp paste.
                        </p>
                        <Link to="recipes.html" className="btn">RECIPES</Link>
                    </div>
                    <div className="menu-2__card-recipe">
                        <img src="../Images/bicol_express.png" alt="order" />
                        <h4>Bicol Express</h4>
                        <p>
                            Bicol Express is a spicy Filipino pork dish cooked with coconut milk, shrimp paste, and chili
                            peppers for a flavorful, fiery taste.
                        </p>
                        <Link to="recipes.html" className="btn">RECIPES</Link>
                    </div>
                    <div className="menu-2__card-recipe">
                        <img src="../Images/pork_adobo.png" alt="order" />
                        <h4>Pork Adobo</h4>
                        <p>
                            Pork adobo is a Filipino dish with tender pork cooked in a tangy sauce of vinegar, soy sauce,
                            garlic, and spices, making it a flavorful meal.
                        </p>
                        <Link to="recipes.html" className="btn">RECIPES</Link>
                    </div>
                    <div className="menu-2__card-recipe">
                        <img src="../Images/fried_chicken.png" alt="order" />
                        <h4>Fried Chicken</h4>
                        <p>
                            Fried chicken is a beloved dish featuring juicy chicken coated in a crispy, golden crust, and
                            satisfying crunchiness in every bite.
                        </p>
                        <Link to="recipes.html" className="btn">RECIPES</Link>
                    </div>
                    <div className="menu-2__card-recipe">
                        <img src="../Images/pork_sisig.png" alt="menu" />
                        <h4>Pork Sisig</h4>
                        <p>
                            Pork sisig is a spicy Filipino dish made from chopped pork parts, often served sizzling hot.
                        </p>
                        <Link to="recipes.html" className="btn">RECIPES</Link>
                    </div>
                    <div className="menu-2__card-recipe">
                        <img src="../Images/recipe_pork_chop.png" alt="menu" />
                        <h4>Grilled Pork Chop</h4>
                        <p>
                            Grilled pork chops are seasoned and cooked to perfection on the grill, offering a delicious and
                            savory dining experience.
                        </p>
                        <Link to="recipes.html" className="btn">RECIPES</Link>
                    </div>
                    <div className="menu-2__card-recipe">
                        <img src="../Images/recipe_dish_lumpia.png" alt="menu" />
                        <h4>Chicken Lumpia</h4>
                        <p>
                            Chicken lumpia is ground chicken and veggies wrapped in thin spring roll
                            wrappers, then deep-fried until crispy.
                        </p>
                        <Link to="../html/chicken_lumpia.html" className="btn">RECIPES</Link>
                    </div>
                </div>
            </section>

            <section className="section__container-recipe menu-3__container-recipe" id="menu">
                <h2 className="section__header-recipe-3">DRINKS</h2>
                <p className="section__description-recipe">
                    This is our drinks menu, featuring a variety of beverages crafted with expertise and quality ingredients to
                    delight every palate.
                </p>
                <div className="menu-3__grid-recipe">
                    <div className="menu-3__card-recipe">
                        <img src="../Images/orange_juice.png" alt="order" />
                        <h4>Orange Juice</h4>
                        <p>
                            Fresh orange juice, bursting with citrus flavor, packed with vitamins for a refreshing and healthy
                            drink.
                        </p>
                        <Link to="recipes.html" className="btn">RECIPES</Link>
                    </div>
                    <div className="menu-3__card-recipe">
                        <img src="../Images/coke.png" alt="order" />
                        <h4>Coke</h4>
                        <p>
                            Classic Coca-Cola, crisp and refreshing with its iconic flavor, offering the perfect blend of
                            sweetness and carbonation.
                        </p>
                        <Link to="recipes.html" className="btn">RECIPES</Link>
                    </div>
                    <div className="menu-3__card-recipe">
                        <img src="../Images/pineapple.png" alt="order" />
                        <h4>Pineapple Juice</h4>
                        <p>
                            Tropical pineapple juice, naturally sweet and tangy, packed with vitamins for a refreshing and
                            healthy drink.
                        </p>
                        <Link to="recipes.html" className="btn">RECIPES</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Recipes;
