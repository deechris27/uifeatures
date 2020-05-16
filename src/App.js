import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Spin from './components/spin/spin';
import HomePage from './pages/HomePage';
import ProgressBar from './components/progress/progress';

const App = ()=> (
   <Switch>
     <Route exact path="/" component={HomePage} />
     <Route path="/spin" component={Spin} />
     <Route path="/progress" component={ProgressBar} />
   </Switch>  
);

export default App;
