import { useState, useEffect } from 'react'
import axios from 'axios'

// eslint-disable-next-line
export default (url) => {
  const baseUrl = 'https://conduit.productionready.io/api'
  const mainUrl = baseUrl + url
  const [isLoad, setIsLoad] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})

  const doFetch = (options = {}) => {
    setOptions(options)
    setIsLoad(true)
  }

  useEffect(() => {
    if (!isLoad) {
      return
    }

    axios(mainUrl, options)
      .then((res) => {
        console.log('-=SUCCESS=-', res)
        setIsLoad(false)
        setResponse(res.data)
      })
      .catch((error) => {
        console.log('ERROR', error)
        setIsLoad(false)
        setError(error.response.data)
      })
  }, [isLoad])

  return [{ isLoad, response, error }, doFetch]
}
