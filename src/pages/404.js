import React from "react"
import SEO from "../components/seo"
import MUBCHeader from "../components/MUBCHeader";
import MUBCNavbar from "../components/MUBCNavbar";
import MUBCFooter from "../components/MUBCFooter";

const NotFoundPage = () => (
    <div>
        <SEO title="404" description="This page does not exists"/>
        <MUBCHeader/>
        <MUBCNavbar/>
        <div className="not-found">
                <h2>404.... Looks like you're lost!!!</h2>
                <img src={require('../../static/assets/images/bitconnect.png')} alt="Bitconnect" />
        </div>
        <MUBCFooter/>
    </div>
)

export default NotFoundPage
