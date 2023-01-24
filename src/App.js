import Navbr from './components/Navbr'
import Footer from './components/Footer'
import Complaint from './components/Complaint'
import {RouterProvider ,createBrowserRouter } from 'react-router-dom';
import Rootlayout from './components/Rootlayout';
import { Children } from 'react';
import Home from './components/Home';
import './App.css'

function App() {
      
    const router=createBrowserRouter([
      {
        path:'/',
        element:<Rootlayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/complaint',
          element:<Complaint/>,
          children:[
            {
              path:"hospital",
            }
          ]
        }
      ]
    }
    ])




  return (

    
    <div>
      <RouterProvider router={router}/>
    </div>
   
  );
}

export default App;
