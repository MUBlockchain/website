import React, {useState} from 'react'
import MUBCEventModal from "./MUBCEventModal";

const MUBCEventRow = ({date, title, body, image, links}) => {
    date = date.split(" ")
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <div className="mubcEventRow" onClick={() => setShowModal(true)}>
                <div className="mubcEventRow__date">
                    <h4>{date[0]} <br/> {date[1]}</h4>
                </div>
                <div className="mubcEventRow__title">
                    <h5>{title}</h5>
                </div>
            </div>
            <MUBCEventModal date={date} body={body} image={image} links={links} title={title} show={showModal} onHide={() => setShowModal(false)}/>
        </div>
    )
}
export default MUBCEventRow