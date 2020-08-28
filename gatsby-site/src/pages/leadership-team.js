import React from "react"
import { Link } from "gatsby"
import "../components/app.css"
import SEO from "../components/seo"
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"
import MUBCFooter from "../components/MUBCFooter"

const LeadershipTeam = () => (
  <div>
    <MUBCHeader />
    <MUBCNavbar />
    <br/>
    <br/>
    <SEO title="MUBC Leadership Team"/>
    <h2 id="leadership-team__header">Executive Leadership Team</h2>
    <hr className="divider"/>
    <div className="leadership-team__row">
      <div className="leadership-team__column">
        <img src={require("../images/jack_gilcrest.jpeg")} alt="Jack Gilcrest"/>
        <p>Jack Gilcrest</p>
        <p>President</p>
        <p>Jack Gilcrest is the current President of Miami University Blockchain Club. Stepping up from his role as VP
          of Research in 2019, Jack aims to continue to expand the professional operations of the club. As a computer
          science student, Jack often focuses on the more technical aspects of blockchain, having completed Hyperledger
          and Ethereum-based projects. Outside of academics, Jack Co-Founded and currently serves as Chief Technology
          Officer at blOX Consulting LLC. In the future, Jack hopes to continue down the path of software consulting
          working with corporate companies to harness the power of distributed ledger technology.</p>
        <a href="mailto:gilcrejp@miamioh.edu">gilcrejp@miamioh.edu</a>
        <a href="http://%20https//www.linkedin.com/in/jack-gilcrest/">LinkedIn</a>
      </div>
      <div className="leadership-team__column">
        <img src={require("../images/alexandra_bartkoske.jpg")} alt="Alexandra Bartkoske"/>
        <p>Alexandra Bartkoske</p>
        <p>VP of Finance</p>
        <p>Alexandra Bartkoske is a junior finance major and English minor from the Chicago suburbs. Alexandra has
          previous experience with various forms of technology through a Blockchain certificate through University of
          California - Berkeley, her on-campus job as a technology intern, and through her former position as Director
          of Technology in her business fraternity, Delta Sigma Pi. Alexandra is also an entrepreneur and has created a
          non-for-profit to assist military families in getting music lessons. She is excited to grow MUBC's footprint
          by exploring new avenues of funding and helping to create the best possible events to promote Blockchain
          technology and research.</p>
        <a href="mailto:bartkoas@miamioh.edu">bartkoas@miamioh.edu</a>
        <a href="https://www.linkedin.com/in/alexandra-bartkoske/">LinkedIn</a>
      </div>
      <div className="leadership-team__column">
        <img src={require("../images/alex_stan.jpg")} alt="Alex Stan"/>
        <p>Alex Stan</p>
        <p>VP of Professional Development</p>
        <p>Alex Stan is a sophomore Accountancy major in the Farmer School of Business. Alex is very passionate about
          blockchain technology and is eager to see how it will be applied in the world of business. He was part of
          setting up MUBC’s first ever Blockathon this past semester and is excited to carry that momentum into the
          spring semester for the annual Blockchain Conference. As VP of Professional Development he will be responsible
          for creating successful club events as well as connecting club members to various industry related companies
          that are looking for like minded students to extend internships and job offers too. Alex is looking to create
          more buzz around MUBC events in hopes of attracting more Miami University students as well as company
          sponsorships.</p>
        <a href="mailto:stanam@miamioh.edu">stanam@miamioh.edu</a>
        <a href="https://www.linkedin.com/in/stanam/">LinkedIn</a>
      </div>
    </div>
    <div className="leadership-team__row">
      <div className="leadership-team__column">
        <img src={require("../images/peter_cooke.jpeg")} alt="Peter Cooke"/>
        <p>Peter Cooke</p>
        <p>VP of Projects</p>
        <p>Peter Cooke is a Junior Computer Science Major and has worked on multiple large-scale projects. Peter
          planned, prototyped, and developed the android app Running2win, which is being used by thousands of people to
          record information about their runs. Peter also helped MUBC in the past year with the blockchain peer-to-peer
          solution for insurance, TandaPay. Peter is looking forward to bringing his experience to the club to help plan
          and lead development of future projects!</p>
        <a href="mailto:cookepf@miamioh.edu">cookepf@miamioh.edu</a>
        <a href="https://www.linkedin.com/in/peter-cooke-697853174/">LinkedIn</a>
      </div>
      <div className="leadership-team__column">
        <img src={require("../images/allie_blackburn.jpg")} alt="Allie Blackburn"/>
        <p>Allie Blackburn</p>
        <p>Director of Social Media</p>
        <p>My curiosity allows me to develop skills quickly in new environments which has allowed me to grow in
          accounting as well as the areas of my two minors. Over my past year and a half in college I have exponentially
          improved my communication skills which are a huge factor in any business situation. This recent improvement
          has prepared me for my current involvement in a student run business consulting firm and being the recruitment
          chair for the largest business organization on campus, Women In Business.

          I am now ready to use all of the business experience I have learned in my courses and my previously listed
          campus involvement to a real world setting, where my curiosity will drive me to contribute to the best of my
          abilities.</p>
        <a href="mailto:blackba2@miamioh.edu">bartkoas@miamioh.edu</a>
        <a href="https://www.linkedin.com/in/allisonblackburn22/">LinkedIn</a>
      </div>
      <div className="leadership-team__column">
        <img src={require("../images/torsten_overbeck.jpg")} alt="Torsten Overbeck"/>
        <p>Torsten Overbeck</p>
        <p>VP of Education</p>
        <p>Torsten Overbeck is a junior Computer Science major with a minor in Computer Engineering. He has a passion
          for all aspects of computation which eventually led him down the path of working with blockchain technology.
          It all started when he was in middle school when he had built his first computer. Going into high school he
          was a part of the underwater robotics team giving him experience in working with both software and hardware.
          He continued this passion into college by following the path he does today, chasing his dream of becoming an
          expert programmer, also with a focus in computer hardware. Post graduation he aspires to be working with
          emerging technologies such as blockchain. He will be using his passion in the space to help assist members
          with pursuing their own goals and provide them with the tools to create their own solutions.</p>
        <a href="mailto:overbetn@miamioh.edu">overbetn@miamioh.edu</a>
        <a href="https://www.linkedin.com/in/torsten-overbeck-1215a9182/">LinkedIn</a>
      </div>
    </div>
    <div className="leadership-team__row">
      <div className="leadership-team__column">
        <img src={require("../images/sam_groth.jpg")} alt="Sam Groth"/>
        <p>Sam Groth</p>
        <p>VP of Recruitment</p>
        <p>Currently a sophomore at Miami University studying Computer Science

          Director of Recruitment for Miami University Blockchain Club </p>
        <a href="mailto:grothsd@miamioh.edu">grothsd@miamioh.edu</a>
        <a href="https://www.linkedin.com/in/sam-groth-b00862174/">LinkedIn</a>
      </div>
      <div className="leadership-team__column">
        <img src={require("../images/adrian_czajka.jpg")}/>
        <p>Adrian Czajka</p>
        <p>VP of Public Relations</p>
        <p>Adrian Czajka is a junior Software Engineering Major, and Finance Minor from Cleveland, Ohio. Over the past
          couple of years since coming into college, Adrian has gained an extensive appreciation and understanding for
          the world of Blockchain. He will be spending this summer as an Information Technology intern at
          Kautex-Textron, where he will be learning the ins and outs of the world of Information Technology. Adrian
          hopes to become a software project manager in his future, and learn new leadership skills through MUBC. Within
          MUBC, he hopes to be able to expand his knowledge in not only Blockchain in the future, but also in the world
          of software development as a whole. Adrian’s main goal within MUBC is to get the club more involved with the
          community, and to expand the club in terms of not only size, but also accomplishments and goals.</p>
        <a href="mailto:czajkaat@miamioh.edu">czajkaat@miamioh.edu</a>
        <a href="https://www.linkedin.com/in/adrian-czajka-160b3b180/">LinkedIn</a>
      </div>
      <div className="leadership-team__column">
        <img src={require("../images/jake_dearth.jpg")}/>
        <p>Jake Dearth</p>
        <p>VP of Outreach</p>
        <p>I am a Junior Biology Major at Miami University.

          I am currently a Data Entry Specialist/Analyst for Innovative Oil Solutions, a tech startup, researching for
          Renewable Motor Oil Solutions.

          On campus I hold leadership positions as VP of Miami University Real Estate Club, VP of Outreach of the Miami
          University Blockchain Club, and former Recruitment Chair of Mu Upsilon Chapter of Phi Gamma Delta Fraternity.

          This past summer I worked under a former Eaton Corp. Senior Executive as Head of Operations on a 10,000+ acre
          cattle ranch and hunting property in Chinook, MT. I managed the property, fixed all mechanical, plumbing,
          electrical issues, and planned events for weekly guests. This position greatly improved my work ethic,
          dedication, and passion/pride for work.</p>
        <a href="mailto:dearthjd3@miamioh.edu">dearthjd3@miamioh.edu</a>
        <a href="https://www.linkedin.com/in/jacob-dearth-bbb35a14a/">LinkedIn</a>
      </div>
    </div>
    <div className="leadership-team__strategic-advisors">
      <h2 id="leadership-team__strategic-advisors__header">Strategic Advisors</h2>
      <hr className="divider"/>
      <div className="leadership-team__row">
        <div className="leadership-team__strategic-advisors__column">
          <img src={require("../images/arthur_carvalho.jpg")} alt="Dr. Arthur Carvalho"/>
          <p>Dr. Arthur Carvalho</p>
          <p>Academic Advisor </p>
          <p> Dr. Arthur Carvalho is an Assistant Professor of Information Systems and Analytics at Farmer School of
            Business, Miami University. His research interests lie at the intersection of Information Systems,
            Analytics, and Decision Analysis. In particular, Dr. Carvalho works on the development of mathematical
            techniques and decision support systems that assist decision makers in making better decisions. </p>
          <a href="mailto:carvalag@miamioh.edu">carvalag@miamioh.edu</a>
          <a href="https://www.linkedin.com/in/arthurgcarvalho/">LinkedIn</a>
        </div>
        <div className="leadership-team__strategic-advisors__column">
          <img src={require("../images/ashton_barger.jpg")} alt="Ashton Barger"/>
          <p>Ashton Barger</p>
          <p>Strategic Advisor </p>
          <p> People, the environment, and technology absolutely fascinate me. They are where my passions lie; through
            being a lover of sales, marketing, consulting, leadership, and economics, actively getting experience with
            developing blockchain solutions, and being an environmentalist through a love of sustainability.

            Professionally, I am the Co-Founder and CEO of blOX Consulting, a Blockchain Consulting and Development
            company bringing valuable Blockchain Solutions to multiple clients. Besides Consultation, we provide
            introductory Blockchain Presentations and Webinars, Blockchain Development work with Solidity and
            Hyperledger, software security audits, testing and feedback, compliance expertise, marketing, and more.

            I plan to graduate in 2020 from Miami University of Ohio with a B.S. in Business Economics and a minor in
            Data Analytics. I have also enjoyed taking classes in science and entrepreneurship.

            After college, I am looking to work in Blockchain consulting and run my own business, but I am interested in
            hearing about any internship or job opportunity that comes my way and am very flexible. Thank you so much
            for visiting.</p>
          <a href="mailto:ashton@blox.consulting">ashton@blox.consulting</a>
          <a href="https://www.linkedin.com/in/ashtonbarger/">LinkedIn</a>
        </div>
      </div>
      <div className="leadership-team__row">
        <div className="leadership-team__strategic-advisors__column">
          <img src={require("../images/jeffery_w_merhout.jpg")} alt="Jeffrey W. Merhout"/>
          <p>Jeffrey W. Merhout</p>
          <p>Academic Advisor</p>
          <p> Jeffrey W. Merhout is an Associate Professor of Information Systems in the Farmer School of Business at
            Miami University in Oxford, Ohio. He holds a Ph.D. and MBA from Virginia Commonwealth University and is a
            Certified Public Accountant (inactive). He has information systems consulting experience in several
            industries, including financial services, manufacturing and retail. His current research interests focus on:
            agile software development project management; blockchain; sustainability issues with information technology
            and sustainability solutions offered by information systems; IT governance, information risk management, IT
            security and information systems auditing; and recruiting underrepresented students into the information
            systems major. He has presented and published his research at numerous MIS conferences and in journals,
            including the Communications of the ACM, Communications of the AIS, Journal of Information Systems
            Education, Information Technology & People, Journal of Computer Information Systems, Journal of the Midwest
            Association for Information Systems, International Journal of Accounting Information Systems, Review of
            Business Information Systems, and Information Systems Control Journal.</p>
          <a href="mailto:merhoujw@miamioh.edu">merhoujw@miamioh.edu</a>
          <a href="https://www.linkedin.com/in/jeff-merhout-b862b82/">LinkedIn</a>
        </div>
        <div className="leadership-team__strategic-advisors__column">
          <img src={require("../images/patrick_young.jpg")} alt="Patrick Young"/>
          <p>Patrick Young</p>
          <p>Strategic Advisor</p>
          <p> Patrick Young, former President of MUBC, founded the organization in August of 2017 with the goal of
            jumpstarting blockchain in academia at Miami University of Ohio. During his 18 months in office, MUBC
            quickly became one of the largest student-led blockchain initiatives in the world, with a membership size
            exceeding 200 and operations in blockchain education and development. He has since gone on to launch two
            startups – The Block Tribune and Block Key Capital – and is working as a Research Assistant for the
            Information Systems & Analytics Department at the Farmer School of Business.

            Patrick serves as a strategic advisor for the Miami University Blockchain Club, where his experience and
            expertise will help future generations of blockchain enthusiasts find their way in this exciting space. </p>
          <a href="mailto:patrick@blockkeycapital.io">patrick@blockkeycapital.io</a>
          <a href="https://www.linkedin.com/in/ashtonbarger/">LinkedIn</a>
        </div>
      </div>
    </div>
    <MUBCFooter />
  </div>
)

export default LeadershipTeam