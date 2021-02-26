import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'

export const AppsContext = React.createContext({});
function App() {
  const [ apps ] = useState({
    title: 'Belajar React',
    desc: 'Belajar aja',
  });
  return (
    <AppsContext.Provider value={{apps}}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/about" exact component={About} />
        <Route component={NotFound} />
      </Switch>
    </AppsContext.Provider>
  );
}

export default App;

export function NotFound() {
  return(
    <div>
      Halaman Not Found
    </div>
  );
}