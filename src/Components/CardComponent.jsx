import React from 'react';
import img1 from "../../public/img/Motor nissan.jpg"
import img2 from "../../public/img/Los Takumi.jpg"
import Btn2Component from "../Components/Btn2Component"

function Card() {
    return (
        <>
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="text-center py-4 text-dark">
                    <h3>
                        Aspectos principales
                    </h3>
                </div>
                <div className="col-md-4 mb-5" style={{width:'700px', height:'500px'}}>
                    <div className="card h-100" style={{ backgroundColor: '#444444'}}>
                        <div className="card-body">
                            <h2 className="card-title text-center text-white color">Primer motor</h2>
                            <p className="card-text d-flex justify-content-center align-items-center" style={{height: '90%'}}>
                                <img src={img1} alt="" style={{width:"550px", height:'300px', borderRadius:'20px'}} className="container" />
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <Btn2Component></Btn2Component>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-5" style={{width:'700px', height:'500px'}}>
                    <div className="card h-100" style={{ backgroundColor: '#444444' }}>
                        <div className="card-body">
                            <h2 className="card-title text-center text-white color">Los Takumi</h2>
                            <p className="card-text d-flex justify-content-center align-items-center" style={{height: '90%'}}>
                                <img src={img2} alt="" style={{width:"550px", borderRadius:'20px'}} className="container" />
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
export default Card;