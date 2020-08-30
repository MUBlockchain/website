import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import MUBCHeader from "../components/MUBCHeader"
import MUBCNavbar from "../components/MUBCNavbar"
import MUBCFooter from "../components/MUBCFooter";

const MemberPortal = () => {
    const [reset, setReset] = useState(false)

    return (
        <div id="member-portal__container">
            <MUBCHeader/>
            <MUBCNavbar/>
            {!reset ? <div id="member-portal">
                    <h1>Account Sign In</h1>
                    <hr className="divider"/>
                    <p>Sign in to your account to access your profile, history, and any private pages you've been granted
                        access to.</p>
                    <input type="text" name="email" placeholder="Email"/>
                    <br/>
                    <input type="password" name="password" placeholder="Password"/>
                    <br/>
                    <Button id="member-portal__sign-in">Sign In</Button>
                    <p onClick={() => setReset(true)} id="member-portal__reset-link">Reset password</p></div> :
                <div id="member-portal">
                    <h1>Reset Password</h1>
                    <hr className="divider"/>
                    <p>Enter your email address, and we’ll send you a password reset link.</p>
                    <input type="text" name="email-reset" placeholder="Email"/>
                    <br/>
                    <Button id="member-portal__reset">Send Reset Link</Button>
                    <p>Don't need to reset your password? <span id="member-portal__sign-in__link"
                                                                onClick={() => setReset(false)}>Sign in.</span></p>
                </div>}
                <MUBCFooter />
        </div>
    )
}
export default MemberPortal