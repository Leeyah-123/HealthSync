import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Main from './Components/Main/Main'
import Signup from './Pages/Signup/Signup'
import Signin from './Pages/Signin/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Main/>}>
            <Route path='/'>
              <Route path='/' element={<Navigate to="signup"/>}/>
              <Route path='signup' element={<Signup/>}/>
              <Route path='signin' element={<Signin/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
