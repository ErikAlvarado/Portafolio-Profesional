import React from 'react';

function Navbar(){
    return(
        <nav className='navbar'>
            <div className='container'>
                <a href="#inicio" className="navlogo"></a>
                <ul className='navMenu'>
                    <li><a href="#sobreMi">Sobre mi</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </div>
        </nav> 
    );
}

export default Navbar;