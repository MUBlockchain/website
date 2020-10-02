import { useContext, useMemo, useCallback, useState, useEffect } from 'react'
import { AuthContext } from '../components/auth'
import mapValues from 'lodash/mapValues'
import * as api from 'methods'

export function useApi() {
    let { token } = useContext(AuthContext)
    let obj = useMemo(() => mapValues(api, (fn) => fn.bind(null, token)))
    if (!token) return null
    return obj
}