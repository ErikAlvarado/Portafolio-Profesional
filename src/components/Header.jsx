import React from 'react';

function Header(){
    return(
        <header id="inicio" className="headerHero">
            <div className="container">
                <h1>Mi nombre es: Erik Israel Alvarado Vazquez</h1>
                <p className="subtitle">Desarrollador de software (Full-stacker jr)</p>
                <a href="#proyectos" className="btn">Ver mis proyectos</a>
            </div>
        </header>
    )
}

export default Header;