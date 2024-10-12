import React from 'react';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

function Navbar() {
    return (
        <>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#171717' }}>
                <div className="container px-5">
                    <a className="navbar-brand" href="#!">Nissan</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!" data-bs-toggle="modal" data-bs-target="#about">Acerca de</a></li>
                            <li className="nav-item"><a className="nav-link" href="" data-bs-toggle="modal" data-bs-target="#contactos">Contactos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!" data-bs-toggle="modal" data-bs-target="#creadores">Creadores</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;