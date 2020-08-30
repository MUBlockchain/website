import React from 'react'
import {Carousel} from "react-bootstrap";
import MUBCHeader from "../components/MUBCHeader";
import MUBCNavbar from "../components/MUBCNavbar";
import MUBCFooter from "../components/MUBCFooter";

const Conference_2019 = () => {
    return (
        <div>
            <MUBCHeader/>
            <MUBCNavbar/>
            <div id="conference-2019">
                <img src={require('../images/piggy_bank.jpg')} alt="Piggy Bank"/>
                <div id="conference-2019__info">
                    <h1>2019 MIAMI UNIVERSITY BLOCKCHAIN CONFERENCE</h1>
                    <hr className="divider"/>
                    <div id="conference-2019__info__container">
                        <div id="conference-2019__info__left">
                            <h4>About the Conference</h4>
                            <p>The event was hosted on <strong>Sunday, February 17th</strong>, and was a day full of
                                wonderful speakers
                                with many great insights and topics relating to Blockchain. The whole event ran
                                from <strong>9
                                    am to 5 pm</strong> with many guest speakers ranging from CEO's of startups, to
                                Blockchain leads
                                of large organizations like <a href="http://pg.com/">P&G</a> and <a
                                    href="https://www2.deloitte.com/us/en.html">Deloitte</a>, to students that have
                                boldly pursued their
                                passions and built their own startups. The topics and applications included; Supply
                                Chain, Accounting, Finance, Venture Capital and Investing, Entrepreneurship,
                                Engineering, Law, Government, and Sustainability. The event had around 100 attendees in
                                person, and another 200 that live streamed the event through our <a
                                    href="https://www.youtube.com/channel/UC78tQagLk8hqRSsn1zkdySw"><strong>YouTube
                                    page</strong></a>, where we
                                have also posted videos from all of the talks.</p>
                            <p>Speakers said the event was very professional and up to par with other large Conferences
                                put on by companies like <a href="https://www.blocklandcleveland.com/">Blockland
                                    Cleveland</a>. MUBC plans to host the Second Annual Miami
                                University Blockchain Conference next Spring. Our next big event is our <a
                                    href="https://mubc.io/registration-1"><strong>Blockchain
                                    Hackathon</strong></a> coming up in the fall. We are always looking for <a
                                    href="https://mubc.io/2019-conference#"><strong>sponsors!</strong></a></p>
                        </div>
                        <div id="conference-2019__info__right">
                            <h4>Conference in the News</h4>
                            <p>MUBC was in the news!!</p>
                            <a href="http://goo.gl/CcFRcQ">FSB ARTICLE</a>
                        </div>
                    </div>
                </div>
                <div id="conference-2019__photos">
                    <h1>PHOTOS FROM THE CONFERENCE</h1>
                    <hr className="divider"/>
                    <Carousel id="conference-2019__slideshow">
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_1.jpg')}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_2.jpg')}
                                alt="Second Slide"
                            />

                            <Carousel.Caption>
                                <p>Michael Hiles, CEO of 10XTS</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow3.jpg')}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <p>Michael Hiles, CEO of 10XTS with his "Intro to Blockchain" Talk</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_4.jpg')}
                                alt="Fourth slide"
                            />

                            <Carousel.Caption>
                                <p>Vasanthi Chalasani, Director of IT at P&G about their Supply Chain Blockchain
                                    Solution and how it affects corporations</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_5.jpg')}
                                alt="Fifth slide"
                            />

                            <Carousel.Caption>
                                <p>Jack Gilcrest and Karan Gupta from CleverApply, an MUBC Startup focusing on
                                    International Student Application process and Document Management</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_6.jpg')}
                                alt="Sixth slide"
                            />

                            <Carousel.Caption>
                                <p>Permissioned Blockchain Solutions</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_7.jpg')}
                                alt="Seventh slide"
                            />

                            <Carousel.Caption>
                                <p>Charlie Lougheed Co-Founder of Unify Project. Talked about the Socioeconomic benefit
                                    of Blockchain.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_8.jpg')}
                                alt="Eigth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_9.jpg')}
                                alt="Ninth slide"
                            />

                            <Carousel.Caption>
                                <p>John Squires, CEO and Founder of Finclusive</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_10.jpg')}
                                alt="Tenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_11.jpg')}
                                alt="Eleventh slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_12.jpg')}
                                alt="Twelfth slide"
                            />
                            <Carousel.Caption>
                                <p>Nico Katsafanas and Hyden Hoogerhyde with Block Key Capital, an MUBC Startup</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_13.jpg')}
                                alt="Thirteenth slide"
                            />
                            <Carousel.Caption>
                                <p> Billy Becker and Dhairya Desai with blOX Consulting on what it's like Consulting in
                                    the Blockchain space</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="conference-2019__slideshow_image"
                                src={require('../images/conference_slideshow_14.jpg')}
                                alt="Fourteenth slide"
                            />
                            <Carousel.Caption>
                                <p> Ashton Barger President of MUBC, CEO and Co-Founder of blOX Consulting, CMO and Co-Founder of CleverApply</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div id="conference-2019__recording">
                    <h1>LIVESTREAM</h1>
                    <hr className="divider"/>
                    <iframe src="https://www.youtube.com/embed/NyAuB-qD9c0" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className="conference-2019__guests">
                    <h1>KEYSTONE ADDRESS</h1>
                    <hr className="divider"/>
                    <div>
                        <div>
                            <img src={require('../images/luke_sully.png')} alt="Luke Sully"/>
                            <h4>Luke Sully</h4>
                            <p>Luke Sully is founder and CEO of Custody Digital Group, a UK/US digital asset custodian.
                                CusDG provides an insured, highly secure, institutional-grade custodian service for a
                                variety

                                of digital assets and blockchain based information systems for organisations,

                                consortia and governments. </p>
                            <a href="https://www.linkedin.com/in/lukesullyblockchain/">LINKEDIN</a>
                        </div>
                    </div>
                </div>
                <div className="conference-2019__guests">
                    <h1>INDUSTRY/GOVERNMENT SPEAKERS</h1>
                    <hr className="divider"/>
                    <div>
                        <div>
                            <img src={require('../images/wendy_henry.jpg')} alt="Wendy Henry"/>
                            <h4>Wendy Henry</h4>
                            <p> Managing Partner and Blockchain Lead for Government and Public Services at <a
                                href="https://www2.deloitte.com/us/en.html">Deloitte</a></p>
                            <a href="https://www.linkedin.com/in/wendy-henry-6819b93/">LINKEDIN</a>
                        </div>
                        <div>
                            <img src={require('../images/vasanthi_chalasani.png')} alt="Vasanthi Chalasani"/>
                            <h4>Vasanthi Chalasani</h4>
                            <p>Director of IT & Shared Services at <a href="https://us.pg.com/">P&G</a>. </p>
                            <a href="https://www.linkedin.com/in/vasanthi-chalasani-624138b/">LINKEDIN</a>
                        </div>
                        <div>
                            <img src={require('../images/chris_berry.png')} alt="Chris Berry"/>
                            <h4>Chris Berry</h4>
                            <p>Chief of Staff at Ohio Treasurer's Office </p>
                            <a href="https://www.linkedin.com/in/chris-berry-073aa75/">LINKEDIN</a>
                        </div>
                    </div>
                </div>
                <div className="conference-2019__guests">
                    <h1>STARTUP FOUNDERS/CEO SPEAKERS</h1>
                    <hr className="divider"/>
                    <div>
                        <div>
                            <img src={require('../images/charlier_lougheed.jpg')} alt="Charlie Lougheed"/>
                            <h4>Charlie Lougheed</h4>
                            <p> Co-founder and Partner at <a href="https://www.unifyproject.org/">Unify Project</a>.
                                Managing Director of the Lougheed Initiative.
                                Believer in Blockchain for Socioeconomic benefit </p>
                            <a href="https://www.linkedin.com/in/lougheed/">LINKEDIN</a>
                        </div>
                        <div>
                            <img src={require('../images/john_squires.jpg')} alt="Block Key Capital"/>
                            <h4>John Squires</h4>
                            <p>Co-Founder of <a href="https://www.finclusivecapital.com/">Finclusive</a>.

                                Partner and Chairman at Dilworth Paxson, LLP</p>
                            <a href="https://www.linkedin.com/in/josquires/">LINKEDIN</a>
                        </div>
                        <div>
                            <img src={require('../images/michael_hiles.jpg')} alt="Clever Apply"/>
                            <h4>Michael Hiles</h4>
                            <p>Founder and CEO of <a href="https://10xts.com/">10XTS</a></p>
                            <a href="https://www.linkedin.com/in/michaelhiles/">LINKEDIN</a>
                        </div>
                    </div>
                </div>
                <div className="conference-2019__guests">
                    <h1>STUDENT STARTUP PRESENTERS</h1>
                    <hr className="divider"/>
                    <div>
                        <div>
                            <img src={require('../images/clever_apply.png')} alt="Clever Apply"/>
                            <h4>CleverApply</h4>
                            <p> CleverApply is working on the College application process to remove inefficiencies for
                                international students and Colleges, by eliminating redundant fees and services with the
                                Hyperledger Blockchain.</p>
                        </div>
                        <div>
                            <img src={require('../images/block_key_capital_logo.png')} alt="Block Key Capital"/>
                            <h4>Block Key Capital</h4>
                            <p>Block Key Capital (BKC) is a US-based research and investment firm dealing exclusively
                                with the emerging cryptoasset class. Founded by current Miami Students</p>
                            <a href="https://blockkeycapital.io/">Find Out More</a>
                        </div>
                        <div>
                            <img src={require('../images/blox_logo.png')} alt="Clever Apply"/>
                            <h4>blOX Consulting</h4>
                            <p>A Student-led Startup for Blockchain Consulting. They plan to help individuals and
                                startups with research and implmentation of Blockchain Solutions. Founded by Ashton
                                Barger, Billy Becker, Jack Gilcrest, and Dhairya Desai</p>
                        </div>
                    </div>
                </div>
            </div>
            <MUBCFooter/>
        </div>
    )
}
export default Conference_2019