import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import IdProduct from './pages/IdProduct'
import Header from './components/shared/Header'
import Register from './pages/Register'
import Login from './pages/Login'
import configToken from './utils/configToken'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'

function App() {

const dispatch = useDispatch ()

  useEffect(() => {
    dispatch (getAllProductsThunk ())
  }, [])

  const getPostCart = (url,data) => {
    axios.post (url, data, configToken ())
      .then(res => console.log(res.data))
      .catch (err => console.log(err))
  }


return (
  <div className='app'>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/product/:id' element={<IdProduct />}/>
    <Route path='/cart' element={<Cart />}/>
    <Route path='/purchase' element={<Purchases />}/>
    <Route/>
    </Routes>
    </div>
  )
}

export default App
