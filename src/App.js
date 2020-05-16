import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Spin from './components/spin/spin';
import HomePage from './pages/HomePage';
import ProgressBar from './components/progress/progress';
import ScrollProgress from './components/scrollprogress/ScrollProgress';
import SideBar from './components/sidebar/SideBar';
import TopNav from './components/topnav/topnav';
import FullNavigation from './components/fullscreen/FullNavigation';

const App = ()=> (
   <Switch>
     <Route exact path="/" component={HomePage} />
     <Route path="/spin" component={Spin} />
     <Route path="/progress" component={ProgressBar} />
     <Route path="/scrollprogress" component={ScrollProgress} />
     <Route path="/sidenav" component={SideBar} />
     <Route path="/topnav" component={TopNav} />
     <Route path="/fullnav" component={FullNavigation} />
   </Switch>  
);

export default App;
