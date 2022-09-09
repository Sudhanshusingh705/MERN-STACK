import React, { useState } from 'react'

const Eventhanding = () => {

    let x = 10;

    const [count, setCount] = useState(10);

    const handleClick = () => {
        console.log('button was clicked');
        x++;

        console.log(x);
    }

    const loadImage = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (data) => {
        console.log(data);
      }
      reader.readsAsDataURL(file);
    }

    


  return (
    <div className='App'>
         <h1 className="head1" style={ { color : 'cyan', backgroundColor : 'black' } }>EVENT-HANDLING </h1>
        <hr />

        <h2 className="head1" style={ { color : 'red', backgroundColor : 'black' } }>Click Event</h2>
        <button type="button" className='btn btn-info btn-rounded' onClick={ (e) => { alert('You clicked that button');} } >Handle Click</button>

        
         <button className='btn btn-secondary btn-rounded' onClick={handleClick} >Passing Defined Function</button>
         <h1>{x}</h1>

         <button className='btn btn-success btn-rounded' onClick={ () => {setCount(count+1); } }>Updating State</button>
         <h1>{count}</h1>

         <h2>Change Event</h2>
         <div className='input-group'>
            <input className='form-control' onChange={(e) => {console.log(e.target.value) } } />
            <button className='btn btn-primary'>Send</button>
         </div>

         <input className='form-control mt-4' type="file" onChange={(e) => { console.log(e.target.files) }} />
        </div>
  )
}

export default Eventhanding;