import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'


function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/about" exact component={About} />
      <Route component={NotFound} />
    </Switch>
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