import React from "react"
import {FaTwitter, FaInstagram, FaYoutube, FaLinkedin} from "react-icons/fa"
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import SEO from "../components/seo"
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"
import MUBCFooter from "../components/MUBCFooter"


const IndexPage = () => (
    <div>
        <SEO title="Home"/>
        <MUBCHeader/>
        <MUBCNavbar/>
        <div id="mubc-home__banner">
            <div>
                <div>
                    <h1>MU BLOCKCHAIN</h1>
                    <a href="https://muhub.campuslabs.com/engage/organization/blockchain/roster">Get in Touch</a>
                </div>
            </div>
        </div>
        <div id="mubc-home__sessions">
            <h1>VIRTUAL BLOCKCHAIN CONFERENCE: FEATURED SESSIONS</h1>
            <hr className="divider"/>
            <div id="mubc-home__virtual-blockchain-conference">
                <img className="mubc-home__sessions__carousel__image" src={require("../images/slideshow_1.jpg")}/>
                <img className="mubc-home__sessions__carousel__image" src={require("../images/slideshow_2.jpg")}/>
                <img className="mubc-home__sessions__carousel__image" src={require("../images/slideshow_3.jpg")}/>
                <img className="mubc-home__sessions__carousel__image" src={require("../images/slideshow_4.jpg")}/>
            </div>
            <div id="mubc-home__conference-link">
                <a href="http://virtualblockchain.io/">Visit the Virtual Blockchain Conference Site</a>
            </div>
            <div id="mubc-home__blockathon">
                <div>
                    <div>
                        <h2>MIAMI UNIVERSITY BLOCKATHON 2019</h2>
                    </div>
                    <div>
                        <a href="https://mubc.io/2019-blockathon">EVENT RECAP</a>
                    </div>
                </div>
            </div>
            <div id="mubc-home__about-us">
                <h1>About Us</h1>
                <hr className="divider"/>
                <div className="mubc-home__about-us__container">
                    <div><img src={require('../images/about_1.jpg')} alt="About 1"/></div>
                    <div>
                        <h2>Organization Mission Statement</h2>
                        <p>The purpose of the Miami University Blockchain Club (MUBC) is to actively facilitate
                            understanding of blockchain technology through group discussion, organized events, and guest
                            speakers. MUBC serves to grow the understanding of blockchain technology and its potential
                            and current impact on a global and personal scale. MUBC aims to help members develop
                            valuable connections in the blockchain space while encouraging members to pursue blockchain
                            based interests, internships, and careers. We aim to be the best Blockchain Club in the
                            Midwest!</p>
                    </div>
                </div>
                <div className="mubc-home__about-us__container">
                    <div>
                        <h2>Get Involved!</h2>
                        <p>If you are interested in joining the Miami University Blockchain Club (MUBC) please send an
                            e-mail to mubc@miamioh.edu, with your name, contact information, and why you would be a good
                            fit, or simply fill out the form below. Also, check us out on the hub!</p>
                    </div>
                    <div>
                        <img src={require('../images/about_2.jpg')} alt="About 2"/>
                    </div>
                </div>
            </div>
            <div id="mubc-home__blockchain-conference">
                <div>
                    <div>
                        <h2>2019 MIAMI UNIVERSITY BLOCKCHAIN CONFERENCE</h2>
                    </div>
                    <div>
                        <a href="https://mubc.io/2019-blockathon">EVENT RECAP</a>
                    </div>
                </div>
            </div>
            <div id="mubc-home__socials">
                <h1>Socials</h1>
                <hr className="divider"/>
                <div>
                    <a className="mubc-home__media-link" href="https://twitter.com/mubcblockchain"><FaTwitter
                        className="mubc-home__icon"/></a>
                    <a className="mubc-home__media-link" href="https://www.instagram.com/mublockchainclub/"><FaInstagram
                        className="mubc-home__icon"/></a>
                    <a className="mubc-home__media-link" href="https://www.linkedin.com/company/mubc/"><FaLinkedin
                        className="mubc-home__icon"/></a>
                    <a className="mubc-home__media-link"
                       href="https://www.youtube.com/channel/UC78tQagLk8hqRSsn1zkdySw"><FaYoutube
                        className="mubc-home__icon"/></a>
                </div>
            </div>
            <div id="mubc-home__contact">
                <h1>Contact Us</h1>
                <hr className="divider"/>
                <div id="mubc-home__contact__form__container">
                    <div id="mubc-home__contact__left">
                        <h4>Reach out to us to join or for anything else!</h4>
                        <form>
                            <input type="text" name="name" placeholder="Name*" required/>
                            <input type="text" name="email" placeholder="Email*" required/>
                            <input type="text" name="number" placeholder="Number*" required/>
                            <textarea placeholder="Why would you be a good fit to join us or what is your request?">
                   </textarea>
                            <br/>
                            <Button id="mubc-home__contact__send">Send</Button>
                        </form>
                    </div>
                    <div id="mubc-home__contact__right">
                        <h4>For any communications requests: </h4>
                        <p>Adrian Czajka</p>
                        <p>Miami University Blockchain Club VP of Public Relations</p>
                        <p>+1 (216) 952 9841</p>
                        <p><a href="mailto:czajkaat@miamioh.edu">czajkaat@miamioh.edu</a></p>
                        <br/>
                        <br/>
                        <p><a href="https://mubc.io/sponsor-us">Click here</a> for sponsorship info</p>
                        <h4>Miami University Blockchain Club</h4>
                        <p>83 North Patterson Avenue, Oxford, Ohio 45056, United States</p>
                    </div>
                </div>
            </div>
            <div id="mubc-home__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.1394750606646!2d-84.73194318463139!3d39.511341679480694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88403da0252af58b%3A0xff3c9ac9122d97ea!2sFarmer%20School%20of%20Business!5e0!3m2!1sen!2sus!4v1598650694110!5m2!1sen!2sus"
                ></iframe>
            </div>
        </div>
        <MUBCFooter/>
    </div>
)

export default IndexPage
