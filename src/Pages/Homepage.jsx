import React, { useEffect } from 'react';
import '../css/style.css';
import { handleFirstPageAnimation } from '..//javascript/script';

const Homepage = () => {
    useEffect(() => {
        handleFirstPageAnimation();
    }, []);
    return (
        <>
            <nav className="nav-container">
                <img className="logo" src="../logo/kazervant2.png" alt="Kazervant logo" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>Menu</li>
                    <li><a href="/recipe">Recipe</a></li>
                    <li><a href="/about_us">About us</a></li>
                </ul>
                <div className="icons">
                    <i className="bx bx-store"></i>
                    <i className="bx bx-user-circle"></i>
                </div>
            </nav>

            <ul className="pages">
                <li>
                    <video src="../Images/video_BG.mp4" muted autoPlay loop></video>
                    <div id="first-page" className="page-info">
                        <h1>KAZERVANT KITCHEN</h1>
                        <p></p>
                    </div>
                    <div id="first-page-part" className="page-footer">
                        <div className="first-page-button">
                            <button>Explore</button>
                            <button>Details</button>
                        </div>
                        <p>
                            *Kazervant Kitchen offers a variety of grilled dishes.
                            <a href="#">See Details</a>
                        </p>
                    </div>
                </li>

                <li>
                    <img src="../Images/chicken_lumpia.png" alt="Chicken-kebab" />
                    <div className="page-info">
                        <h1>Chicken Lumpia</h1>
                        <p>starting at ₱500.00</p>
                    </div>
                    <div className="page-footer">
                        <div className="buttons all">
                            <button>Explore</button>
                            <a href="../html/chicken_lumpia.html"><button>Recipe</button></a>
                        </div>
                        <p>
                            *Kazervant Kitchen offers a variety of grilled dishes.
                            <a href="#">See Details</a>
                        </p>
                    </div>
                </li>

                <li>
                    <img src="../Images/pork_chop.png" alt="pork-chop" />
                    <div className="page-info model-x">
                        <h1>Pork Chop</h1>
                        <h3>starting at ₱700.00</h3>
                        <p></p>
                    </div>
                    <div className="page-footer">
                        <div className="buttons all">
                            <button>Explore</button>
                            <a href="../html/pork_chop.html"><button>Recipe</button></a>
                        </div>
                        <p>
                            *Kazervant Kitchen offers a variety of grilled dishes.
                            <a href="#">.</a>
                        </p>
                    </div>
                </li>

                <li>
                    <img src="../Images/grilled.png" alt="drinks" />
                    <div className="page-info model-x">
                        <h1>From the Grill</h1>
                        <h3>starting at ₱700.00</h3>
                        <p></p>
                    </div>
                    <div className="page-footer">
                        <div className="buttons all">
                            <button>Explore</button>
                            <button>Details</button>
                        </div>
                        <p>
                            *Kazervant Kitchen offers a variety of grilled dishes.
                            <a href="#">.</a>
                        </p>
                    </div>
                </li>

                <li>
                    <img src="../Images/drinks.png" alt="drinks" />
                    <div className="page-info">
                        <h1>Refreshing Coolers</h1>
                        <h3>starting at ₱500.00</h3>
                        <p></p>
                    </div>
                    <div className="page-footer">
                        <div className="buttons all">
                            <button>Explore</button>
                            <button>Details</button>
                        </div>
                        <p>
                            *Kazervant Kitchen offers a variety of grilled dishes.
                            <a href="#">.</a>
                        </p>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default Homepage;
