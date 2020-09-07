import React from 'react'
import graphql from 'gatsby'
import Img from 'gatsby-image'
import MUBCEventRow from "../components/MUBCEventRow"
import SEO from "../components/seo"
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"

let data = require('../data/events.json')
let path = require.context('../images/')

let imgQuery = (src) => {
    return graphql`
        file(relativePath: { eq "images/${src}" }) {
            childSharpImage {
                fixed(width: 250, height: 250) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `
}

const FallEvents = () => {
    debugger
    let events = []
    for (let i = 0; i < data.length; i++) {
        let event = <MUBCEventRow
            date={data[i].date}
            title={data[i].title}
            body={data[i].description}
            links={data[i].link}
            image={<Img
                className="event-photo"
                fixed=""
            />
            }
        />
        events.push(event)
    }

    return (
        <div>
            <SEO title="Fall 2020" description="Miami University Blockchain Club schedule of Fall 2020 events" />
            <MUBCHeader />
            <MUBCNavbar />
            <div className="fall-2020">
                <h1>Fall 2020 Schedule</h1>
                <hr className="divider" />
                {events}
            </div>
        </div>
    )
}
export default FallEvents