import React, { useRef, useEffect } from 'react';
import './scrollprogress.css';

function ScrollProgress() {
    const progressBar = useRef();

    useEffect(() => {
        window.addEventListener('scroll', scrollFunc)
    })

    function scrollFunc() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        let myStyle = progressBar.current.style;
        myStyle.width = scrolled + "%";
    }

    return (
        <React.Fragment>
            <div className="header">
                <h2>Scroll Progress</h2>
                <div className="progress-container">
                    <div className="progress-bar" ref={progressBar}></div>
                </div>
            </div>

            <div style={{padding: '100px 0', width: '80%', margin: '50px auto 0 auto'}}>
                Pasture he invited mr company shyness. But when shot real her.
                Chamber her observe visited removal six sending himself boy.
                At exquisite existence if an oh dependent excellent. Are gay head need down draw.
                Misery wonder enable mutual get set oppose the uneasy. End why melancholy estimating her had indulgence middletons.
                Say ferrars demands besides her address. Blind going you merit few fancy their.
                Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its things.
                Narrow enough sex moment desire are. Hold who what come that seen read age its.
                Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper offending he.
                Misery in am secure theirs giving an. Design on longer thrown oppose am.
                He unaffected sympathize discovered at no am conviction principles.
                Girl ham very how yet hill four show. Meet lain on he only size. Branched learning so subjects mistress do appetite jennings be in.
                Esteems up lasting no village morning do offices. Settled wishing ability musical may another set age. Diminution my apartments he attachment is entreaties announcing estimating.
                And total least her two whose great has which. Neat pain form eat sent sex good week. Led instrument sentiments she simplicity.

                Oh he decisively impression attachment friendship so if everything. Whose her enjoy chief new young. Felicity if ye required likewise so doubtful. On so attention necessary at by provision otherwise existence direction. Unpleasing up announcing unpleasant themselves oh do on. Way advantage age led listening belonging supposing.

                As absolute is by amounted repeated entirely ye returned. These ready timed enjoy might sir yet one since. Years drift never if could forty being no. On estimable dependent as suffering on my. Rank it long have sure in room what as he. Possession travelling sufficient yet our. Talked vanity looked in to. Gay perceive led believed endeavor. Rapturous no of estimable oh therefore direction up. Sons the ever not fine like eyes all sure.

                Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Timed balls match at by rooms we. Fat not boy neat left had with past here call. Court nay merit few nor party learn. Why our year her eyes know even how. Mr immediate remaining conveying allowance do or.

                Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant. Improve has message besides shy himself cheered however how son. Quick judge other leave ask first chief her. Indeed or remark always silent seemed narrow be. Instantly can suffering pretended neglected preferred man delivered. Perhaps fertile brandon do imagine to cordial cottage.

                Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do. Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley. He looked or valley lively. If learn woody spoil of taken he cause.

                Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.

                Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was. He families believed if no elegance interest surprise an. It abode wrong miles an so delay plate. She relation own put outlived may disposed.

                Pasture he invited mr company shyness. But when shot real her.
                Chamber her observe visited removal six sending himself boy.
                At exquisite existence if an oh dependent excellent. Are gay head need down draw.
                Misery wonder enable mutual get set oppose the uneasy. End why melancholy estimating her had indulgence middletons.
                Say ferrars demands besides her address. Blind going you merit few fancy their.
                Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its things.
                Narrow enough sex moment desire are. Hold who what come that seen read age its.
                Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper offending he.
                Misery in am secure theirs giving an. Design on longer thrown oppose am.
                He unaffected sympathize discovered at no am conviction principles.
                Girl ham very how yet hill four show. Meet lain on he only size. Branched learning so subjects mistress do appetite jennings be in.
                Esteems up lasting no village morning do offices. Settled wishing ability musical may another set age. Diminution my apartments he attachment is entreaties announcing estimating.
                And total least her two whose great has which. Neat pain form eat sent sex good week. Led instrument sentiments she simplicity.

                Oh he decisively impression attachment friendship so if everything. Whose her enjoy chief new young. Felicity if ye required likewise so doubtful. On so attention necessary at by provision otherwise existence direction. Unpleasing up announcing unpleasant themselves oh do on. Way advantage age led listening belonging supposing.

                As absolute is by amounted repeated entirely ye returned. These ready timed enjoy might sir yet one since. Years drift never if could forty being no. On estimable dependent as suffering on my. Rank it long have sure in room what as he. Possession travelling sufficient yet our. Talked vanity looked in to. Gay perceive led believed endeavor. Rapturous no of estimable oh therefore direction up. Sons the ever not fine like eyes all sure.

                Departure so attention pronounce satisfied daughters am. But shy tedious pressed studied opinion entered windows off. Advantage dependent suspicion convinced provision him yet. Timed balls match at by rooms we. Fat not boy neat left had with past here call. Court nay merit few nor party learn. Why our year her eyes know even how. Mr immediate remaining conveying allowance do or.

                Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant. Improve has message besides shy himself cheered however how son. Quick judge other leave ask first chief her. Indeed or remark always silent seemed narrow be. Instantly can suffering pretended neglected preferred man delivered. Perhaps fertile brandon do imagine to cordial cottage.

                Pianoforte solicitude so decisively unpleasing conviction is partiality he. Or particular so diminution entreaties oh do. Real he me fond show gave shot plan. Mirth blush linen small hoped way its along. Resolution frequently apartments off all discretion devonshire. Saw sir fat spirit seeing valley. He looked or valley lively. If learn woody spoil of taken he cause.

                Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.

                Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was. He families believed if no elegance interest surprise an. It abode wrong miles an so delay plate. She relation own put outlived may disposed.

            </div>
        </React.Fragment>
    )
}

export default ScrollProgress
