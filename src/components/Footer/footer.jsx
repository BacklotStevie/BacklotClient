import React from 'react';
import { Link } from 'react-router-dom'
import './footer.css'


const Footer = () => {
    return (
        <div className="footer row text-center bg-dark text-white ml-5 mr-5 mt-5">
            <div className="mission-footer col-12 col-md-4 mt-5 mb-5 border border-white border-top-0 border-bottom-0 border-left-0">
                <h4 className="services-footer">Our Mission Statement</h4>
                <p className=''>Inside the Backlot is a community. A place for cinephiles and filmmakers to connect and interact with one another. Our goal here at the Backlot is to expose the public to new films and up-and-coming filmmakers looking to leave their mark on the industry. For many, film is a hobby. For some, film is a passion. One thing is certain: film is art, and like any art, it’s a way to get your voice heard. Here are our voices.
                <br /><br />Welcome to Inside the Backlot.</p>
                <div>
                    <a href="https://twitter.com/insidebacklot?lang=en"><img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png" className="social-icons-footer"></img></a>
                    <a href="https://www.instagram.com/insidethebacklot/?hl=en"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" className="social-icons-footer"></img></a>
                    <a href="https://www.youtube.com/channel/UCjzTSGj_1r7K-W3kzZGYIdw"><img src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" className="social-icons-footer"></img></a>
                </div>
            </div>
            <div className="col-12 col-md-4 p-1 mt-5 mb-5 border border-white border-top-0 border-bottom-0 border-left-0 d-flex justify-content-around">
                <div className='mission-footer'>
                    <h4>Genres</h4>
                    <ul className='list-unstyled'>
                        <li>Action</li>
                        <li>Adventure</li>
                        <li>Comedy</li>
                        <li>Drama</li>
                        <li>Horror/Thriller</li>
                        <li>Mystery</li>
                        <li>Romance</li>
                        <li>Sci-Fi</li>
                    </ul>
                </div>
                <div>
                    <h4>Where to Listen</h4>
                    <ul className='list-unstyled'>
                        <li><a href="//podcasts.apple.com/us/podcast/inside-the-backlot/id1460214563">Apple Podcasts</a></li>
                        <li><a href="https://open.spotify.com/show/4qRzBpNjTMGSKWTixYZQtY?si=3x-7yXOFScqqA5iWYszEEA">Spotify</a></li>
                        <li><a href="https://insidethebacklot.podbean.com/">Podbean</a></li>
                    </ul>
                </div>
            </div>
            <div className=" mission-footer col-12 col-md-4 mt-5 mb-5">
                <h1>Contact Us</h1>
                <div>
                    <form className="contact-form" method="post" action="contactform.php">
                        <div className="contact-firstname">
                            <label for="name"></label>
                            <input type="text" id="name" name="name" placeholder="Your name" required></input>
                        </div>

                        <div className="contact-email">
                            <label for="email"></label>
                            <input type="text" id="email" name="email" placeholder="Your email" required></input>
                        </div>

                        <div className="contact-subject">
                            <label for="subject"></label>
                            <textarea type="text" name="subject" placeholder="Your message" required></textarea>
                        </div>

                        <input className="contact-submit bg-medium" type="submit" value="Submit"></input>
                    </form>
                </div>
                {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIG0g4jzqFriJ0-zQ0EMsrDAaXPUIj183O0f5hF0Qt15foCg/viewform?embedded=true" className="footer-form" width="400" height="470" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
            </div>
        </div>
    );
};

export default Footer;
