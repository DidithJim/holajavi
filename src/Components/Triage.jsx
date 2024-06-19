import React, { useState, useEffect } from 'react';

function Triage() {

  const [triage, setTriages] = useState([]);

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
    .then(data=>setTriages(data))
    .catch(err=>console.log(err))

    
  }, []);


  return (
    <section className='seccion__hero'>
      
      {triage.find(item => item.id === 1) && (
        <div className='seccion__hero--contenedor'>
            <img src="hero2.png" alt="Imagen Hero" className='imagenHero' />
            <h2 className='seccion__hero--titulo'>Triage is first aid for your inbox</h2>
            <p key={triage[0].id}>{triage[0].text}</p>
            <img src="descarga.png" alt="Boton Descarga" className='botonDescarga'/>
            <img src="hero.png" alt="Imagen Hero Teléfono" className='imagenTelefono' />
        </div>
      )}
    </section>
  );
  }
  

export default Triage;
