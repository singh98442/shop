import React from 'react'
import image1 from '../../imgs/img1.png'
import image2 from '../../imgs/img2.png'
import image3 from '../../imgs/img3.png'

const Review = () => {
  return (
    <div className='review flex flex-col gap-3 justify-center items-center'>
        <img className=' w-20 h-20' src={image1} alt="" />
        <div className=' flex flex-col gap-2 items-center justify-center'>
            <h3 className=' font-bold fon text-2xl'>Hello, World</h3>
            <p className=' font-bold text-xm italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam beatae quae velit perferendis animi?</p>

        </div>
        <img className=' w-20 h-20' src={image2} alt="" />
        <div className=' flex flex-col gap-2 items-center justify-center'>
            <h3 className=' font-bold fon text-2xl'>Hello, World</h3>
            <p className=' font-bold text-xm italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam beatae quae velit perferendis animi?</p>

        </div>
        <img className=' w-20 h-20' src={image3} alt="" />
        <div className=' flex flex-col gap-2 items-center justify-center'>
            <h3 className=' font-bold fon text-2xl'>Hello, World</h3>
            <p className=' font-bold text-xm italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam beatae quae velit perferendis animi?</p>

        </div>
      
    </div>
  )
}

export default Review
