import React from "react";
import ItemCard from "./src/components/ItemCard";
import React, { useState, useEffect } from 'react';



export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // Fonction de récupération des données depuis l'API externe
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8097/sakilamdb/products');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData(); // Appel de la fonction fetchData lors du montage du composant

    // Nettoyage : fonction exécutée lors du démontage du composant
    return () => {
      // Effectuer des actions de nettoyage si nécessaire
    };
  }, []); // [] signifie que useEffect s'exécutera uniquement une fois, lors du montage initial

  return (
    <div className='h-full'>
      <div className="grid grid-cols-4 gap-2 px-4 pt-8">
        {data.map((item)=>(ItemCard(item)))}
      </div>
    </div>
  );
};
