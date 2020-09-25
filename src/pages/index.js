import React from "react"
import {FaTwitter, FaInstagram, FaYoutube, FaLinkedin} from "react-icons/fa"
import {Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import SEO from "../components/seo"
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"
import MUBCFooter from "../components/MUBCFooter"
import MUBCEventRow from "../components/MUBCEventRow";


const IndexPage = () => (
    <div>
        <SEO title="Home" description="Miami University Blockchain Club home page"/>
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
            <div className="fall-2020">
                <h1>Fall 2020 Schedule</h1>
                <hr className="divider"/>
                <h5>Click on a row to view details!</h5>
                <MUBCEventRow 
                    date={'15 SEP'}
                    title={'Info Night #1'}
                    body={'Wondering if you should care what Blockchain is? Blockchain and smart contracts, AKA the internet of value, is at the bleeding edge of functionality we can capture from the decade of the smartphone. Wondering what Blockchain is? We’ll run you through fantastic online resources built by our partners in the Midwest Blockchain Consortium to jumpstart your knowledge within the industry. Wondering what MU Blockchain Club does, and how to take advantage of our opportunities? We’ll run you through our semester schedule, the 2020 Blockathon, the MUBC Incentive App, and professional placement through the Midwest Blockchain Consortium. Wondering how to get hands-on experience developing around a blockchain? We’ll run you through the MUBC Incentive App.'} links={'https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content'}
                    links={'https://www.tinyurl.com/mubc-infonight-1'}
                    image={<img src={require('../../static/assets/images/info.png')} alt="Info Night 1"/>}
                />
                <MUBCEventRow 
                    date={'16 SEP'}
                    title={'Info Night #2'}
                    body={'Wondering if you should care what Blockchain is? Blockchain and smart contracts, AKA the internet of value, is at the bleeding edge of functionality we can capture from the decade of the smartphone. Wondering what Blockchain is? We’ll run you through fantastic online resources built by our partners in the Midwest Blockchain Consortium to jumpstart your knowledge within the industry. Wondering what MU Blockchain Club does, and how to take advantage of our opportunities? We’ll run you through our semester schedule, the 2020 Blockathon, the MUBC Incentive App, and professional placement through the Midwest Blockchain Consortium. Wondering how to get hands-on experience developing around a blockchain? We’ll run you through the MUBC Incentive App.'}
                    links={'https://www.tinyurl.com/mubc-infonight-2'}
                    image={<img src={require('../../static/assets/images/info.png')} alt="Info Night 2"/>}
                    />
                <MUBCEventRow
                    date={'23 SEP'}
                    title={'Workshop #1: Build and Deploy a Supply Chain dApp'}
                    body={'Work with skilled developers from the renowned Ethereum development tool Truffle to deploy and test a full supply chain app! Code repository will be provided, and MUBC’s team will serve as TA’s as well. If you’re looking to master the competition at Blockathon 2020, this workshop will give you a technical edge.'}
                    links={'https://www.trufflesuite.com/'}
                    image={<img src={require('../../static/assets/images/truffle.png')} alt="Workshop #1 with Truffle" />}
                />
                <MUBCEventRow
                    date={'8 OCT'}
                    title={'Crypto Bull Market v2: How to Yield Farm'}
                    body={'Join the Midwest Blockchain Consortium to dive into the incredible world of decentralized finance, and the subsequent rise of yield farming these DeFi protocols. Finally, we will explore how anyone can start yield farming significant 50%+ APY returns from the Yearn Finance protocol. Tickets will be sold for $25 on eventbrite. 25 Dai (Dollar stablecoin) will be provided to you at the time of the workshop if you attend, allowing you to follow along. Alternatively, you can provide your own Dai or choose not to invest and watch instead!'}
                    links={'https://www.yearn.finance'}
                    image={<img src={require('../../static/assets/images/yearn.png')} alt="How to Yield Farm: Yearn Finance" />}    
                />
                <MUBCEventRow
                    date={'22 OCT'}
                    title={'Blockchain: The Antidote to Mail-in Ballot Fraud'}
                    body={'Join Pete Martin, CEO of Blockchain-powered voting platform Votem, to discuss the current pitfalls in how our elections handle the voting procedure, and how blockchain has the potential to guarantee each constituent a single confidential vote while allowing verification by any necessary party.'}
                    links={'https://www.votem.com'}
                    image={<img src={require('../../static/assets/images/votem.png')} alt="Mail Fraud Prevention with Votem" />}    
                />
                <MUBCEventRow
                    date={'29 OCT'}
                    title={'Automating Compliance and Financial Auditing with Blockchain'}
                    body={'Learn how integrating business logic into smart contracts can provide immutable records of chain of custody. More details to come!'}
                    image={<img src={require('../../static/assets/images/audit.jpg')} alt="Auditing with Blockchain" />}
                />
                <MUBCEventRow
                    date={'5 NOV'}
                    title={'Where and When to use Emerging Techonologies in Your Business'}
                    body={'Learn where technologies like AI, Cloud, Internet of Things, 3D printing, and blockchain can intersect with real business use cases. More details to come!'}
                    image={<img src={require('../../static/assets/images/emerging.jpeg')} alt="Workshop #1" />}
                />
                <MUBCEventRow
                    date={'19 NOV'}
                    title={'Workshop #2: Blockathon Preparation'}
                    body={'More info to come!'}
                    image={<img src={require('../../static/assets/images/truffle.png')} alt="Workshop #2" />}    
                />
            </div>
        <div id="mubc-home__sessions">
            <h1>VIRTUAL BLOCKCHAIN CONFERENCE: FEATURED SESSIONS</h1>
            <hr className="divider"/>
            <div id="mubc-home__virtual-blockchain-conference">
                <img className="mubc-home__sessions__carousel__image" src={require("../../static/assets/images/slideshow_1.jpg")}/>
                <img className="mubc-home__sessions__carousel__image" src={require("../../static/assets/images/slideshow_2.jpg")}/>
                <img className="mubc-home__sessions__carousel__image" src={require("../../static/assets/images/slideshow_3.jpg")}/>
                <img className="mubc-home__sessions__carousel__image" src={require("../../static/assets/images/slideshow_4.jpg")}/>
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
                    <div><img src={require('../../static/assets/images/about_1.jpg')} alt="About 1"/></div>
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
                        <img src={require('../../static/assets/images/about_2.jpg')} alt="About 2"/>
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
