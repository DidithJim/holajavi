import React, { useState, useEffect } from 'react';

function Reply() {

  const [Reply, setReplies] = useState([]);

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
    .then(data=>setReplies(data))
    .catch(err=>console.log(err))

    
  }, []);


  return (
    <section className='seccion__reply'>
      
      {Reply.find(item => item.id === 4) && (
        <div className='seccion__reply--contenedor'>
            <img src="flecha4.png" alt="Imagen Flecha 4" className='imagenFlecha--cuatro'/>
            <h2 className='seccion__reply--titulo'>Reply in context</h2>
            <p className='seccion__reply--texto' key={Reply[4].id}>{Reply[4].text}</p>
            <img src="reply.png" alt="Imagen Teléfono Reply" className='imagenTelefono--cuatro' />
       </div>
      )}
    </section>
  );
  }
  

export default Reply;
