import React from 'react'
import SEO from '../components/seo'
import BlogRoll from '../components/BlogRoll'
import Layout from '../components/layout'

const Blog = () => {
    return (
        <div className="blog">
            <Layout>
            <SEO title="Blog" description="Miami University Blockchain Club blog"/>
            <h2 id="blog__header">MUBC Blog</h2>
            <BlogRoll />
            </Layout>
        </div>
    )
}

export default Blog