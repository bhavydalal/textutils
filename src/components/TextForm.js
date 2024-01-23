import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert("Converted to Lowercase!","success");

    }
    const handleClrClick = () =>{
        let newText = "";
        setText(newText); 
        props.showAlert("Text cleared!","success");

    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
       navigator.clipboard.writeText(text);
       props.showAlert("Copied to Clipboard!","success");
    }

    const handleRemoveSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join (" ")); 
        props.showAlert("extra spaces removed!","success");

    }

    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
    <h3 className='mb-3'>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'rgb(91 91 91)':'white'}} value={text} id="myBox" rows="10"></textarea>
        <button disabled={text.length===0} className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-2' onClick={handleClrClick}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-2' onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className='btn btn-primary my-3 mx-2' onClick={handleRemoveSpace}>Remove Space</button>

     </div>
    </div>

    <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>

        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} Characters</p>

        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>

  )
}
