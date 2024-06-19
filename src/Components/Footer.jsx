import { useState,useEffect } from "react";

function Footer () {
    const [footer,setFooter] = useState([]);

    const {VITE_FOOTER} = import.meta.env



    useEffect(()=>{

        let controller = new AbortController();
        let options = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
            signal : controller.signal
        };

        fetch(VITE_FOOTER, options)
        .then(res=>res.json())   
        .then(data=>setFooter(data))
        .catch(err=>console.log(err))     
    },[])



   
    return (
        <section className="seccion__footer">
            <div className="seccion__footer--contenedor">
                {footer.map((footer) => ( 
                    <div key={footer.id} className="footer__lista">
                        <p>{footer.text}</p>
                    </div>

                ))}
               
                

            </div>
             <section className="seccion__contacto">
                <div className="seccion__contacto--contenedor">
                    <img src="correo.png" alt="Imagen Correo" />
                    <img src="twitter.png" alt="Imagen Logo Twitter" />
                </div>
             </section>
        </section>

        
    );


}


export default Footer;


