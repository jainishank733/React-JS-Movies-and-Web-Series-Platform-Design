import './App.css';
import { HashRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import WebSeries from './WebSeries';
import Error from './Error';

const App= () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/movies" component={Movies}/>
        <Route path="/series" component={WebSeries}/>
        <Route component={Error}/>
      </Switch>      
      </Router>
    </>  
  );
}

export default App;
