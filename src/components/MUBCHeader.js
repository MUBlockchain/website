import React from 'react'
import Particles from "react-particles-js";
import { Link } from 'gatsby'

const MUBCHeader = () => {
    return (
        <div id="mubc-header">
            <div>
            </div>
            <div>
                <Link to="/">
                    <img src={require('../images/MUBC Logo Big Letters (vector) copy 2.png')} alt="Logo"/>
                    <br/>
                    <img src={require('../images/MUBC Logo Big Letters (vector) copy.png')} alt="Logo"/>
                </Link>
            </div>
            <Particles height="125px" params={{
                particles: {
                    "number": {
                        "value": 40
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