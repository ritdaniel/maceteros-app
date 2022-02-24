import whatsapp from '../styles/icono/whatsapp-logo.png';
import mapa from '../styles/icono/mapa.png';
import logo from '../styles/icono/logo.jpg';
import email from '../styles/icono/email.png';
import telefono from '../styles/icono/telefono.svg';
export function Footer(){
    return (
        <>
        <a href="https://wa.me/56995913119">
        <img className="whatsapp" src={whatsapp} alt="Contactanos"/>
    </a>
    <div className="pie">
        <footer className="footer">
            <div className="footer-left">
                <img className="img-footer" src={logo} alt="Wooden"/>
                <p className="footer-links">
                    <a href="index.html">Home</a> I
                    <a href="productos.html">Productos</a> I
                    <a href="Outlet.html">Outlet</a> I
                    <a href="nosotros.html">Nosotros</a> I
                    <a href="contactanos.html">Contacto</a> I <br/> WOODEN © 2020 </p>
            </div>
            <div className="footer-right">
                <div>
                <p></p>
                <img className="icono" src={mapa} alt="Ubicacion"/> Gaete Barrio Norte Concepcion, Chile
                </div>
                <div>
                <p></p>
                <img className="icono" src={telefono} alt="Telefono"/> +56 9 9591 3119 
                </div>
                <div>
                    <p></p>
                    <img className="icono" src={email} alt="Email"/><a href="mailto:contacto@wooden.cl">&nbsp;  Contacto@wooden.cl</a>
                </div>
            </div>
        </footer>
    </div>
    </>
    )
}