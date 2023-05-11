import '../styles/sliderimg.css'

const SliderImg = ({product}) => {
  return (
    <div className='slider__prod'>
    <button  className='slider__btn'>&lt;</button>
      <div className='slider__mov'>
        {
        product?.images.map(imgProd =>(
          <div className='slider__box-img'>
          <img className='slider__img' key={imgProd.id} src={imgProd.url} alt=''/></div>
        ))
        }
      </div>
    <button className='slider__btn slider__right' >&gt;</button>
  </div>
  )
}

export default SliderImg