import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // console.log('email', email, 'password', password)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('data', email, password)
  }

  useEffect(() => {
    console.log('effect was triggered')
    document.title = email
  }, [email])

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md3 col-xs-12">
            <h1 className="text-xs-center">Login</h1>
            <p className="text-xs-center">
              <Link to="register">Need an account?</Link>
            </p>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                <button
                  className="bnt btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sing in
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
