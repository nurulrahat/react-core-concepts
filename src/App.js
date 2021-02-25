
import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

//create shopping cart function

function ShoppingCart(props) {
  const stylesVar = {
    border: '2px solid yellow',
    margin: '5px',
    width: "250px",
    height: '300px',
    float: 'left',
    backgroundColor: 'grey',
    borderRadius: '10px'
  }
  console.log(props.product.name)
  return (
    // <div style={stylesVar}>
    //   <h3>Name:{props.name}</h3>
    //   <h2>Price:{props.price}</h2>
    //   <button>Buy Now</button>
    // </div>
    <div style={stylesVar}>
      <h3>Name:{props.product.name}</h3>
      <h2>Price:{props.product.price}</h2>
      <button>Buy Now</button>
    </div>
  )
}
//created function1
function CreateHtag(props) {
  const stylesView = {
    border: '2px solid yellow',
    margin: '5px'
  }
  // {border:'2px solid red', margin:'5px'}
  console.log(props)
  return (
    <div style={stylesView}>
      <h1>{props.name}</h1>
      <h2>{props.Age}</h2>
    </div>
  )
  // <h2>this h2</h2>)
}
//state function
function Counter(){
 const [counting,setCount]=useState(1);
 const increaseHandler=()=>{
   //const countIncrease=counting+1;
   setCount(counting+1)
 }
 const decreaseHandler=()=>{
  //const countIncrease=counting+1;
  setCount(counting-1)
}

return(
  <div>
    <h1>Count: {counting}</h1>
<button onMouseMove={increaseHandler}>Increase</button>
<button onClick={decreaseHandler}>Decrease</button>
  </div>

)
}

// Api call in react
function UsersApi(){
const [users,setUsers]=useState([]);
useEffect(()=>{
  //console.log("repeat auto")
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUsers (data))
  
},[])
return(
<div>
  <h2>Dynamic User:</h2>
  <ul>
    {
       users.map(user=><li>{user.name}</li>)
    }
 
  </ul>

</div>

)}
function App() {
  var styleName = {
    color: 'red',
    backgroundColor: "blue"

  }
  const anyName = ["Monu Mia", "Chunnu Mia", "Kalam", "Shuvo", 'Extra Mia'];
  const allProducts = [
    { name: 'Photoshop', price: '92$' },
    { name: 'Illustrator', price: '51$' },
    { name: 'Pdf Reader', price: '72$' }
  ]
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Re-edited <code>src/App.js</code> and save to reload.
        </p>
        <p style={{ backgroundColor: 'white', color: 'red' }}>First paragraph added {25 * 5} </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={styleName}
        >
          Learn React
        </a>

        <ul>
          {
            anyName.map(names => <li>{names}</li>)
          }
        </ul>
        {/* <ShoppingCart name={allProducts[0].name} price={allProducts[0].price}></ShoppingCart> */}
        <ShoppingCart product={allProducts[0]}></ShoppingCart>
        <ShoppingCart product={allProducts[1]}></ShoppingCart>
        <ShoppingCart product={allProducts[2]}></ShoppingCart>

        {/* ShoppingCart with map  */}
        {
          allProducts.map(productDetails => <ShoppingCart product={productDetails}></ShoppingCart>)
        }

        <CreateHtag name="Nurul Rahat" Age="22"></CreateHtag>
        <CreateHtag name="Nazmus Sakib" Age="32"></CreateHtag>
        <CreateHtag name="Abdur Rahim" Age="25"></CreateHtag>
        <CreateHtag></CreateHtag>

        <Counter></Counter>
          <UsersApi></UsersApi>
      </header>


    </div>

  );
}

export default App;
