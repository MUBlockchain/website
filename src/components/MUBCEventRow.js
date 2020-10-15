import React from 'react'
import { Link } from 'gatsby'

const MUBCEventRow = ({ path, date, title }) => {
    date = date.split(" ")

    return (
        <Link to={`${path}/`} className="schedule__link">
        <div>
            <div className="mubcEventRow">
                <div className="mubcEventRow__date">
                    <h4>{date[0]}<br/>{date[1]}</h4>
                </div>
                <div className="mubcEventRow__title">
                    <h5>{title}</h5>
                </div>
            </div>
        </div>
        </Link>
    )
}
export default MUBCEventRow