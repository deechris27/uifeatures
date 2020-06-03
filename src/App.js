import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
// import Spin from './components/spin/spin';
import HomePage from './pages/HomePage';
// import ProgressBar from './components/progress/progress';
// import ScrollProgress from './components/scrollprogress/ScrollProgress';
// import SideBar from './components/sidebar/SideBar';
// import TopNav from './components/topnav/topnav';
// import FullNavigation from './components/fullscreen/FullNavigation';
// import skillprogress from './components/skillprogress/SkillProgress';
// import Modal from './components/modal/Modal';
// import PromptModal from './components/promptmodal/PromptModal';
// import VideoPlayer from './components/videoplayer/VideoPlayer';
// import TimeLine from './components/timeline/TimeLine';
// import RangeSlider from './components/range/RangeSlider';
// import Tooltip from './components/tooltip/Tooltip';
// import HiddenElement from './components/hiddenelement/HiddenElement';
// import Rating from './components/rating/Rating';
// import Layout from './components/layout/Layout';
// import Website from './components/website/Website';
// import Typewriter from './components/typewriter/Typewriter';
// import LikeDislike from './components/likedislike/LikeDislike';
// import Overlay from './components/overlay/Overlay';
// import DragDrop from './components/draggable/DragDrop';
// import FormValidation from './components/formvalidation/FormValidation';
// import CopyPaste from './components/copypaste/CopyPaste';
// import DetectCapsLock from './components/capslock/DetectCapsLock';
import ShaktimaanSpin from './components/shaktimaan/ShaktimaanSpin';
// import ListFilter from './components/listfilter/ListFilter';
// import Download from './components/download/Download';
// import PopUpChat from './components/popupchat/PopUpChat';
// import DropDownFilter from './components/dropdownFilter/DropDownFilter';
// import Pagination from './components/pagination/Pagination';
// import AutoComplete from './components/autocomplete/AutoComplete';
// import GeoLocation from './components/geolocation/GeoLocation';
// import PdfDownload from './components/pdfdownload/PdfDownload';

const ProgressBar = lazy(()=>import('./components/progress/progress'));
const Spin = lazy(()=>import('./components/spin/spin'));
const ScrollProgress = lazy(()=>import('./components/scrollprogress/ScrollProgress'));
const SideBar = lazy(()=>import('./components/sidebar/SideBar'));
const TopNav = lazy(()=>import('./components/topnav/topnav'));
const Modal = lazy(()=>import('./components/modal/Modal'));
const FullNavigation = lazy(()=>import('./components/fullscreen/FullNavigation'));
const skillprogress = lazy(()=>import('./components/skillprogress/SkillProgress'));
const PromptModal = lazy(()=>import('./components/promptmodal/PromptModal'));
const VideoPlayer = lazy(()=>import('./components/videoplayer/VideoPlayer'));
const TimeLine = lazy(()=>import('./components/timeline/TimeLine'));
const RangeSlider = lazy(()=>import('./components/range/RangeSlider'));
const Tooltip = lazy(()=>import('./components/tooltip/Tooltip'));
const HiddenElement = lazy(()=>import('./components/hiddenelement/HiddenElement'));
const Rating = lazy(()=>import('./components/rating/Rating'));
const Layout = lazy(()=>import('./components/layout/Layout'));
const Website = lazy(()=>import('./components/website/Website'));
const Typewriter = lazy(()=>import('./components/typewriter/Typewriter'));
const LikeDislike = lazy(()=>import('./components/likedislike/LikeDislike'));
const Overlay = lazy(()=>import('./components/overlay/Overlay'));
const DragDrop = lazy(()=>import('./components/draggable/DragDrop'));
const FormValidation = lazy(()=>import('./components/formvalidation/FormValidation'));
const CopyPaste = lazy(()=>import('./components/copypaste/CopyPaste'));
const DetectCapsLock = lazy(()=>import('./components/capslock/DetectCapsLock'));
const ListFilter = lazy(()=>import('./components/listfilter/ListFilter'));
const Download = lazy(()=>import('./components/download/Download'));
const PopUpChat = lazy(()=>import('./components/popupchat/PopUpChat'));
const DropDownFilter = lazy(()=>import('./components/dropdownFilter/DropDownFilter'));
const Pagination = lazy(()=>import('./components/pagination/Pagination'));
const AutoComplete = lazy(()=>import('./components/autocomplete/AutoComplete'));
const GeoLocation = lazy(()=>import('./components/geolocation/GeoLocation'));
const PdfDownload = lazy(()=>import('./components/pdfdownload/PdfDownload'));

const App = ()=> (
  <React.Fragment>
  <Suspense fallback={<ShaktimaanSpin />} >
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
     <Route path="/validate" component={FormValidation} />
     <Route path="/copy" component={CopyPaste} />
     <Route path="/capslock" component={DetectCapsLock} />
     <Route path="/shakti" component={ShaktimaanSpin} />
     <Route path="/listfilter" component={ListFilter} />
     <Route path="/download" component={Download} />
     <Route path="/popupchat" component={PopUpChat} />
     <Route path="/dropdownfilter" component={DropDownFilter} />
     <Route path="/paginate" component={Pagination} />
     <Route path="/autocomplete" component={AutoComplete} />
     <Route path="/location" component={GeoLocation} />
     <Route path="/pdf" component={PdfDownload} />
     </Switch>
   </Suspense >
   </React.Fragment>
);

export default App;
