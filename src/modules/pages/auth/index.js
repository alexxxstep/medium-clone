import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'

const Auth = (props) => {
  const isLogin = props.match.path === '/login'
  const pageTitle = isLogin ? 'Sign In' : 'Sign Up'
  const descriptionLink = isLogin ? '/register' : '/login'
  const descriptionText = isLogin ? 'Need a account?' : 'Have a account?'

  const apiUrl = isLogin ? '/users/login' : '/users'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
 

  // eslint-disable-next-line
  const url = '/users/login'
  const [{ response, isLoad, error }, doFetch] = useFetch(apiUrl)

  // console.log('email', email, 'password', password)

  // console.log('comment=-', props, isLogin)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('data', email, password)
    const user = isLogin ? { email, password } : { email, password, username }
    doFetch({
      method: 'post',
      data: {
        user,
      },
    })
  }

  useEffect(() => {
    if (!response) {
      return null
    }
    localStorage.setItem('token', response.user.token)
    setIsSubmit(true)
    console.log('response', response)
  }, [response])

  if (isSubmit) {
    return <Redirect to="/" />
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md3 col-xs-12">
            <h1 className="text-xs-center">{pageTitle}</h1>
            <p className="text-xs-center">
              <Link to={descriptionLink}>{descriptionText}</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                {
                  //* registration */
                  !isLogin && (
                    <fieldset className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </fieldset>
                  )
                }

                <fieldset className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                <button className="bnt btn-lg btn-primary pull-xs-right" type="submit" disabled={isLoad}>
                  {pageTitle}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
