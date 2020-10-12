import React from 'react'
import { Modal } from 'react-bootstrap'

const MUBCEventModal = (props) => {
    const abbreviationToMonth = (abr) => {
        let ret
        switch (abr) {
            case 'SEP':
                ret = 'September'
                break
            case 'OCT':
                ret = 'October'
                break
            case 'NOV':
                ret = 'November'
                break
            default:
                ret = 'December'
                break
        }
        return ret
    }

    return (

                            <Modal
                                {...props}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                className="mubcEventModal"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter" className="mubcEventModal__header">
                                        <div><h3>{props.title}</h3></div>
                                        <div><h3>Date: {abbreviationToMonth(props.date[1])}   {props.date[0]}</h3></div>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="mubcEventModal__body">
                                    {props.image}
                                    <p>Description: {props.body}</p>
                                </Modal.Body>
                                <Modal.Footer className="mubcEventModal__footer">
                                    <p>Link</p>
                                    <a href={props.links}>{props.links}</a>
                                </Modal.Footer>
                            </Modal>
    )
}
export default MUBCEventModal