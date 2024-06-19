import React, { useState, useEffect } from 'react';

function Cards() {

  const [Cards, setCards] = useState([]);

  const {VITE_CONTENIDO} = import.meta.env

 

  useEffect(() => {
    let controller = new AbortController();
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    };

    fetch(VITE_CONTENIDO,options)
    .then(res=>res.json())
    .then(data=>setCards(data.slice(5)))
    .catch(err=>console.log(err))

    
  }, []);


  return (
    <section className='seccion__cards'>
      <div className='seccion__cards--contenedor'>
        {Cards.map(card => (
          <div key={card.id} className='card' style={{ backgroundColor: card.color }}>
            <img src={card.image} alt={`Card ${card.id}`} className='card__image' />
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
  

export default Cards;
