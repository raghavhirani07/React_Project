import React, { useState } from "react";

function About() {
  const [mystyle, setmystyle] = useState({backgroundColor: "antiquewhite"});
  const [btntext, setbtntext] =useState('Dark mode');

  const tooglebtn = () => {
    if(mystyle.backgroundColor === 'antiquewhite'){
        setmystyle({backgroundColor:'black'})
        setbtntext('Light mode')
    }
    else{
        setmystyle({backgroundColor:'antiquewhite'})
        setbtntext('Dark mode')
    }

  }
  return (
    <div className='container mt-4 w-100 h-100' style={mystyle}>
      <div className='jumbotron p-3 p-md-5 text-white rounded bg-dark'>
        <div className='col-md-6 px-0'>
          <h1 className='display-4 font-italic'>
            Title of a longer featured blog post
          </h1>
          <p className='lead my-3'>
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </p>
          <p className='lead mb-0'>
            <a href='/' className='text-white font-weight-bold'>
              Continue reading...
            </a>
          </p>
        </div>
      </div>
      <button className='btn btn-primary mt-5 ' onClick={tooglebtn}>{btntext} </button>
    </div>
  );
}

export default About;
