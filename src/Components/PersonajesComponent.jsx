import React from 'react';
import img1 from "../../public/img/Rryomen.png"
import img2 from "../../public/img/Mosuke.png"
import img3 from "../../public/img/Boss.png"
import Btn2Component from "../Components/Btn2Component"

function Personajes() {
    return (
        <>
            <div className="row gx-4 gx-lg-5">
                <div className="text-center py-4 text-white">
                    <h3>
                        Personajes principales
                    </h3>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100" style={{backgroundColor: '#2C4E80'}}>
                        <div className="card-body">
                            <h2 className="card-title text-center text-white color">Rryomen</h2>
                            <p className="card-text">
                                <img src={img1} alt="" width="250px" className="container" />
                            </p>
                        </div>
                        <div className="card-footer text-center">
                        <Btn2Component></Btn2Component>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-5">
                    <div className="card h-100" style={{backgroundColor: '#2C4E80'}}>
                        <div className="card-body">
                            <h2 className="card-title text-center text-white color">Mosuke</h2>
                            <p className="card-text">
                                <img src={img2} alt="" width="250px" className="container" />
                            </p>
                        </div>
                        <div className="card-footer text-center">
                        <Btn2Component></Btn2Component>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 mb-5">
                    <div className="card h-100" style={{backgroundColor: '#2C4E80'}}>
                        <div className="card-body">
                            <h2 className="card-title text-center text-white color">Final boss</h2>
                            <p className="card-text">
                                <img src={img3} alt="" width="250px" className="container" />
                            </p>
                        </div>
                        <div className="card-footer text-center">
                        <Btn2Component></Btn2Component>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Personajes;