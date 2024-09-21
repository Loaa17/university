import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Mainform from './Components/Mainform/Mainform'
import Submited from './Components/Submited/Submited'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'


let routs = createBrowserRouter([


  {path:"" , element : <Layout/> , children:[

    {index:true , element:<Home/>},
    {path:"submited" , element:<Submited/>},

  ]}


])

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
   <RouterProvider router={routs}></RouterProvider>
    </>
  )
}

export default App
