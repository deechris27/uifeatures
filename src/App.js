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
import Tooltip from './components/tooltip/Tooltip';
import HiddenElement from './components/hiddenelement/HiddenElement';
import Rating from './components/rating/Rating';
import Layout from './components/layout/Layout';
import Website from './components/website/Website';
import Typewriter from './components/typewriter/Typewriter';
import LikeDislike from './components/likedislike/LikeDislike';
import Overlay from './components/overlay/Overlay';
import DragDrop from './components/draggable/DragDrop';
import FormValidation from './components/formvalidation/FormValidation';
import CopyPaste from './components/copypaste/CopyPaste';
import DetectCapsLock from './components/capslock/DetectCapsLock';
import ShaktimaanSpin from './components/shaktimaan/ShaktimaanSpin';
import ListFilter from './components/listfilter/ListFilter';

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
     <Route path="/tool" component={Tooltip} />
     <Route path="/hidden" component={HiddenElement} />
     <Route path="/rating" component={Rating} />
     <Route path="/layout" component={Layout} />
     <Route path="/website" component={Website} />
     <Route path="/typewriter" component={Typewriter} />
     <Route path="/like" component={LikeDislike} />
     <Route path="/overlay" component={Overlay} />
     <Route path="/drag" component={DragDrop} />
     <Route path="/validation" component={FormValidation} />
     <Route path="/copy" component={CopyPaste} />
     <Route path="/capslock" component={DetectCapsLock} />
     <Route path="/shakti" component={ShaktimaanSpin} />
     <Route path="/listfilter" component={ListFilter} />
   </Switch>
);

export default App;
