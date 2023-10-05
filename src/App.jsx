import { Route, Routes } from 'react-router-dom'
import Body from './components/Body.jsx'
function App() {

  return (
    <>
      <Routes>
        <Route index Component={Body} />
      </Routes>

    </>
  )
}

export default App
