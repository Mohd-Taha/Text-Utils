// import React from 'react'
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Upper Case was clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Cnoverted to upper case" , "success");
    }
    const handleLowClick = () =>{
        console.log("Lower Case was clicked")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Cnoverted to lower case" , "success");
    }
    const handleClearClick =() =>{
      let newText = '';
      setText(newText);
      props.showAlert("Text cleared" , "success");
    }
    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
      var text = document.getElementById('mybox');
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied" , "success");
    }
    const handleExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra space removed" , "success");
    }
    const [text, setText] = useState(" ");
  return (
    <>
    <div className = "container" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h3>Enter text here</h3>
      <div className="text-area">
      <textarea className="form-control my-3" id="mybox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick ={handleUpClick} >Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick ={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick ={handleClearClick}>Clear Text </button>
      <button className="btn btn-primary mx-1" onClick ={handleCopy}>Copy Text </button>
      <button className="btn btn-primary mx-1" onClick ={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minute read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
