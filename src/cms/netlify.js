import CMS from 'netlify-cms-app'
import React from 'react'
import { Image } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import './preview.css'

const LeadershipPreview = ({ entry }) => {
    const title = entry.getIn(['data', 'title']) ? entry.getIn(['data', 'title']) : 'Title'
    const description = entry.getIn(['data', 'description']) ? entry.getIn(['data', 'description']) : 'The description will go here'
    const image = entry.getIn(['data', 'headshot'])
    const name = entry.getIn(['data', 'name']) ? entry.getIn(['data', 'name']) : 'Name'
    const email = entry.getIn(['data', 'email']) ? entry.getIn(['data', 'email']) : 'email@gmail.com'
    const linkedin = entry.getIn(['data', 'linkedin'])
    return (
        <div className="team-member">
            <img className="team-member__headshot" src={image ? image : require('../../static/img/bitconnect.png')} alt="Headshot" />
            <p className="team-member__name">{name}</p>
            <h1 className="team-member__title">{title}</h1>
            <p className="team-member__description">{description}</p>
            <a className="team-member__email" href={`mailto:${email}`}>{email}</a>
            <br />
            <a className="team-member__linkedin" href={`https://www.linkedin.com/in/${linkedin}`}>LinkedIn</a>
        </div>
    )
}

const BlogPreview = ({ entry, widgetFor }) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    const title = entry.getIn(['data', 'title']) ? entry.getIn(['data', 'title']) : 'Title'
    let date = entry.getIn(['data', 'date']) ? entry.getIn(['data', 'date']) : 'Date'
    if (date !== 'Date') {
        const month = monthNames[date.getMonth() + 1]
        const day = date.getDate()
        const year = date.getFullYear()
        date = `${month} ${day}, ${year}`
    }
    const html = widgetFor('body') ? widgetFor('body').props.value : null
    return (
        <div className="blog">
            <h1 className="blog__title">{title}</h1>
            <h2 className="blog__date">{date}</h2>
            <ReactMarkdown className="blog__body" children={html} allowDangerousHtml/>
        </div>
    )
}

const SchedulePreview = ({entry, widgetFor}) => {
    const title = entry.getIn(['data', 'title']) ? entry.getIn(['data', 'title']) : 'Title'
    const date = entry.getIn(['data', 'eventDate']) ? `Date: ${entry.getIn(['data', 'eventDate'])}` : 'Date'
    const description = entry.getIn(['data', 'description']) ? entry.getIn(['data', 'description']) : 'Description'
    const link = entry.getIn(['data', 'link']) ? entry.getIn(['data', 'link']) : 'Fake Link'
    const image = entry.getIn(['data', 'featuredImage'])
    console.log(image)
    return (
        <div className="schedule">
            <h1 className="schedule__title">{title}</h1>
            <h2 className="schedule__date">{date}</h2>
            <div className ="schedule__body">
                {image && <img className="schedule__image" src={image} alt="Event Image"/>}
                <p className="schedule__description">{description}</p>
                <h4>Link: </h4><a href={link}>{link}</a>
            </div>
        </div>
    )
}

CMS.registerPreviewStyle('./preview.css');
CMS.registerPreviewTemplate('leadership', LeadershipPreview)
CMS.registerPreviewTemplate('blog', BlogPreview)
CMS.registerPreviewTemplate('schedule', SchedulePreview)