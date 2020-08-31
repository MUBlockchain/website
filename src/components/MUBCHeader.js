import React from 'react'
import Particles from "react-particles-js";
import { Link } from 'gatsby'

const MUBCHeader = () => {
    return (
        <div id="mubc-header">
            <div>
                <Link to="/">
                <img src={require('../images/logo.png')} alt="Logo"/>
                </Link>
            </div>
            <Particles height="250px" params={{
                particles: {
                    "number": {
                        "value": 30
                    },
                    "size": {
                        "value": 3
                    }
                }
            }}/>
        </div>
    )
}
export default MUBCHeader