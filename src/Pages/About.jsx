import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/about_us.css';

const About = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.nav-container-about');
            if (window.scrollY > 450) {
                nav.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            } else {
                nav.style.backgroundColor = 'transparent';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <section className="image-container">
                <div className="image-overlay">
                </div>
            </section>

            <section className="section-2 fade-in">
                <div className="about-2">
                    <img src={`${process.env.PUBLIC_URL}/logo/black.webp`} alt="Kazervant logo" className="pic-2" />
                    <div className="text-2">
                        <h5>
                            Filipino cuisine: where flavors forge connections like <span>no other</span>
                        </h5>
                        <p>
                            Welcome to Kazervant Kitchen, where Filipino culinary traditions come alive with every bite. From sizzling grilled specialties to refreshing drinks, our menu is a celebration of vibrant flavors and warm hospitality. Each dish is a tribute to the rich tapestry of Filipino cuisine, lovingly prepared to transport you to the heart of our culinary heritage. Join us for an unforgettable dining experience and let us share the essence of Filipino flavors with you at Kazervant Kitchen.
                        </p>
                    </div>
                </div>
            </section>

            <section id="Section-3">
                <div className="section-3-logo">
                    <img src={`${process.env.PUBLIC_URL}/logo/nicko.webp`} alt="About Img" />
                </div>
                <div className="section-3-about">
                    <h1>Nicko Jay Tan</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat a dolorem at similique maxime dolorum dolore enim dicta voluptatibus, illum recusandae, vel optio tempore ipsum incidunt eum. Aspernatur, repellendus.
                    </p>
                    <div className="email-3">
                        <ul>
                            <li>
                                <span className="email-logo-3">
                                    <i className="far fa-envelope"></i>
                                </span>
                                <p>Email ID</p>
                                <span className="separater-3">:</span>
                                <p>nicko@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="social-3">
                        <h3>Social Media</h3>
                        <ul>
                            <li>
                                <a href="facebook.html">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="tiktok.html">
                                    <i className="fab fa-tiktok"></i>
                                </a>
                            </li>
                            <li>
                                <a href="instagram.html">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="Section-4">
                <div className="section-4-logo">
                    <img src={`${process.env.PUBLIC_URL}/logo/mat.webp`} alt="About Img" />
                </div>
                <div className="section-4-about">
                    <h1>Matheo Jay Fabre</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat a dolorem at similique maxime dolorum dolore enim dicta voluptatibus, illum recusandae, vel optio tempore ipsum incidunt eum. Aspernatur, repellendus.
                    </p>
                    <div className="email-4">
                        <ul>
                            <li>
                                <span className="email-logo-4">
                                    <i className="far fa-envelope"></i>
                                </span>
                                <p>Email ID</p>
                                <span className="separater-4">:</span>
                                <p>matheo@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="social-4">
                        <h3>Social Media</h3>
                        <ul>
                            <li>
                                <a href="facebook.html">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="tiktok.html">
                                    <i className="fab fa-tiktok"></i>
                                </a>
                            </li>
                            <li>
                                <a href="instagram.html">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <nav className="nav-container-about">
                <Link to="/">
                    <img className="logo-about" src={`${process.env.PUBLIC_URL}/logo/kazervant2.png`} alt="Kazervant logo" />
                </Link>
                <ul className={`nav-links-about ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/recipe" onClick={closeMenu}>Recipes</Link></li>
                    <li><Link to="/About" onClick={closeMenu}>About us</Link></li>
                    <li className="close-button-about" onClick={closeMenu}>✕</li>
                </ul>
                <div className="icons-about" onClick={toggleMenu}>
                    <i className="bx bx-menu"></i>
                </div>
            </nav>
        </>
    );
}

export default About;
