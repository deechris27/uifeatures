import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Spin from './components/spin/spin';
import HomePage from './pages/HomePage';
import ProgressBar from './components/progress/progress';
import ScrollProgress from './components/scrollprogress/ScrollProgress';
import SideBar from './components/sidebar/SideBar';
import TopNav from './components/topnav/topnav';
import FullNavigation from './components/fullscreen/FullNavigation';
import skillprogress from './components/skillprogress/SkillProgress';
import Modal from './components/modal/Modal';
import PromptModal from './components/promptmodal/PromptModal';
import VideoPlayer from './components/videoplayer/VideoPlayer';
import TimeLine from './components/timeline/TimeLine';
import RangeSlider from './components/range/RangeSlider';

const App = ()=> (
   <Switch>
     <Route exact path="/" component={HomePage} />
     <Route path="/spin" component={Spin} />
     <Route path="/progress" component={ProgressBar} />
     <Route path="/scrollprogress" component={ScrollProgress} />
     <Route path="/sidenav" component={SideBar} />
     <Route path="/topnav" component={TopNav} />
     <Route path="/fullnav" component={FullNavigation} />
     <Route path="/skillprogress" component={skillprogress} />
     <Route path="/modal" component={Modal} />
     <Route path="/promptmodal" component={PromptModal} />
     <Route path="/video" component={VideoPlayer} />
     <Route path="/timeline" component={TimeLine} />
     <Route path="/range" component={RangeSlider} />
   </Switch>  
);

export default App;
