import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Practise from './compoents/Practise.jsx'
import { Counterprovider } from './context/Counter.jsx'

createRoot(document.getElementById('root')).render(
  
    <Counterprovider> 
    <Practise />
    </Counterprovider>

)
