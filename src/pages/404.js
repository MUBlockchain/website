import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout";

const NotFoundPage = () => (
    <div>
        <Layout>
        <SEO title="404" description="This page does not exists"/>
        <div className="not-found">
                <h2>404.... Looks like you're lost!!!</h2>
                <img src={require('../../static/img/bitconnect.png')} alt="Bitconnect" />
        </div>
        </Layout>
    </div>
)

export default NotFoundPage
