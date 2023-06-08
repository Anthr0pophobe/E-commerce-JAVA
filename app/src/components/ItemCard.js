import React from 'react';
import Image from 'next/image';
import img from '../img/chat.jpeg';


const ItemCard = (item) => {
  return (
    <div key={item.id} className=' w-full bg-gray-400 p-4 flex  justify-center'>
      <div className='flex flex-col justify-center'>
        <Image 
          src={img}
          width={300}
          height={300}
          alt={`${item.name}'s picture`}
        />
        <p className='text-center text-xl'>
        {item.name}
        </p>
      </div>
    </div>
  )
}

export default ItemCard;