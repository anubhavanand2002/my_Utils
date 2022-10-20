import React,{useState} from 'react';
import './Navbar.css';
// let text1="";
export default function TextForm(props) {
  const[text,settext]=useState(""); 
  function change(event)
  {
    settext(event.target.value);
  }
  function UpperCase()
  {
    settext(text.toUpperCase());
  }
  function LowerCase()
  {
    settext(text.toLowerCase());
  }
  function RemoveSpace()
  {
    let newtext = text.replace(/[" "]+/g, " ").trim();
    settext(newtext);
  }
  function Cleartext()
  {
    settext("");
  }
  function CopyText()
  {
    navigator.clipboard.writeText(text);
  } 
  function TitleCase()
  {
    //here newtext stores the string came just before and just after spaces
    let newtext=text.toLowerCase().split(" ");
    for(var i=0;i<newtext.length;i++)
    {
      newtext[i]=newtext[i].charAt(0).toUpperCase()+newtext[i].slice(1);
    }
    settext(newtext.join(" "));
  }
  // const[text,settext]=useState(text1);
  return (
    <div>
        <div className="mb-3 he">
            <label for="props.heading" class="form-label">{props.Heading}</label>
            <textarea class="form-control" id="props.heading" rows="8" value={text} onChange={change}></textarea>
        </div>
        <button type="button" class="btn btn-primary my-3 mx-2" onClick={UpperCase}>Convert to Uppercase</button>
        <button type="button" class="btn btn-danger my-3 mx-2" onClick={LowerCase}>Convert to Lowercase</button>
        <button type="button" class="btn btn-info my-3 mx-2" onClick={RemoveSpace}>Remove Extra Spaces</button>
        <button type="button" class="btn btn-success my-3 mx-2" onClick={Cleartext}>Clear Text</button>
        <button type="button" class="btn btn-primary my-3 mx-2" onClick={CopyText}>Copy Text</button>
        <button type="button" class="btn btn-info my-3 mx-2" onClick={TitleCase}>Convert to TitleCase</button>
    </div>
  )
}
