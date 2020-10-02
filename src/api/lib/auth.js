import React, { useState, useEffect } from 'react'
import { useGoogleLogin, useGoogleLogout } from 'react-google-login'
import { refreshToken } from './refreshToken'
import * as api from '../methods'

const DEFAULT_AUTH_CONTEXT = {
    token: null,
    role: null,
    login: null,
    logout: null,
    register: null
}

export let AuthContext = React.createContext(DEFAULT_AUTH_CONTEXT)

export default function AuthContextProvider({ children }) {
    [loading, setLoading] = useState(null)
    [error, setErrorToken] = useState(null)
    [token, setToken] = useState(null)
    [role, setRole] = useState(null)

    let { signIn } = useGoogleLogin({
        onSuccess: refreshUser,
        clientId: process.env.GATSBY_OAUTH_ID,
        isSignedIn: true,
        accessType: 'offline'
    })

    let refreshUser = async (res) => {
        debugger
        refreshToken(res)
        try {
            let _token = await googleLogin()
            let _role = await api.signin()
            console.log("TOKEN: ", _token)
            console.log("ROLE: ", _role)
            setToken(_token)
            setRole(_role)
        } catch (err) {
            console.log("Failure: user is not authorized!")
            setLoading(false)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    let { signOut } = useGoogleLogout({
        clientId: process.env.GATSBY_OAUTH_ID,
        onSuccess: deauth,
        onFailure: () => { console.log("Sign Out Failed!") }
    })

    let deauth = () => {
        setLoading(null)
        setError(null)
        setToken(null)
        setRole(null)
    }

    let ctx = { token, role, login: signIn, logout: signOut }
    return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>
}


