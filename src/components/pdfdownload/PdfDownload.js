import React, { useRef, useState } from 'react';
import './pdf.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function PdfDownload() {

    const pdfRef = useRef();

    const [state, setState] = useState({firstName: "", lastName: "", email: ""});

//     html2canvas(quotes, {
//         onrendered: function(canvas) {

//         //! MAKE YOUR PDF
//         let pdf = new jsPDF('p', 'pt', 'letter');

//         for (let i = 0; i <= quotes.clientHeight/980; i++) {
//             //! This is all just html2canvas stuff
//             let srcImg  = canvas;
//             let sX      = 0;
//             let sY      = 980*i; // start 980 pixels down for every new page
//             let sWidth  = 900;
//             let sHeight = 980;
//             let dX      = 0;
//             let dY      = 0;
//             let dWidth  = 900;
//             let dHeight = 980;

//             window.onePageCanvas = document.createElement("canvas");
//             onePageCanvas.setAttribute('width', 900);
//             onePageCanvas.setAttribute('height', 980);
//             let ctx = onePageCanvas.getContext('2d');
//             // details on this usage of this function: 
//             // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
//             ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

//             // document.body.appendChild(canvas);
//             let canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

//             let width         = onePageCanvas.width;
//             let height        = onePageCanvas.clientHeight;

//             //! If we're on anything other than the first page,
//             // add another page
//             if (i > 0) {
//                 pdf.addPage(612, 791); //8.5" x 11" in pts (in*72)
//             }
//             //! now we declare that we're working on that page
//             pdf.setPage(i+1);
//             //! now we add content to that page!
//             pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));

//         }
//         //! after the for loop is finished running, we save the pdf.
//         pdf.save('test.pdf');
//     }
//   });
// }

    const handleSubmit = () => {
        //  html2canvas(pdfRef.current)
        //  .then(canvas=>{
        //      const pdfData = canvas.toDataURL('image/png');
        //      const pdf = new jsPDF();
        //      pdf.addImage(pdfData, 'JPEG', 0, 0);
        //      pdf.output("dataurlnewwindow");
        //      pdf.save("mytidbit.pdf");
        //  })
        let doc = new jsPDF()

        doc.text(`FirstName:  ${state.firstName}`, 10, 10);
        doc.text(`LastName:  ${state.lastName}`, 10, 20);
        doc.text(`Email:  ${state.email}`, 10, 30);
        doc.autoPrint();
        doc.output("dataurlnewwindow");
        doc.save('mytidbit.pdf')
    };

    const handleChange = (e) => {
        e.persist();
        setState(prevState=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    };

    const buttonClick = () => {
        window.print();
    }

    return (
        <React.Fragment>
            <h1 style={{ textAlign: 'center' }}>Mytidbit PDF Generator</h1>
            <div className="main2" ref={pdfRef}>
                {/* <p contentEditable="true">Edit this line of text with what you want...!</p> */}
                <form onSubmit={handleSubmit}>
                    <label>FirstName:</label>
                    <input type="text" className="name2" name="firstName" placeholder="First name.." onChange={handleChange} required />

                    <label>LastName:</label>
                    <input type="text" className="name2" name="lastName" placeholder="Last name.." onChange={handleChange} required />

                    <label>Email Address:</label>
                    <input type="email" className="name2" name="email" placeholder="Email.." onChange={handleChange} required />

                    <input type="submit" className="submity" value="Create Pdf" />
                    <button className="submity" onClick={buttonClick}>Download the entire page</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default PdfDownload
