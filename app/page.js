import React from "react";
import ItemCard from "./src/components/ItemCard";
const items = [
  {
    id: 1,
    name: 'Ayoub',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 2,
    name: 'Mael',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 3,
    name: 'Ahmed',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 4,
    name: 'Khais',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 5,
    name: 'Nafise',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 6,
    name: 'Samy',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 7,
    name: 'Marine',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 8,
    name: 'Samina',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 9,
    name: 'Jonas',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  },
  {
    id: 10,
    name: 'Marc',
    img: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg'
  }
];

export default function Home() {
  return (
    <div className='h-full'>
      <div className="grid grid-cols-3 gap-2 px-4 pt-8">
        {items.map((item)=>(ItemCard(item)))}
      </div>
    </div>
  );
};
