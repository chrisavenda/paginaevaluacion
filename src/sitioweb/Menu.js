  
import React from 'react'

const Menu = () => {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand fs-1" href="https://pcsolucionescr.milaulas.com/?redirect=0">La Tiendita</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://pcsolucionescr.milaulas.com/?redirect=0">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://pcsolucionescr.milaulas.com/?redirect=0">Hardware</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="https://github.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Software
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="https://github.com">GPU</a></li>
                            <li><a className="dropdown-item" href="https://github.com">CPU</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="https://github.com">RAM</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="https://github.com" tabindex="-1" aria-disabled="true">Soporte</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Menu;