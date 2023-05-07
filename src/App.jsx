import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import IdProduct from './pages/IdProduct'

function App() {

const dispatch = useDispatch ()

  useEffect(() => {
    dispatch (getAllProductsThunk ())
  }, [])


  return (
    <>
      <div>
      <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/product/:id' element={<IdProduct />}/>
    <Route/>
  </Routes>
      </div>
    </>
  )
}

export default App

