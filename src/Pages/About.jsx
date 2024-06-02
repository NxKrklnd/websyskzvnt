import React from 'react';
import { Link } from 'react-router-dom';
import '../css/about_us.css'; // Import your CSS file here

function About() {
    return (
        <>
            <section className="image-container">
                <div className="image-overlay">
                    <h1></h1>
                </div>
            </section>

            <section className="section-2 fade-in">
                <div className="about-2">
                    <img src="../logo/black.png" alt="Kazervant logo" className="pic-2" />

                    <div className="text-2">
                        <h5>Filipino cuisine: where flavors forge connections like <span>no other</span></h5>
                        <p>
                            Welcome to Kazervant Kitchen, where Filipino culinary traditions come alive with every bite. From
                            sizzling grilled specialties to refreshing drinks and delightful kakanins, our menu is a celebration
                            of vibrant flavors and warm hospitality. Each dish is a tribute to the rich tapestry of Filipino
                            cuisine, lovingly prepared to transport you to the heart of our culinary heritage. Join us for an
                            unforgettable dining experience and let us share the essence of Filipino flavors with you at
                            Kazervant Kitchen.
                        </p>
                    </div>
                </div>
            </section>

            <section id="Section-3">
                <div className="section-3-logo">
                    <img src="../logo/nicko.png" alt="About Img" />
                </div>

                <div className="section-3-about">
                    <h4></h4>
                    <h1>Nicko Jay Tan</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis fugiat a dolorem at similique maxime dolorum dolore
                        enim dicta voluptatibus, illum recusandae, vel optio tempore
                        ipsum incidunt eum. Aspernatur, repellendus.
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
                            <li><a href="facebook.html"><i className="fab fa-facebook"></i> Facebook</a></li>
                            <li><a href="tiktok.html"><i className="fab fa-tiktok"></i> Tiktok</a></li>
                            <li><a href="instagram.html"><i className="fab fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="Section-4">
                <div className="section-4-logo">
                    <img src="../logo/mat.png" alt="About Img" />
                </div>

                <div className="section-4-about">
                    <h4></h4>
                    <h1>Matheo Jay Fabre</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis fugiat a dolorem at similique maxime dolorum dolore
                        enim dicta voluptatibus, illum recusandae, vel optio tempore
                        ipsum incidunt eum. Aspernatur, repellendus.
                    </p>
                    <div className="email-4">
                        <ul>
                            <li>
                                <span className="email-logo-4">
                                    <i className="far fa-envelope"></i>
                                </span>
                                <p>Email ID</p>
                                <span className="separater-4">:</span>
                                <p>Matheo@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <div className="social-4">
                        <h3>Social Media</h3>
                        <ul>
                            <li><a href="facebook.html"><i className="fab fa-facebook"></i> Facebook</a></li>
                            <li><a href="tiktok.html"><i className="fab fa-tiktok"></i> Tiktok</a></li>
                            <li><a href="instagram.html"><i className="fab fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <nav className="nav-container-about">
                <img className="logo-about" src="../logo/kazervant2.png" alt="Kazervant logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/recipe">Recipe</Link></li>
                    <li><Link to="/about_us">About us</Link></li>
                </ul>
                <div className="icons-about">
                    <i className="bx bx-store"></i>
                    <i className="bx bx-user-circle"></i>
                </div>
            </nav>
        </>
    );
}

export default About;
