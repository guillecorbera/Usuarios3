// import { useState } from 'react'
import './App.css'
// import Books from './components/Books'
// import CreateBooks from './components/CreateBooks'

import Usuarios from './components/Usuarios'
import CreateUsuarios from './components/CreateUsuarios'
import EditUsuarios from './components/EditUsuarios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Usuarios/>}></Route>
        <Route path="/create" element={<CreateUsuarios/>}></Route>
        <Route path="/edit/:id" element={<EditUsuarios/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
