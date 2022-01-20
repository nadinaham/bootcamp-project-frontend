import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import Register from './containers/Register'
import Login from './containers/Login'
import AlreadyRead from './containers/AlreadyRead'
import Rec_Books from './containers/Rec_Books'
import Saved_Books from './containers/Saved_Books'
import Friend_RecBooks from './containers/Friend_RecBooks'
import Follows from './containers/Follows'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/read-books" component={AlreadyRead} />
            <Route path="/rec-books" component={Rec_Books} />
            <Route path="/saved-books" component={Saved_Books} />
            <Route path="/friend-rec" component={Friend_RecBooks} />
            <Route path="/follows" component={Follows} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
