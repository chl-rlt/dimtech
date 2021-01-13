import React from 'react'; 
import Login from './components/Login'
import Signup from './components/SignUp'
import { Route, Switch } from 'react-router-dom'


import './App.css'

function App() {
  return (
    <div className="App"> 
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route path="/sign-up">
        <Signup />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
