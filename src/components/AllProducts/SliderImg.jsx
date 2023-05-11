import { useState } from 'react'
import '../styles/sliderimg.css'

const SliderImg = ({product}) => {

  const [changeImg, setChangeImg] = useState(0)


  const objStyle = {
    transform: `translateX(calc(-${changeImg} /3 * 100%))`
  }

  const handlePrevious = () =>{
   if (changeImg - 1 < 0 ){
    setChangeImg(2)
  }else {
    setChangeImg(changeImg -1)
   }
  }

  const handleNext = () =>{
    if(changeImg +1 >2){
      setChangeImg(0)
    }else{
      setChangeImg(changeImg + 1)
    }

  }


  return (
    <div className='slider__prod'>
    <button onClick={handlePrevious}  className='slider__btn slider__left'>&lt;</button>
      <div style={objStyle} className='slider__mov'>
        {
        product?.images.map(imgProd =>(
          <div key={imgProd.id} className='slider__box-img'>
          <img 
          className='slider__img' 
          src={imgProd.url} alt=''/></div>
        ))
        }
      </div>
    <button onClick={handleNext}  className='slider__btn slider__right' >&gt;</button>
  </div>
  )
}

export default SliderImg