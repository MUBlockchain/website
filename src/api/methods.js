import request from './request'

let BASE = process.env.GATSBY_API_BASE

export function signin(token) {
    return request(sign, { method: 'POST', url: `${BASE}/api/signin`})
}