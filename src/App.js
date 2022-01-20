import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import Register from './containers/Register'
import Login from './containers/Login'
import Read_Books from './containers/Read_Books'
import Rec_Books from './containers/Rec_Books'
import Saved_Books from './containers/Saved_Books'
import Friend_RecBooks from './containers/Friend_RecBooks'
import Follows from './containers/Follows'
import Greet from './containers/Greet'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/read-books" component={Read_Books} />
            <Route path="/rec-books" component={Rec_Books} />
            <Route path="/saved-books" component={Saved_Books} />
            <Route path="/friend-rec" component={Friend_RecBooks} />
            <Route path="/follows" component={Follows} />
<<<<<<< HEAD
            <Route path="/" component={Home} />
            {/* <Route path="/greet" component={Greet} /> */}
=======
            <Route path="/greet" component={Greet} />
            <Route path="/" component={Home} />
>>>>>>> 09a48f0609c0dc1129088671c835c9b227aa7b98
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
