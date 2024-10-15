import React from 'react'
import Button from '../Button';

const ProductCard = ({ imageSrc, name }) => {
  return (
    <div className='border shadow-md flex flex-col items-center gap-2 w-40 p-5'>
      <img src={imageSrc} className='w-24 h-{124px}' />
      <span className='font-bold text-sm'>{name}</span>

      <div>
      <Button name="View" onClick={() => console.log(name)} className="bg-green-500 hover:bg-green-600" />
      </div>
    </div>
  )
}

export default ProductCard;