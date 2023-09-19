import React,{useState} from 'react'

const TextForm = (props) => {
  const handleUpClick = ()=>{
  console.log("upper case was click" +text)
   const newText = text.toUpperCase();
  setText(newText)
  props.showalert("Converyed to upper case ","success")
  }
  //  Convert the Uppercase case  
  const handleOnChage = (event)=>{
    console.log("upper case was click")
    setText(event.target.value)

      }
 //  Convert the remove line  
      const handleupdown = (event)=>{
        console.log("upper case was removed")
        setText(event.target.value);
      
    
          }
//  Convert the lower case     
          const handleuplower = (event)=>{
            console.log("Convert Lowercase")
        const newText = text.toLowerCase();
  setText(newText)
              }
// Cpoy Method Entireline    
              const handleCopy =()=>{
                console.log("I am copy")
                var text = document.getElementById("Mytext")
                text.select();
                navigator.clipboard.writeText(text.value);
              }
   // Remove to Extra Spaces
   const Spaces =()=>{
    console.log("no  spaces")
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
   }

              
  const  [text ,setText] = useState("")
  return (
    
   <>
<div className="container" style={{color:props.mode==='dark '?'light':'black' }} >
<h1>{props.hea}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChage}  style={{backgroundColor:props.mode==='dark'?'light':'white', }}   id="Mytext" rows="8"  ></textarea>
</div>
  <button className="btn btn-primary mx-2" onClick= {handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick= {Spaces}>Remove to Extra Spaces</button>
  <button className="btn btn-primary mx-2" onClick= {handleCopy}>Copt Text</button>
  <button className="btn btn-primary  mx-2" onClick= {handleupdown}>Text Remove</button>
  <button className="btn btn-primary  mx-2" onClick= {handleuplower}>Convert to Lowercase</button>
  </div>
  <div className="container my-4" >
    <h1>Your text summmary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{ 0.008* text.split(" ").length} Minutes read</p>
    <h1>Preview</h1>
    <p>{text.length>0?text:"Please enter a text"}</p>
  </div>

    </>
  )
}

export default TextForm
