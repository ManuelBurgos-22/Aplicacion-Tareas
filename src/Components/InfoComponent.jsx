import React from 'react';
import img from "../../public/img/logo.png"

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

function Navbar() {
    return (
        <>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <div className="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src={img} alt="..." />
                </div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light color">Ruptura</h1>
                    <p className="color">
                        Ruptura es un videojuego de plataformas 2D desarrollado por RupturaCorp. En el que se desenlaza la
                        historia de 2 hermanos conflictivos que luchan por su orgullo, sin saber que todo sería
                        por un bien común.
                    </p>
                    <a className="btn btn-primary" href="{{https://rupturacorp.itch.io/ruptura"
                        style={{BackgroundColor: '#5D0E41', border:'#5D0E41'}}>Juegalo ahora!</a>
                </div>
            </div>
        </>
    );
}
export default Navbar;