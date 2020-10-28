import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import {FaTwitter, FaInstagram, FaYoutube, FaLinkedin} from "react-icons/fa"

const SocialLinks = ({linkClass, iconClass}) => {
    const data = useStaticQuery(graphql`
        query SocialLinksQuery {
            markdownRemark(fileAbsolutePath: { regex : "/markdown/links/sociallinks.md/" }) {
                html
                frontmatter {
                    twitter
                    instagram
                    linkedin
                    youtube
                }
            }
        }
    `)

    return (
        <>
        <a className={linkClass} href={data.markdownRemark.frontmatter.twitter}><FaTwitter
            className={iconClass}/></a>
        <a className={linkClass} href={data.markdownRemark.frontmatter.instagram}><FaInstagram
            className={iconClass}/></a>
        <a className={linkClass} href={data.markdownRemark.frontmatter.linkedin}><FaLinkedin
            className={iconClass}/></a>
        <a className={linkClass}
            href={data.markdownRemark.frontmatter.youtube}><FaYoutube
            className={iconClass}/></a>
        </>

    )
}

export default SocialLinks
