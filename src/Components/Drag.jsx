import React, { useState, useEffect } from 'react';

function Drag() {

  const [drag, setDrags] = useState([]);

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

    fetch(VITE_CONTENIDO, options)
    .then(res=>res.json())
    .then(data=>setDrags(data))
    .catch(err=>console.log(err))

    
  }, []);


  return (
    <section className='seccion__drag'>
      
      {drag.find(item => item.id === 2) && (
        <div className='seccion__drag--contenedor'>
            <img src="archive.png" alt="Imagen Teléfono Archivo" className='imagenTelefono--archivo' />
            <img src="flecha.png" alt="Imagen Flecha" className='imagenFlecha'/>
            <h2 className='seecion__drag--titulo'>Drag left to archive</h2>
            <p className='seccion__drag--texto' key={drag[1].id}>{drag[1].text}</p>
        </div>
      )}
    </section>
  );
  }
  

export default Drag;
