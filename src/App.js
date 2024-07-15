
import { useState } from 'react';
import './App.css';
import ds from './data.json';
import Product from './product';


function App() {
    // tao nuts c2
    const clickMe =()=>alert("chao Sinhnd")
    // cach tao nut dem so lan click
    let[counter,setcounter]=useState(0)
  return (
    <div className="App">
      <header className="App-header">
       <h2>Product List</h2>
       {/* tạo nút cách 1 */}
       <button  className="btn btn-success mt-3" onClick={()=>alert("hello")}> clickme</button>
       {/* tao nut cach 2 */}
       <button className= "btn btn-danger mt-3 " onClick={clickMe}> click-ta</button>
        {/* cach tao nut dem so lan click */}
        <button className='btn btn-info mt-3' onClick={()=>setcounter(++counter)}>click-no{counter} time (s)</button>
      </header>
      <section className="row mt-0">
        {
          ds.map(item=>(
            <div className=' col-sm-6 col-md-3'>
              <Product id={item.id} name={item.name} price={item.price} pict={item.pict} />
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default App;
