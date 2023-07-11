
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Add from './pages/Add'
import Home from './pages/Home'
import Edit from './pages/Edit'
import { Provider } from 'react-redux'
import store from './redux/app/store'

function App() {


  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/edit' element={<Edit></Edit>}></Route>
      </Routes>
    </Provider>
  )
}

export default App
