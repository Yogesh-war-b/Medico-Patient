import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './Components/Patience/Navbar'
import Patience from './Pages/Patience';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}
     
        <Patience />
      
    </>
  )
}

export default App
