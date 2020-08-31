import React from 'react'
import MUBCEventRow from "../components/MUBCEventRow";
import SEO from "../components/seo";
import MUBCHeader from "../components/MUBCHeader";
import MUBCNavbar from "../components/MUBCNavbar";

const FallEvents = () => {
    return (
        <div>
            <MUBCHeader/>
            <MUBCNavbar/>
            <div className="fall-2020">
                <h1>Fall 2020 Schedule</h1>
                <hr className="divider"/>
                <SEO title="Fall 2020"/>
                <MUBCEventRow date={'15 SEP'} title={'Info Night #1'} body={'Test body'} links={'https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content'} image={<img src={require('../images/logo.png')} alt="Logo"/>}/>
                <MUBCEventRow date={'16 SEP'} title={'Info Night #2'}/>
                <MUBCEventRow date={'23 SEP'} title={'Workshop #1: Build and Deploy a Supply Chain dApp'}/>
                <MUBCEventRow date={'8 OCT'} title={'Crypto Bull Market v2: How to Yield Farm'}/>
                <MUBCEventRow date={'22 OCT'} title={'Blockchain: The Antidote to Mail-in Ballot Fraud'}/>
                <MUBCEventRow date={'29 OCT'} title={'Automating Compliance and Financial Auditing with Blockchain'}/>
                <MUBCEventRow date={'5 NOV'} title={'Where and When to use Emerging Techonologies in Your Business'}/>
                <MUBCEventRow date={'29 OCT'} title={'Workshop #2: Blockathon Preparation'}/>
            </div>
        </div>
    )
}
export default FallEvents