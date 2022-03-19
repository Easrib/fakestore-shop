import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './component/menubar/Menubar';
import Allproduct from './component/allproduct/Allproduct';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)

  const AddToCart = () => setCount(count + 1)
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <Allproduct AddToCart={AddToCart}></Allproduct>
    </div>
  );
}

export default App;
