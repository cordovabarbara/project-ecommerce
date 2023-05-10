import React from 'react'

const SliderImg = ({product}) => {
  return (
    <div className='slider__prod'>
      <div className='slider__mov'>
      {
        product?.images.map(imgProd =>(
          <img key={imgProd.id} src={imgProd.url} alt=''/>
        ))
      }

      </div>
    </div>
  )
}

export default SliderImg