import React from "react";
import ItemCard from "./src/components/ItemCard";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8097/sakilamdb/products');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); 

    return () => {
    };
  }, []);

  return (
    <div className='h-full'>
      <div className="grid grid-cols-4 gap-2 px-4 pt-8">
        {data.map((item)=>(ItemCard(item)))}
      </div>
    </div>
  );
};
