import React from 'react';
import img from "../../public/img/Logo nissan.png"
import Btn1Component from "../Components/Btn1Component"

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

function Info() {
    return (
        <>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

            <div className="row gx-4 gx-lg-5 align-items-center my-5" style={{  width: '100%'}}>
                <div className="col-lg-7"><img className='rounded float-start' src={img} alt="..." style={{ width:'500px'}}/>
                </div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light text-dark color">Skyline</h1>
                    <p className="color text-dark">
                    El primer auto de carreras GT Skyline se introdujo en 1964, en ese entonces bajo el emblema de Prince Motors. En 1966, después de la fusión de Prince y Nissan, el Skyline finalmente se convirtió en un Nissan.
                    </p>

                    <div>
                        <div className="btn-group me-2" role="group" aria-label="First group">
                        <Btn1Component></Btn1Component>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Info;