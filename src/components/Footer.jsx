import React from "react";

function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} [Erik Israel Alvarado Vazquez]. Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer;