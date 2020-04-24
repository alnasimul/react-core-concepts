import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const names = ['Nasimul','Sadaf','Rafa','Mahfuz','Marzan'];
  // const products = [
  //   {name: 'Adobe Photoshop', price: '$60.99'},{name: 'Adobe Illustrator', price: '$50.99'},{name: 'Adobe Reader', price: '$10.99'}
  // ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My first react paragraph</p>
        <Counter></Counter>
        <Users></Users>
        {/* <ul>
          {names.map(name => <li>{name}</li>)}
        </ul>
        {products.map(product => <Product product={product}></Product>)}

        {/* <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product> */} 
      </header>
    </div>
  );
}

// function Person(){
//   const personStyle = {
//     color:'cyan',
//     border: '1px solid gray',
//     margin: '20px 20px',
//     padding: '20px 20px',
//   }
//   return (
//     <div style={personStyle}>
//       <h1>Name: Al Nasimul Haque </h1>
//       <h3>Profession: Web Developer</h3>
//     </div>
//   )
// }

function Product(props){
  const productStyle = {
    color: 'white',
    border: '1px solid gray',
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    width: '200px',
    height: '200px',
    float:'left',
  }
  
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [count,setCount] = useState(10);
  let Increase = () => setCount (count+1) ;
  let Decrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, getUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => getUsers(data) )
  },[])
  return (
    <div>
      <h1>Dynamic Users: {users.length}</h1>
      <ul>
        {users.map(user => <li>{user.name}</li> )}
      </ul>
      {/* {console.log(users)} */}
    </div>
  )
}
export default App;
