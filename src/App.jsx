import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch, useSelector } from 'react-redux'

function App() {

const { productGlobal } = useSelector (state => state)

const dispatch = useDispatch ()

  useEffect(() => {
    dispatch (getAllProductsThunk ())
  }, [])

console.log(productGlobal);

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

