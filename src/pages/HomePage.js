import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Joyride from 'react-joyride';

function HomePage() {

    const [steps, setSteps] = React.useState([
        {
            content: <h2>Let me take you around!</h2>,
            locale: { skip: <strong aria-label="skip">SKIP</strong> },
            placement: 'center',
            disableBeacon: true,
            target: 'body',
        },
        {
            content: <h2>These are my cool collections</h2>,
            floaterProps: {
                disableAnimation: true,
            },
            spotlightPadding: 20,
            target: '.a',
        },
        {
            content: 'These are my super awesome projects!',
            placement: 'bottom',
            styles: {
                options: {
                    width: 300,
                },
            },
            target: '.b',
            title: 'Mytidbit',
        },
        {
            content: (
                <div>
                    All features at one place
                    <br />
                    <h3>Wassup Dee..</h3>
                </div>
            ),
            placement: 'top',
            target: '.c',
            title: 'Mytidbit',
        },
        {
            content: (
                <div>
                    <h3>Hope you like it</h3>
                    <svg
                        width="50px"
                        height="30px"
                        viewBox="0 0 96 96"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                    >
                        <g>
                            <path
                                d="M83.2922435,72.3864207 C69.5357835,69.2103145 56.7313553,66.4262214 62.9315626,54.7138297 C81.812194,19.0646376 67.93573,0 48.0030634,0 C27.6743835,0 14.1459311,19.796662 33.0745641,54.7138297 C39.4627778,66.4942237 26.1743334,69.2783168 12.7138832,72.3864207 C0.421472164,75.2265157 -0.0385432192,81.3307198 0.0014581185,92.0030767 L0.0174586536,96.0032105 L95.9806678,96.0032105 L95.9966684,92.1270809 C96.04467,81.3747213 95.628656,75.2385161 83.2922435,72.3864207 Z"
                                fill="#000000"
                            />
                        </g>
                    </svg>
                </div>
            ),
            placement: 'left',
            target: '.d',
        }
    ]);

    useEffect(() => {
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            //showInstallPromotion();
        })
    }, []);

    return (
        <div style={{ textAlign: 'center', lineHeight: '2' }}>
            <h1>Mytidbit Home Page</h1>
            <Joyride steps={steps} continuous={true}
             scrollToFirstStep={true}
             showProgress={true}
             showSkipButton={true} styles={{
                options: {
                    width: 300,
                   
                    backgroundColor: 'lightgray',
                    opacity: 0.9
                },
            }}/>
            <Link to="/spin" className="a">Spinner/Loader</Link><br />
            <Link to="/progress">Progress Bar</Link><br />
            <Link to="/scrollprogress">Scroll Progress Bar</Link><br />
            <Link to="/sidenav">Side NavBar</Link><br />
            <Link to="/topnav">Top NavBar</Link><br />
            <Link to="/fullnav">Full Screen Navigation</Link><br />
            <Link to="/skillprogress">Skill Progress</Link><br />
            <Link to="/modal">Modal</Link><br />
            <Link to="/promptmodal">Prompt Modal</Link><br />
            <Link to="/video">Video Player</Link><br />
            <Link to="/timeline" className="b">Posts/Comments Time Line</Link><br />
            <Link to="/range">Range Slider</Link><br />
            <Link to="/tool">Tool Tip</Link><br />
            <Link to="/hidden">Hidden Element</Link><br />
            <Link to="/rating">Rating</Link><br />
            <Link to="/layout">Simple Layout</Link><br />
            <Link to="/website">Simple website Layout</Link><br />
            <Link to="/typewriter" className="c">Typewriter Effect</Link><br />
            <Link to="/like">Like Dislike</Link><br />
            <Link to="/overlay">Overlay</Link><br />
            <Link to="/drag">Drag Drop</Link><br />
            <Link to="/validate">Form Validation</Link><br />
            <Link to="/copy">Copy Paste</Link><br />
            <Link to="/capslock">Caps Lock</Link><br />
            <Link to="/shakti">Shaktimaan Spinner</Link><br />
            <Link to="/listfilter">List Filter</Link><br />
            <Link to="/download">Download</Link><br />
            <Link to="/popupchat">Pop Up Chat</Link><br />
            <Link to="/dropdownfilter">Drop Down List Filter</Link><br />
            <Link to="/paginate">Pagination</Link><br />
            <Link to="/autocomplete" className="d">Auto Complete</Link><br />
            <Link to="/location">Location Finder</Link><br />
            <Link to="/pdf">PDF Generator</Link><br />
            <Link to="/osigninup">OverLay SignIn SignUp</Link><br />
        </div>
    )
}

export default HomePage
