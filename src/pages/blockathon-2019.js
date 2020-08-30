import React from 'react'
import MUBCHeader from "../components/MUBCHeader";
import MUBCNavbar from "../components/MUBCNavbar";
import MUBCFooter from "../components/MUBCFooter";

const Blockathon_2019 = () => {
    return (
        <div id="blockathon-2019">
            <MUBCHeader/>
            <MUBCNavbar/>
            <img src={require('../images/piggy_bank.jpg')} alt="Piggy Bank"/>
            <h1>2019 MU BLOCKATHON</h1>
            <hr className="divider"/>
            <div id="blockathon-2019__description">
                <p>Business and Technical Case Competition for Miami University
                    Students</p>
                <br/>
                <p className="blockathon-2019__subheading">The 2019 MU Blockathon was the first hackathon that MUBC has
                    held
                    and we believe it was more than a
                    success. This was one of the first times that MUBC was able to see how its members and fellow
                    students
                    can innovate in this space. The main goal of the Blockathon was to be focused on business
                    applications
                    of the technology, and this is where the bulk of the prize money was awarded. The second portion of
                    the
                    prize money was awarded to the teams who could build the best proof of concept. This involved many
                    teams
                    using technologies such as Ethereum to build their ideas on. Each team’s business idea and proof of
                    concept was to be presented to our panel of judges at the end of the weekend.</p>
                <p className="blockathon-2019__subheading">Our panel of judges consisted of a plethora of professionals
                    from
                    the industry which made for an
                    excellent competition. We had Arthur Carvalho from FSB, Adam Koehler from CPROP, Vasanthi Chalasani
                    from
                    P&G, Patrick Young from Custody Digital Group, Spencer Applebaum from Multicoin Capital, Michael
                    Hiles
                    from 10XTS, John Bentley, II from 10XTS and Kelby Price from Kentucky Science and Technology
                    Corporation.

                    Through the help of our sponsors that came out we were able to have a weekend filled with food,
                    workshops and excellent competition. </p>
                <p className="blockathon-2019__subheading">Results:<br/>

                    After a great weekend of learning about Blockchain here are the results of the first ever Miami
                    University Blockathon!</p>
                <p className="blockathon-2019__rankings"><strong>Overall Rankings:</strong></p>
                <ol className="blockathon-2019__ranking__list">
                    <li><i>AlliedFund</i> by Karim Sammouri and Levent Yurdum</li>
                    <li><i>Chain Broker</i> by Tae Jin Kim, Aaron Hietanen, and Thomas Wright</li>
                    <li><i>HiredBlock</i> by Natalie Nguyen, Aaron Nguyen, Andre Le, Patrick Liem, and Tuan Le</li>
                </ol>
                <p className="blockathon-2019__rankings"><strong>Technical Rankings:</strong></p>
                <ol className="blockathon-2019__ranking__list">
                    <li><i>AlliedFund</i> by Karim Sammouri and Levent Yurdum</li>
                    <li><i>Chain Broker</i> by Tae Jin Kim, Aaron Hietanen, and Thomas Wright</li>
                    <li><i>HiredBlock</i> by Natalie Nguyen, Aaron Nguyen, Andre Le, Patrick Liem, and Tuan Le</li>
                </ol>
                <p className="blockathon-2019__subheading">Each team left with a cash prize and a better understanding
                    of how Blockchain works and how it can be applied to industry. We can't wait to see what next year
                    brings!</p>
            </div>
            <div id="blockathon-2019__qa">
                <h1>PARTICIPATING IN THE EVENT</h1>
                <hr className="divider"/>
                <div>
                    <h4>Q: How much do I need to know about blockchain to compete?</h4>
                    <p>A: None, though a basic understanding is recommended. We will also have education sessions for
                        those who want/ need it before and during the competition. We will also have professional
                        mentors that will be walking around the rooms all weekend. There are also learning resources
                        here.</p>
                    <h4>Q: Do I need technical (coding) experience to compete?</h4>
                    <p>A: NO! There are separate technical prizes of around $300, however, the majority of the prize
                        pool does not consider technical demonstrations, only a business model.</p>
                    <h4>Q: How do I compete/ participate?</h4>
                    <p>A: Theorize a business model that is reliant on a distributed ledger (Blockchain). You should
                        pitch a blockchain solution that provides new value and solves a business or world problem.</p>
                    <h4>Q: Do I need to use a specific blockchain technology?</h4>
                    <p>A: No. Any distributed ledger technology (DLT) is acceptable. If the core concepts of DLT are
                        adhered to in your idea/ pitch, you don't need to specify any exact blockchain.</p>
                    <h4>Q: What criteria will my pitch be evaluated with?</h4>
                    <p>A: Professionalism, creativity, validity of the business model, ability to scale, the
                        understanding and implementation of Blockchain in the model, and the usefulness of your
                        solution. You will have 10 minutes to present, with an extra 5 minutes if you have a proof of
                        concept. We will send out the final rubric during the event.</p>
                    <h4>Q: What will I learn/ gain from this experience?</h4>
                    <p>A: The ability to explain blockchain to friends, colleagues, and employers, multiple cash prizes
                        from a pool of around $1000, and a free t-shirt to remember the event by. Also, the ability to
                        gain and solidify connections with other University students, professionals, and alumni.</p>
                    <h4>Q: Do I need to be there for the entire event?</h4>
                    <p>A: Not exactly. You need to be there to register and present, but you will regret not being in
                        Benton or Farmer on Saturday as we will have professional presenters and blockchain developers
                        mentoring you through your struggles. We will also have free food throughout the weekend in the
                        Engineering school. However, you can do your work wherever if you so choose.</p>
                    <h4>Q: Do I need a team?</h4>
                    <p>A: Yes, teams of 3-5 participants will compete. If you do not have a team, we will assist you in
                        finding one by Friday, November 15th.</p>
                </div>
            </div>
            <MUBCFooter/>
        </div>
    )
}
export default Blockathon_2019