

import 'bootstrap/dist/css/bootstrap.min.css';

import Product from './Product'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Dashboard from './dashboard';
import Cart from './cart';
import RootLayout from './rootLayout';

function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = "/" element ={<RootLayout/>}>
      <Route index element = {<Dashboard/>}></Route>
      <Route path = "/cart" element = {<Cart></Cart>}></Route>
    </Route>
  ))
  return (
    
    <div className = "App" style = {{
      textAlign : "center"
    }}>
        <RouterProvider router = {router}></RouterProvider>
        
      </div> 
    
  );
}

export default App
