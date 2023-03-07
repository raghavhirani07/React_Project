import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState('');
  const uppercasechange = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const clearTextchange = () => {
    setText('');
  }
  const upperlowchange = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const onchangetext = (e) => {
    setText(e.target.value);
  };
  const copyText =(e) => {
    navigator.clipboard.writeText(text)
    console.log(e)
    }

  return (
    <>
      <div className='container'>
        <div className='mb-3 mt-4'>
          <label for='myBox' className='form-label h4'>
            {props.header}
          </label>
          <textarea
            className='form-control'
            id='myBox'
            rows='3'
            onChange={onchangetext}
            value={text}></textarea>
        </div>
        <button className='btn btn-primary mx-2 btn-sm' onClick={uppercasechange}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2 btn-sm' onClick={upperlowchange}>Convert to lowerCase</button>
        <button className='btn btn-primary mx-2 btn-sm' onClick={clearTextchange}>Clear Text</button>
        <button className='btn btn-primary mx-2 btn-sm' onClick={copyText} data-toggle="tooltip" data-placement="bottom" title="Copy to ClipBoard">Copy Text</button>
      </div>
      <div className='container mt-3'>
        <h4> Your Text summary </h4>
        <p>
          {text.split(" ").length} Words And {text.length} Charater
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h4> Preview </h4>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
