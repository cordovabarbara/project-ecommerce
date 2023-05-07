import React from 'react'

const SliderImg = ({product}) => {
  return (
    <div>
        <img src={product?.images[0].url} alt=''/>
    </div>
  )
}

export default SliderImg