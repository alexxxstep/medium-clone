/* global localStorage, */
import {useState, useEffect} from 'react'

export default (key, initialValue = '') => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue
  })
  // const setStoredValue = (value) => {
  //   setValue(value)
  //   localStorage.setItem(key, value)
  // }
  useEffect(() => {
    // console.log('useEffect', key, value)
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
}
