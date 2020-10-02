import React, { useState } from "react"
import { Button } from "react-bootstrap"
import SEO from "../components/seo"
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"
import MUBCFooter from "../components/MUBCFooter"
import GoogleLogin from 'react-google-login'
//import AuthContext from '../components/auth'

const MemberPortal = () => {
    let [user, setUser] = useState({ name: null, image: null, email: null, done: null })
    let [auth, setAuth] = useState(null)

    let responseGoogleSuccess = async (res) => {
        console.log("Google Response (SUCCESS!): ", res)
        let x = {name: res.nt.Ad, image: res.nt.JJ, email: res.nt.Wt, done: true}
        await setUser(x)
    }

    let responseGoogleFailure = (res) => {
        console.log("Google Response (FAILURE!): ", res)
    }

    return (
        <div>
            <SEO title="Member Portal" description="Miami University Blockchain Club member portal sign-up and sign-in" />
            <MUBCHeader />
            <MUBCNavbar />
            <div id="member-portal__container">
                <div id="member-portal">
                    <h2>Account Sign In</h2>
                    <hr className="divider" />
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Image:</p>
                    <img src={user.image} alt='logged in user' width='350' height='350' />
                    <p>Sign into the MUBC Incentive Token Web App</p>
                    <GoogleLogin
                        id="member-portal__reset"
                        clientId={process.env.GATSBY_OAUTH_ID}
                        buttonText="Log in with Google "
                        onSuccess={responseGoogleSuccess}
                        onFailure={responseGoogleFailure}
                        isSignedIn={true}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
            <MUBCFooter />
        </div>
    )
}
export default MemberPortal