import React from 'react'
import SEO from '../components/seo'
import MUBCHeader from '../components/MUBCHeader'
import MUBCNavbar from '../components/MUBCNavbar'
import BlogRoll from '../components/BlogRoll'

const Blog = () => {
    return (
        <div className="blog">
            <SEO title="Blog" description="Miami University Blockchain Club blog"/>
            <MUBCHeader />
            <MUBCNavbar/>
            <h2>MUBC Blog</h2>
            {/* <BlogRoll /> */}
        </div>
    )
}

export default Blog