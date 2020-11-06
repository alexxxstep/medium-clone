import React from 'react'

import {Switch, Route} from 'react-router-dom'
import Article from './article/article'
import Auth from './auth'
import GlobalFeed from './globalFeed'

// eslint-disable-next-line
export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Auth} />

      <Route path="/articles/:slug" component={Article} />
    </Switch>
  )
}
