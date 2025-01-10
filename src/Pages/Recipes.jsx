import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/recipe.css';
import { setupModals } from '../javascript/recipe.js';

function Recipes() {
    useEffect(() => {
        setupModals();
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div>
            <nav className="nav-container-recipe">
                <Link to="/">
                    <img className="logo-recipe" src={`${process.env.PUBLIC_URL}/logo/kazervant2.png`} alt="Kazervant logo" />
                </Link>
                <ul className={`nav-links-recipe ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/recipe" onClick={closeMenu}>Recipes</Link></li>
                    <li><Link to="/About" onClick={closeMenu}>About us</Link></li>
                    <li className="close-button-recipe" onClick={closeMenu}>✕</li>
                </ul>
                <div className="icons" onClick={toggleMenu}>
                    <i className='bx bx-menu'></i>
                </div>
            </nav>


            <section className="section__container-recipe event__container-recipe" id="event">
                <div className="event__content-recipe">
                    <div className="event__image-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/recipe_bg.webp`} alt="menu" />
                    </div>
                    <div className="event__details-recipe">
                        <h2 className="section__header-recipe">RECIPE & MENU</h2>
                        <p className="section__description-recipe">
                            Our recipe collection embodies the essence of Filipino culinary artistry. From classic
                            adobo simmered to perfection to the flavorful delight of sisig, each dish tells a story of tradition
                            and innovation. Explore our menu to discover crispy lumpia bursting with savory goodness or indulge
                            in the rich flavors of our Kare-Kare. At Kazervant Kitchen, every recipe and menu item invites you
                            to savor the authentic flavors and hospitality of Filipino cuisine.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="section__container-recipe menu-1__container-recipe" id="menu">
                <h2 className="section__header-recipe">RECOMMENDED DISHES THIS WEEK </h2>
                <p className="section__description-recipe">
                    Our popular recipes this week highlight the diverse flavors of Filipino cuisine, drawing in diners with
                    their delicious simplicity and authentic taste.
                </p>
                <div className="menu-1__grid-recipe">
                    <div className="menu-1__card-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/pork_sisig.webp`} alt="menu" />
                        <h4>Pork Sisig</h4>
                        <p>
                            Pork sisig is a Filipino dish made from chopped pork parts, seasoned with calamansi, onions, and chili peppers, and served sizzling hot
                        </p>
                        <a className="btn" id="Pork_sisig_btn">RECIPES</a>
                    </div>
                    <div className="menu-1__card-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/recipe_pork_chop.webp`} alt="menu" />
                        <h4>Grilled Pork Chop</h4>
                        <p>
                            Grilled pork chops are seasoned and cooked to perfection on the grill, offering a delicious and
                            savory dining experience
                        </p>
                        <a className="btn" id="pork_chop_btn">RECIPES</a>
                    </div>
                    <div className="menu-1__card-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/recipe_dish_lumpia.webp`} alt="menu" />
                        <h4>Chicken Lumpia</h4>
                        <p>
                            Chicken lumpia is ground chicken and veggies wrapped in thin spring roll
                            wrappers, then deep-fried until crispy
                        </p>
                        <a className="btn" id="chicken_lumpia_btn">RECIPES</a>
                    </div>
                </div>
            </section>

            {/* PORK_SISIG_MODAL */}
            <div id="Pork_sisig_modal" className="modal">
                <div className="modal-content">
                    <span className="close pork-sisig-close">&times;</span>
                    <main className="page-Subpages">
                        <div className="recipe-page-Subpages">
                            <section className="recipe-hero-Subpages">
                                <img src={`${process.env.PUBLIC_URL}/Images/pork_sisig.webp`} className="img-Subpages recipe-hero-img-Subpages" />
                                <article className="recipe-info-Subpages">
                                    <h2>Pork Sisig</h2>
                                    <p className="paragraph-styles">
                                        Pork sisig is a popular Filipino dish made from chopped and crispy pork parts, including the face, ears, and liver. These are mixed with onions, chili peppers, and seasonings, then served sizzling hot on a cast-iron plate. Often topped with a raw egg and sometimes enhanced with mayonnaise or chicharrón, pork sisig is a flavorful and tangy appetizer or main course enjoyed with rice
                                    </p>
                                    <div className="recipe-icons-Subpages">
                                        <article>
                                            <i className="fas fa-clock"></i>
                                            <h5>prep time</h5>
                                            <p className="paragraph-styles">30 minutes</p>
                                        </article>
                                        <article>
                                            <i className="far fa-clock"></i>
                                            <h5>cook time</h5>
                                            <p className="paragraph-styles">30 minutes</p>
                                        </article>
                                    </div>
                                </article>
                            </section>
                            {/* content */}
                            <section className="recipe-content-Subpages">
                                <article>
                                    <h4>Instructions</h4>
                                    {/* single instruction */}
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 1</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Boil pork belly and pork face/ears in a pot of water for 45 minutes to 1 hour until tender, then drain and let cool.
                                        </p>
                                    </div>
                                    {/* end of single instruction */}
                                    {/* single instruction */}
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 2</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Grill or fry the boiled pork until crispy and golden brown, then chop into small pieces.
                                        </p>
                                    </div>
                                    {/* end of single instruction */}
                                    {/* single instruction */}
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 3</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Sauté garlic and onions in a pan until fragrant, then add the chopped pork and cook for a few minutes.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 4</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Add soy sauce, vinegar, and calamansi juice, stirring well.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 5</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Add chopped chili peppers, season with salt and pepper, and cook for another 5-10 minutes until well mixed and heated through.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 6</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Transfer the sisig to a sizzling plate, optionally crack a raw egg on top and mix it in while the plate is still hot, and garnish with chopped green onions, mayonnaise.
                                        </p>
                                    </div>
                                </article>
                                <article className="second-column-Subpages">
                                    <div>
                                        <h4>Ingredients</h4>
                                        <p className="single-ingredient-Subpages">1 lb pork belly</p>
                                        <p className="single-ingredient-Subpages">1 lb pork face or ears</p>
                                        <p className="single-ingredient-Subpages">1 onion, finely chopped</p>
                                        <p className="single-ingredient-Subpages">3 cloves garlic, minced</p>
                                        <p className="single-ingredient-Subpages">2-3 red chili peppers, chopped</p>
                                        <p className="single-ingredient-Subpages">1/4 cup soy sauce</p>
                                        <p className="single-ingredient-Subpages">1/4 cup vinegar</p>
                                        <p className="single-ingredient-Subpages">2-3 calamansi (or 1 lime), juiced</p>
                                        <p className="single-ingredient-Subpages">1 egg (optional)</p>
                                        <p className="single-ingredient-Subpages">Mayonnaise (optional)</p>
                                        <p className="single-ingredient-Subpages">Salt and pepper to taste</p>
                                        <p className="single-ingredient-Subpages">Chopped green onions for garnish</p>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </main>
                    {/* footer */}
                    <footer className="page-footer-Subpages">
                        <p>
                            &copy; <span id="date"></span>
                            <span className="footer-logo-Subpages"></span> Built by
                            <a href="..//html/index.html"> KAZERVANT</a>
                        </p>
                    </footer>
                </div>
            </div>

            {/* PORK_CHOP_MODAL */}
            <div id="Pork_chop_modal" className="modal">
                <div className="modal-content">
                    <span className="close pork-chop-close">&times;</span>
                    <main className="page-Subpages">
                        <div className="recipe-page-Subpages">
                            <section className="recipe-hero-Subpages">
                                <img src={`${process.env.PUBLIC_URL}/Images/recipe_pork_chop.webp`} className="img-Subpages recipe-hero-img-Subpages" />
                                <article className="recipe-info-Subpages">
                                    <h2>Grilled Pork Chop</h2>
                                    <p className="paragraph-styles">
                                        Grilled pork chops are a flavorful and juicy dish made from marinated pork chops that are cooked on a grill until perfectly charred and tender. They are often seasoned with a blend of herbs and spices, which enhance their natural taste, making them a delightful and satisfying meal.
                                    </p>
                                    <div className="recipe-icons-Subpages">
                                        <article>
                                            <i className="fas fa-clock"></i>
                                            <h5>prep time</h5>
                                            <p className="paragraph-styles">10 minutes plus marinating time</p>
                                        </article>
                                        <article>
                                            <i className="far fa-clock"></i>
                                            <h5>cook time</h5>
                                            <p className="paragraph-styles">15-20 minutes</p>
                                        </article>
                                    </div>
                                </article>
                            </section>
                            {/* content */}
                            <section className="recipe-content-Subpages">
                                <article>
                                    <h4>Instructions</h4>
                                    {/* single instruction */}
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 1</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            In a bowl, mix olive oil, soy sauce, lemon juice, brown sugar, garlic, thyme, rosemary, pepper, and salt to make the marinade.
                                        </p>
                                    </div>
                                    {/* end of single instruction */}
                                    {/* single instruction */}
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 2</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Place pork chops in a resealable plastic bag or shallow dish and pour the marinade over them.
                                        </p>
                                    </div>
                                    {/* end of single instruction */}
                                    {/* single instruction */}
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 3</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Seal the bag or cover the dish and refrigerate for at least 1 hour, preferably overnight.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 4</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Preheat the grill to medium-high heat.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 5</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Remove pork chops from the marinade and discard the marinade.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 6</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Grill the pork chops for 6-8 minutes on each side
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 6</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Let the pork chops rest for 5 minutes before serving to retain their juices.
                                        </p>
                                    </div>
                                </article>
                                <article className="second-column-Subpages">
                                    <div>
                                        <h4>Ingredients</h4>
                                        <p className="single-ingredient-Subpages">4 pork chops (bone-in or boneless)</p>
                                        <p className="single-ingredient-Subpages">1/4 cup olive oil</p>
                                        <p className="single-ingredient-Subpages">1/4 cup soy sauce</p>
                                        <p className="single-ingredient-Subpages">2 tablespoons lemon juice</p>
                                        <p className="single-ingredient-Subpages">2 tablespoons brown sugar</p>
                                        <p className="single-ingredient-Subpages">3 cloves garlic, minced</p>
                                        <p className="single-ingredient-Subpages">1 teaspoon dried thyme</p>
                                        <p className="single-ingredient-Subpages">1 teaspoon dried rosemary</p>
                                        <p className="single-ingredient-Subpages">1/2 teaspoon black pepper</p>
                                        <p className="single-ingredient-Subpages">1/2 teaspoon salt</p>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </main>
                    {/* footer */}
                    <footer className="page-footer-Subpages">
                        <p>
                            &copy; <span id="date"></span>
                            <span className="footer-logo-Subpages"></span> Built by
                            <a href="..//html/index.html"> KAZERVANT</a>
                        </p>
                    </footer>
                </div>
            </div>

            {/* CHICKEN_LUmPIA_MODAL */}
            <div id="Chicken_lumpia_modal" className="modal">
                <div className="modal-content">
                    <span className="close chicken-lumpia-close">&times;</span>
                    <main className="page-Subpages">
                        <div className="recipe-page-Subpages">
                            <section className="recipe-hero-Subpages">
                                <img src={`${process.env.PUBLIC_URL}/Images/recipe_dish_lumpia.webp`} className="img-Subpages recipe-hero-img-Subpages" />
                                <article className="recipe-info-Subpages">
                                    <h2>Chicken Lumpia</h2>
                                    <p className="paragraph-styles">
                                        Filipino chicken lumpia is a delicious variation of the traditional lumpia, filled with
                                        a flavorful mixture of ground chicken, vegetables, and seasonings, all wrapped in thin
                                        spring roll wrappers and deep-fried until golden and crispy, resulting in a delightful snack or
                                        appetizer enjoyed with dipping sauces like sweet chili or vinegar-soy sauce.
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
                            {/* content */}
                            <section className="recipe-content-Subpages">
                                <article>
                                    <h4>Instructions</h4>
                                    {/* single instruction */}
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 1</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Combine ground chicken, veggies, garlic, and soy sauce in a bowl.
                                        </p>
                                    </div>
                                    {/* end of single instruction */}
                                    {/* single instruction */}
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 2</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Spoon filling onto lumpia wrapper, roll tightly, and seal edges with water
                                        </p>
                                    </div>
                                    {/* end of single instruction */}
                                    {/* single instruction */}
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 3</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Heat oil in a pan.
                                            Fry lumpia until golden brown and crispy, about 3-4 mins per batch.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 4</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Drain excess oil on paper towels.
                                            Serve hot with dipping sauces.
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
                    {/* footer */}
                    <footer className="page-footer-Subpages">
                        <p>
                            &copy; <span id="date"></span>
                            <span className="footer-logo-Subpages"></span> Built by
                            <a href="..//html/index.html"> KAZERVANT</a>
                        </p>
                    </footer>
                </div>
            </div>


            {/* SECTION 3 */}
            <section className="section__container-recipe menu-2__container-recipe" id="menu">
                {/* <h3>POPULAR RECIPES THIS WEEK</h3>*/}
                <h2 className="section__header-recipe-2">OVERALL DISHES</h2>
                <p className="section__description-recipe">
                    This is our overall menu, featuring a variety of dishes crafted with culinary expertise and quality
                    ingredients to delight every palate.
                </p>
                <div className="menu-2__grid-recipe">
                    <div className="menu-2__card-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/kare_kare.webp`} alt="menu" />
                        <h4>Kare Kare</h4>
                        <p>
                            Kare-Kare is a Filipino stew with a rich peanut sauce, tender meat, oxtail, and a variety of vegetables, often served with shrimp paste.
                        </p>
                        <a className="btn" id="kare_kare_btn">RECIPES</a>
                    </div>
                    <div className="menu-2__card-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/bicol_express.webp`} alt="menu" />
                        <h4>Bicol Express</h4>
                        <p>
                            Bicol Express is a spicy Filipino pork dish cooked with coconut milk, shrimp paste, garlic, and chili peppers for a flavorful, fiery taste.
                        </p>
                        <a className="btn" id="Bicol_express_btn">RECIPES</a>
                    </div>
                    <div className="menu-2__card-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/pork_adobo.webp`} alt="menu" />
                        <h4>Pork Adobo</h4>
                        <p>
                            Pork adobo is a Filipino dish with tender pork cooked in a tangy sauce of vinegar, soy sauce,
                            garlic, and spices, making it a flavorful meal.
                        </p>
                        <a className="btn" id="Pork_adobo_btn">RECIPES</a>
                    </div>
                    <div className="menu-2__card-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/pork_sisig.webp`} alt="menu" />
                        <h4>Pork Sisig</h4>
                        <p>
                            Pork sisig is a Filipino dish made from chopped pork parts, seasoned with calamansi, onions, and chili, and served sizzling hot.
                        </p>
                        <a className="btn" id="Pork_sisig_btn_2">RECIPES</a>
                    </div>
                    <div className="menu-2__card-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/recipe_pork_chop.webp`} alt="menu" />
                        <h4>Grilled Pork Chop</h4>
                        <p>
                            Grilled pork chops are seasoned and cooked to perfection on the grill, offering a delicious and
                            savory dining experience.
                        </p>
                        <a className="btn" id="pork_chop_btn_2">RECIPES</a>
                    </div>
                    <div className="menu-2__card-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/recipe_dish_lumpia.webp`} alt="menu" />
                        <h4>Chicken Lumpia</h4>
                        <p>
                            Chicken lumpia is ground chicken and veggies wrapped in thin spring roll
                            wrappers, then deep-fried until crispy.
                        </p>
                        <a className="btn" id="chicken_lumpia_btn_2">RECIPES</a>
                    </div>
                </div>
            </section>

            {/* kare_kare_MODAL */}
            <div id="kare_kare_modal" className="modal">
                <div className="modal-content">
                    <span className="close kare-kare-close">&times;</span>
                    <main className="page-Subpages">
                        <div className="recipe-page-Subpages">
                            <section className="recipe-hero-Subpages">
                                <img src={`${process.env.PUBLIC_URL}/Images/kare_kare.webp`} className="img-Subpages recipe-hero-img-Subpages" />
                                <article className="recipe-info-Subpages">
                                    <h2>Kare kare</h2>
                                    <p className="paragraph-styles">
                                        Kare-Kare is a traditional Filipino stew known for its rich, savory peanut sauce. This hearty dish is typically made with oxtail, tripes, and vegetables such as eggplant, string beans, and banana blossoms. It is commonly served with a side of bagoong (fermented shrimp paste) for added flavor, making it a beloved comfort food in Filipino cuisine.
                                    </p>
                                    <div className="recipe-icons-Subpages">
                                        <article>
                                            <i className="fas fa-clock"></i>
                                            <h5>prep time</h5>
                                            <p className="paragraph-styles">20 minutes</p>
                                        </article>
                                        <article>
                                            <i className="far fa-clock"></i>
                                            <h5>cook time</h5>
                                            <p className="paragraph-styles"> 2 hours</p>
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
                                            Boil oxtail and tripe in water until tender, then drain
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 2</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Soak annatto seeds in hot water for 10 minutes, then strain.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 3</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Sauté onion and garlic in a pot until fragrant.Add oxtail and tripe, then sauté briefly.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 4</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Pour in water and annatto water, bring to a boil.Stir in peanut butter and ground toasted rice until sauce thickens.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 5</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Add banana blossom, eggplant, string beans, and cabbage.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 6</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Season with fish sauce, salt, and pepper, then simmer until vegetables are tender.Serve hot with bagoong on the side.
                                        </p>
                                    </div>
                                </article>
                                <article className="second-column-Subpages">
                                    <div>
                                        <h4>Ingredients</h4>
                                        <p className="single-ingredient-Subpages">2 lbs oxtail, cut into pieces</p>
                                        <p className="single-ingredient-Subpages">1 lb beef tripe (optional)</p>
                                        <p className="single-ingredient-Subpages">1 banana blossom, sliced</p>
                                        <p className="single-ingredient-Subpages">1 eggplant, sliced</p>
                                        <p className="single-ingredient-Subpages">1 bunch string beans, cut into 2-inch pieces</p>
                                        <p className="single-ingredient-Subpages">1/2 head cabbage, sliced</p>
                                        <p className="single-ingredient-Subpages">1/2 cup peanut butter</p>
                                        <p className="single-ingredient-Subpages">1/4 cup ground toasted rice</p>
                                        <p className="single-ingredient-Subpages">1/4 cup annatto seeds (for coloring)</p>
                                        <p className="single-ingredient-Subpages">1 onion, chopped</p>
                                        <p className="single-ingredient-Subpages">4 cloves garlic, minced</p>
                                        <p className="single-ingredient-Subpages">6 cups water</p>
                                        <p className="single-ingredient-Subpages">2 tablespoons fish sauce</p>
                                        <p className="single-ingredient-Subpages">Salt and pepper to taste</p>
                                        <p className="single-ingredient-Subpages">Bagoong (fermented shrimp paste) for serving</p>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </main>
                    {/* footer */}
                    <footer className="page-footer-Subpages">
                        <p>
                            &copy; <span id="date"></span>
                            <span className="footer-logo-Subpages"></span> Built by
                            <a href="..//html/index.html"> KAZERVANT</a>
                        </p>
                    </footer>
                </div>
            </div>

            {/* Bicol_Express_MODAL */}
            <div id="Bicol_expess_modal" className="modal">
                <div className="modal-content">
                    <span className="close Bicol-express-close">&times;</span>
                    <main className="page-Subpages">
                        <div className="recipe-page-Subpages">
                            <section className="recipe-hero-Subpages">
                                <img src={`${process.env.PUBLIC_URL}/Images/bicol_express.webp`} className="img-Subpages recipe-hero-img-Subpages" />
                                <article className="recipe-info-Subpages">
                                    <h2>Bicol Express</h2>
                                    <p className="paragraph-styles">
                                        Bicol Express is a spicy Filipino dish made from pork, chili peppers, coconut milk, shrimp paste, and a variety of spices. Originating from the Bicol region, it is known for its rich and creamy texture combined with a bold spiciness, making it a popular and flavorful dish in Filipino cuisine.
                                    </p>
                                    <div className="recipe-icons-Subpages">
                                        <article>
                                            <i className="fas fa-clock"></i>
                                            <h5>prep time</h5>
                                            <p className="paragraph-styles">15 minutes</p>
                                        </article>
                                        <article>
                                            <i className="far fa-clock"></i>
                                            <h5>cook time</h5>
                                            <p className="paragraph-styles"> 45 minutes</p>
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
                                            In a pan, heat cooking oil and sauté garlic and onion until fragrant.Add the sliced pork belly and cook until browned.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 2</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Stir in the shrimp paste and cook for a few minutes.Pour in the coconut milk and bring to a simmer.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 3</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Add the green and red chili peppers and cook for about 10 minutes.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 4</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Pour in the coconut cream, stir, and simmer for another 10-15 minutes until the sauce thickens.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 5</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Season with salt and pepper to taste.Serve hot with steamed rice.
                                        </p>
                                    </div>
                                </article>
                                <article className="second-column-Subpages">
                                    <div>
                                        <h4>Ingredients</h4>
                                        <p className="single-ingredient-Subpages">1 lb pork belly, sliced into strips</p>
                                        <p className="single-ingredient-Subpages">1 cup coconut milk</p>
                                        <p className="single-ingredient-Subpages">1 cup coconut cream</p>
                                        <p className="single-ingredient-Subpages">5-6 long green chili peppers, sliced</p>
                                        <p className="single-ingredient-Subpages">3-4 red chili peppers, sliced (adjust for desired spiciness)</p>
                                        <p className="single-ingredient-Subpages">3 cloves garlic, minced</p>
                                        <p className="single-ingredient-Subpages">1 onion, chopped</p>
                                        <p className="single-ingredient-Subpages">2 tablespoons shrimp paste (bagoong)</p>
                                        <p className="single-ingredient-Subpages">1 tablespoon cooking oil</p>
                                        <p className="single-ingredient-Subpages">Salt and pepper to taste</p>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </main>
                    {/* footer */}
                    <footer className="page-footer-Subpages">
                        <p>
                            &copy; <span id="date"></span>
                            <span className="footer-logo-Subpages"></span> Built by
                            <a href="..//html/index.html"> KAZERVANT</a>
                        </p>
                    </footer>
                </div>
            </div>

            {/* Pork_Adobo_MODAL */}
            <div id="Pork_adobo_modal" className="modal">
                <div className="modal-content">
                    <span className="close Pork_adobo-close">&times;</span>
                    <main className="page-Subpages">
                        <div className="recipe-page-Subpages">
                            <section className="recipe-hero-Subpages">
                                <img src={`${process.env.PUBLIC_URL}/Images/pork_adobo.webp`} className="img-Subpages recipe-hero-img-Subpages" />
                                <article className="recipe-info-Subpages">
                                    <h2>Pork Adobo</h2>
                                    <p className="paragraph-styles">
                                        Pork Adobo is a classic Filipino dish made by braising pork in a flavorful mixture of soy sauce, vinegar, garlic, bay leaves, and black peppercorns. This savory and tangy dish is renowned for its rich and hearty flavors, making it a beloved comfort food in Filipino cuisine.
                                    </p>
                                    <div className="recipe-icons-Subpages">
                                        <article>
                                            <i className="fas fa-clock"></i>
                                            <h5>prep time</h5>
                                            <p className="paragraph-styles">10 minutes</p>
                                        </article>
                                        <article>
                                            <i className="far fa-clock"></i>
                                            <h5>cook time</h5>
                                            <p className="paragraph-styles"> 1 hour</p>
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
                                            In a bowl, marinate the pork belly in soy sauce and half of the minced garlic for at least 30 minutes.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 2</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Heat cooking oil in a pot and sauté the remaining garlic and onion until fragrant.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 3</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Add the marinated pork, including the marinade, and cook until the pork is browned.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 4</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Pour in the vinegar and let it boil without stirring.Add water, bay leaves, and peppercorns, then bring to a boil.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 5</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Reduce the heat and simmer for 40 minutes to 1 hour, or until the pork is tender.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 5</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Add brown sugar if desired, and season with salt and pepper to taste.Serve hot with steamed rice.
                                        </p>
                                    </div>
                                </article>
                                <article className="second-column-Subpages">
                                    <div>
                                        <h4>Ingredients</h4>
                                        <p className="single-ingredient-Subpages">2 lbs pork belly, cut into cubes</p>
                                        <p className="single-ingredient-Subpages">1/2 cup soy sauce</p>
                                        <p className="single-ingredient-Subpages">1/2 cup vinegar</p>
                                        <p className="single-ingredient-Subpages">1 cup water</p>
                                        <p className="single-ingredient-Subpages">6 cloves garlic, minced</p>
                                        <p className="single-ingredient-Subpages">2 bay leaves</p>
                                        <p className="single-ingredient-Subpages">1 teaspoon black peppercorns</p>
                                        <p className="single-ingredient-Subpages">1 onion, chopped</p>
                                        <p className="single-ingredient-Subpages">1 tablespoon cooking oil</p>
                                        <p className="single-ingredient-Subpages">1 tablespoon brown sugar (optional)</p>
                                        <p className="single-ingredient-Subpages">Salt and pepper to taste</p>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </main>
                    {/* footer */}
                    <footer className="page-footer-Subpages">
                        <p>
                            &copy; <span id="date"></span>
                            <span className="footer-logo-Subpages"></span> Built by
                            <a href="..//html/index.html"> KAZERVANT</a>
                        </p>
                    </footer>
                </div>
            </div>

            {/* SECTION 3*/}
            <section className="section__container-recipe menu-3__container-recipe" id="menu">
                <h2 className="section__header-recipe-3">DRINKS</h2>
                <p className="section__description-recipe">
                    This is our drinks menu, featuring a variety of beverages crafted with expertise and quality ingredients to
                    delight every palate.
                </p>
                <div className="menu-3__grid-recipe">
                    <div className="menu-3__card-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/orange_juice.webp`} alt="menu" />
                        <h4>Orange Juice</h4>
                        <p>
                            Fresh orange juice, bursting with citrus flavor, packed with vitamins for a refreshing and healthy
                            drink.
                        </p>
                        <a className="btn" id="Orange_juice_btn">RECIPES</a>
                    </div>
                    <div className="menu-3__card-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/Apple.webp`} alt="menu" />
                        <h4>Apple Juice</h4>
                        <p>
                            Crisp apple juice, brimming with orchard-fresh flavor, rich in antioxidants for a delightful and nourishing beverage.
                        </p>
                        <a className="btn" id="Apple_juice_btn">RECIPES</a>
                    </div>
                    <div className="menu-3__card-recipe">
                        <img src={`${process.env.PUBLIC_URL}/Images/pineapple.webp`} alt="menu" />
                        <h4>Pineapple Juice</h4>
                        <p>
                            Tropical pineapple juice, naturally sweet and tangy, packed with vitamins for a refreshing and
                            healthy drink.
                        </p>
                        <a className="btn" id="Pineapple_juice_btn">RECIPES</a>
                    </div>
                </div>
            </section>

            {/* Orange_Juice_MODAL */}
            <div id="Orange_juice_modal" className="modal">
                <div className="modal-content">
                    <span className="close Orange_juice-close">&times;</span>
                    <main className="page-Subpages">
                        <div className="recipe-page-Subpages">
                            <section className="recipe-hero-Subpages">
                                <img src={`${process.env.PUBLIC_URL}/Images/orange_juice.webp`} className="img-Subpages recipe-hero-img-Subpages" />
                                <article className="recipe-info-Subpages">
                                    <h2>Orange Juice</h2>
                                    <p className="paragraph-styles">
                                        Orange juice is a popular citrus beverage made from freshly squeezed oranges or commercially processed orange concentrate. Known for its refreshing taste and high vitamin C content, orange juice is enjoyed worldwide as a breakfast staple and a versatile ingredient in cocktails and culinary recipes.
                                    </p>
                                    <div className="recipe-icons-Subpages">
                                        <article>
                                            <i className="fas fa-clock"></i>
                                            <h5>prep time</h5>
                                            <p className="paragraph-styles">15 minutes</p>
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
                                            Wash and scrub oranges thoroughly under running water.Cut each orange in half crosswise.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 2</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Squeeze the oranges using a citrus juicer or by hand, extracting as much juice as possible.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 3</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Strain the juice through a fine mesh sieve to remove pulp and seeds, if desired.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 4</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Serve the freshly squeezed orange juice immediately over ice, or refrigerate it for later consumption.
                                        </p>
                                    </div>
                                </article>
                                <article className="second-column-Subpages">
                                    <div>
                                        <h4>Ingredients</h4>
                                        <p className="single-ingredient-Subpages">Fresh oranges (quantity depends on desired amount of juice)</p>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </main>
                    {/* footer */}
                    <footer className="page-footer-Subpages">
                        <p>
                            &copy; <span id="date"></span>
                            <span className="footer-logo-Subpages"></span> Built by
                            <a href="..//html/index.html"> KAZERVANT</a>
                        </p>
                    </footer>
                </div>
            </div>

            {/*Apple_Juice_MODAL */}
            <div id="Apple_juice_modal" className="modal">
                <div className="modal-content">
                    <span className="close Apple_juice-close">&times;</span>
                    <main className="page-Subpages">
                        <div className="recipe-page-Subpages">
                            <section className="recipe-hero-Subpages">
                                <img src={`${process.env.PUBLIC_URL}/Images/Apple.webp`} className="img-Subpages recipe-hero-img-Subpages" />
                                <article className="recipe-info-Subpages">
                                    <h2>Apple Juice</h2>
                                    <p className="paragraph-styles">
                                        Apple juice is a popular fruit beverage made from the extraction and filtration of apples, resulting in a sweet and refreshing drink enjoyed by all ages. It's known for its crisp flavor and can be consumed freshly pressed or commercially processed.                                    </p>
                                    <div className="recipe-icons-Subpages">
                                        <article>
                                            <i className="fas fa-clock"></i>
                                            <h5>prep time</h5>
                                            <p className="paragraph-styles">15 minutes</p>
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
                                            Wash and scrub apples thoroughly under running water.Core and roughly chop the apples, leaving the skin intact if desired.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 2</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Place the chopped apples into a blender or juicer.Blend or juice the apples until smooth.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 3</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Strain the juice through a fine mesh sieve or cheesecloth to remove pulp.Optionally, you can sweeten the juice with honey or sugar to taste.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 4</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Serve the apple juice chilled over ice, or refrigerate it for later enjoyment.
                                        </p>
                                    </div>
                                </article>
                                <article className="second-column-Subpages">
                                    <div>
                                        <h4>Ingredients</h4>
                                        <p className="single-ingredient-Subpages">Fresh apples (quantity depends on desired amount of juice)</p>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </main>
                    {/* footer */}
                    <footer className="page-footer-Subpages">
                        <p>
                            &copy; <span id="date"></span>
                            <span className="footer-logo-Subpages"></span> Built by
                            <a href="..//html/index.html"> KAZERVANT</a>
                        </p>
                    </footer>
                </div>
            </div>

            {/*Pineapple_Juice_MODAL */}
            <div id="Pineapple_juice_modal" className="modal">
                <div className="modal-content">
                    <span className="close Pineapple_juice-close">&times;</span>
                    <main className="page-Subpages">
                        <div className="recipe-page-Subpages">
                            <section className="recipe-hero-Subpages">
                                <img src={`${process.env.PUBLIC_URL}/Images/pineapple.webp`} className="img-Subpages recipe-hero-img-Subpages" />
                                <article className="recipe-info-Subpages">
                                    <h2>Pineapple Juice</h2>
                                    <p className="paragraph-styles">
                                        Pineapple juice is a tropical fruit beverage made by extracting the juice from fresh pineapples. Known for its sweet and tangy flavor, pineapple juice is rich in vitamins and enzymes, making it a refreshing and nutritious drink enjoyed worldwide.
                                    </p>
                                    <div className="recipe-icons-Subpages">
                                        <article>
                                            <i className="fas fa-clock"></i>
                                            <h5>prep time</h5>
                                            <p className="paragraph-styles">8 minutes</p>
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
                                            Wash and peel the pineapples.Cut the pineapples into chunks, removing the core.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 2</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Place the pineapple chunks into a blender or juicer.Blend or juice the pineapple until smooth.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 3</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Strain the juice through a fine mesh sieve or cheesecloth to remove pulp.
                                        </p>
                                    </div>
                                    <div className="single-instruction-Subpages">
                                        <header>
                                            <p className="paragraph-styles">step 4</p>
                                            <div></div>
                                        </header>
                                        <p className="paragraph-styles">
                                            Serve the pineapple juice chilled over ice, or refrigerate it for later enjoyment.
                                        </p>
                                    </div>
                                </article>
                                <article className="second-column-Subpages">
                                    <div>
                                        <h4>Ingredients</h4>
                                        <p className="single-ingredient-Subpages">Fresh pineapples (quantity depends on desired amount of juice)</p>
                                    </div>
                                </article>
                            </section>
                        </div>
                    </main>
                    {/* footer */}
                    <footer className="page-footer-Subpages">
                        <p>
                            &copy; <span id="date"></span>
                            <span className="footer-logo-Subpages"></span> Built by
                            <a href="..//html/index.html"> KAZERVANT</a>
                        </p>
                    </footer>
                </div>
            </div>

        </div>
    );
}

export default Recipes;