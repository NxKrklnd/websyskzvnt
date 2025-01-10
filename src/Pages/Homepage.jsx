import React, { useEffect, useRef, useState } from 'react';
import '../css/style.css';
import { handleFirstPageAnimation } from '../javascript/script.js';
import { useNavigate, Link } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    const nextSectionRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        handleFirstPageAnimation();
    }, []);

    const handleDetailsClick = () => {
        navigate('/About');
    };

    const handleExploreClick = (toRecipe = false) => {
        if (toRecipe) {
            navigate('/recipe');
        } else {
            if (nextSectionRef.current) {
                nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="nav-container">
                <img className="logo" src={`${process.env.PUBLIC_URL}/logo/kazervant2.png`} alt="Kazervant logo" />
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/recipe" onClick={closeMenu}>Recipes</Link></li>
                    <li><Link to="/About" onClick={closeMenu}>About us</Link></li>
                    <li className="close-button" onClick={closeMenu}>✕</li>
                </ul>
                <div className="icons" onClick={toggleMenu}>
                    <i className='bx bx-menu'></i>
                </div>
            </nav>

            <ul className="pages">
                <li>
                    <video src={`${process.env.PUBLIC_URL}/Images/video_BG.webm`} muted autoPlay loop></video>
                    <div id="first-page" className="page-info">
                        <h1>KAZERVANT KITCHEN</h1>
                        <p></p>
                    </div>
                    <div id="first-page-part" className="page-footer">
                        <div className="first-page-button">
                            <button onClick={() => handleExploreClick(false)}>Explore</button>
                            <button onClick={handleDetailsClick}>Details</button>
                        </div>
                        <p>
                            *Kazervant Kitchen offers a variety of Filipino dishes.
                        </p>
                    </div>
                </li>

                <li ref={nextSectionRef}>
                    <img src={`${process.env.PUBLIC_URL}/Images/chicken_lumpia.webp`} alt="Chicken-kebab" />
                    <div className="page-info">
                        <h1>Chicken Lumpia</h1>
                        <p>Popular this week</p>
                    </div>
                    <div className="page-footer">
                        <div className="buttons all">
                            <button onClick={() => handleExploreClick(true)}>Explore</button>
                        </div>
                        <p>
                            *Kazervant Kitchen offers a variety of Filipino dishes.
                        </p>
                    </div>
                </li>

                <li>
                    <img src={`${process.env.PUBLIC_URL}/Images/pork_chop.webp`} alt="pork-chop" />
                    <div className="page-info model-x">
                        <h1>Pork Chop</h1>
                        <p>Popular this week</p>
                    </div>
                    <div className="page-footer">
                        <div className="buttons all">
                            <button onClick={() => handleExploreClick(true)}>Explore</button>
                        </div>
                        <p>
                            *Kazervant Kitchen offers a variety of Filipino dishes.
                        </p>
                    </div>
                </li>

                <li>
                    <img src={`${process.env.PUBLIC_URL}/Images/drinks.webp`} alt="drinks" />
                    <div className="page-info">
                        <h1>Refreshing Coolers</h1>
                        <h3></h3>
                        <p>Beverages</p>
                    </div>
                    <div className="page-footer">
                        <div className="buttons all">
                            <button onClick={() => handleExploreClick(true)}>Explore</button>
                        </div>
                        <p>
                            *Kazervant Kitchen offers a variety of Filipino dishes.
                        </p>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default Homepage;
