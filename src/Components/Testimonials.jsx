import { useState,useEffect } from "react";

function Testimonials () {
    const [testimonials,setTestimonials] = useState([]);

    const {VITE_TESTIMONIOS} = import.meta.env



    useEffect(()=>{

        let controller = new AbortController();
        let options = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
            signal : controller.signal
        };

        fetch(VITE_TESTIMONIOS, options)
        .then(res=>res.json())   
        .then(data=>setTestimonials(data))
        .catch(err=>console.log(err))     
    },[])



   
    return (
        <section className="seccion__testimonials">
            <h2 className='seccion__testimonials--titulo'>Praise for Triage 1</h2>
            <div className="seccion__testimonials--contenedor">
                {testimonials.map((testimonial) => ( 
                    <div key={testimonial.id} className="testimonial">
                        <p>{testimonial.text}</p>
                        <img src={testimonial.image} alt={`Imagen Testimonials ${testimonial.id}`} className="testimonial__image"  />
                    </div>
                ))}
            </div>
        </section>
    );


}


export default Testimonials;


