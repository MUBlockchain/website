export default async function request(tokenId, { method, url, body }) {
    let headers = {}

    if (typeof body === 'object' && !(body instanceof File)) {
        headers['Content-Type'] = 'application/json'
        body = JSON.stringify(body)
    }

    if (tokenId) headers['Authorization'] = `Bearer ${tokenId}`

    let resp = await fetch(url, { method, headers, body })

    if (!resp.ok) {
        let error = new Error('Server responded with an HTTP error')
        error.code = resp.status
        error.original = resp
        throw error
    }

    let respContentType = [...resp.headers.entries()].find(([k, v]) => k === 'content-type')

    if(/json/.test(respContentType)) {
        return await resp.json()
    }

    if(/text/.test(respContentType)) {
        return await resp.text()
    }

    return resp
}