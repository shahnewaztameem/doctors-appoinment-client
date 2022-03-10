import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AuthProvider from './context/AuthProvider/AuthProvider'
import Appoinment from './Screens/Appoinment/Appoinment/Appoinment'
import Home from './Screens/Home/Home'
import Login from './Screens/Login/Login/Login'
import Signup from './Screens/Login/Signup/Signup'
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path='/appoinment'>
              <Appoinment />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
