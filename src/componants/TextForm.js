import React, { useState } from 'react'
// import './app.css'



export default function Textform(props) {


    const [text, setText] = useState('');
    const handleUpClick = () => {
        // console.log("uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("  Convert to uppercase", "success");
    }
    const handleLoClick = () => {
        // console.log("LowerCase was clicked"+ text); 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("  Convert to lowercase", "success");

    }
    const handleclearClick = () => {
        let newText = ('');
        setText(newText)
        props.showAlert("  Clear All", "warning");

    }
    const handleReverseText = () => {
        // console.log("Warning your data can be revesed .But don't worry because you can again reverse it to get the correct data.Thank you for using this function.");
        const Text = text.split("");
        let reverseText = Text.reverse().toString().replaceAll(",", "");


        console.log(Text.reverse().toString().replaceAll(",", ""));
        setText(reverseText)      
        props.showAlert("  Your data can be revesed .But don't worry because you can again reverse it to get the correct data.", "warning");

    }
    // const download = (filename, text) => {
    //     var element = document.createElement('a');
    //     element.setAttribute('href', 'data:text/plain; charset=utf-8,' + encodeURIComponent(text));
    //     element.setAttribute('download', filename);
    //     element.style.display = 'none';
    //     document.body.appendChild(element);
    //     element.click();
    //     document.body.removeChild(element);
    //     props.showAlert("  Dowload start", "success");

    // }
  

    const handleCopy = () => {
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("  Copy to clipbordS", "success");
        

    }


    const handleOnChange = (event) => {
        console.log("uppercase was clicked");
        setText(event.target.value)
    }
    return (
        <>
            <div className={`container p-4 mt-4 !important `}>
            
                <h2 className={`display-4 pb-2 text-${props.mode === 'light' ? 'dark' : 'light'} `} style={{color :props.mode === 'dark'? 'white':'#042844'}}>{props.heading}</h2>
                {/* <hr /> */}



                <div className="mb-3  text-danger bg-danger" >

                    <textarea className={`text-break fs-3 bg-${props.mode === 'dark' ? 'secondary' : 'light'} text-${props.mode === 'light' ? 'dark' : 'light'} form-control`} value={text} onChange={handleOnChange} id="myBox" rows="7" placeholder="Enter  Something "></textarea>
                </div>
                <div className="container m-2 p-2 opacity-100 ">
                    <button  disabled={text.length===0}className="rounded btn btn-primary  m-2 p-2 " onClick={handleUpClick}>Convert to UpperCase</button>
                    <button disabled={text.length===0} className="btn btn-primary m-2 p-2 " onClick={handleLoClick}>Convert to LowerCase</button>
                    <button disabled={text.length===0} className="btn btn-primary m-2 p-2 " onClick={handleReverseText}>Reverse</button>

                    <button disabled={text.length===0} className="btn btn-primary m-2 p-2 " onClick={handleCopy}>Copy <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                    </svg></button>
                    <button  disabled={text.length===0}className="btn btn-primary m-2 p-2 bg-danger " onClick={handleclearClick}>Delete <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg></button>




                    {/* <button className="btn btn-primary m-2 p-2 " id="dwn-btn"  onClick={download}>Download file</button> */}


                </div>

                <div className={`border border-dark display-6 container m-1  p-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                    <div className="display-6">
                        <h3 className="display-6 fsw-itallic">Text Summary</h3>
                        <hr/> 
                        <h5>{text.split(" ").filter((element)=>{return element.length!==0}).length} words And {text.length} characters</h5>
                        <h6>{0.008 * text.length} Minutes to Read</h6>
                    </div>

              

                </div>
                <div className={`fs-4  m-1 text-break    container p-2 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                <h3 className=" display-6" > Preview Here</h3>
                <hr />
                <p className="">{text.length > 0 ? text : "Nothing! to preview"}</p>
            </div>
            </div>
           

        </>
    )
}
