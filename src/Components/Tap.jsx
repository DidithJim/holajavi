import React, { useState, useEffect } from 'react';

function Tap() {

  const [Tap, setTaps] = useState([]);

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
    .then(data=>setTaps(data))
    .catch(err=>console.log(err))

    
  }, []);


  return (
    <section className='seccion__tap'>
      
      {Tap.find(item => item.id === 4) && (
        <div className='seccion__tap--contenedor'>
            <img src="expand.png" alt="Imagen Teléfono Expand" className='imagenTelefono--tres'/>
            <img src="flecha3.png" alt="Imagen Flecha 3" className='imagenFlecha--tres' />
            <h2 className='seccion__tap--titulo'>Tap to expand</h2>
            <p className='seccion__tap--texto' key={Tap[3].id}>{Tap[3].text}</p>
       </div>
      )}
    </section>
  );
  }
  

export default Tap;
