import React, { useState, useEffect } from 'react';

function Right() {

  const [Right, setRights] = useState([]);

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
    .then(data=>setRights(data))
    .catch(err=>console.log(err))

    
  }, []);


  return (
    <section className='seccion__right'>
      
      {Right.find(item => item.id === 3) && (
        <div className='seccion__right--contenedor'>
            <img src="flecha2.png" alt="Imagen Flecha 2" className='imagenFlecha--dos'/>
            <h2 className='seccion__right--titulo'>Drag right to keep</h2>
            <p className='seccion__right--texto' key={Right[2].id}>{Right[3].text}</p>
            <img src="keep.png" alt="Imagen Teléfono Keep" className='imagenTelefono--keep' />
        </div>
      )}
    </section>
  );
  }
  

export default Right;
