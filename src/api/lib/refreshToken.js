export let refreshToken = (res) => {
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000
    let refreshToken = async () => {
        let newAuthRes = await res.reloadAuthResponse()
        setTimeout(refreshToken, refreshTiming)
    }
    setTimeout(refreshToken, refreshTiming)
}