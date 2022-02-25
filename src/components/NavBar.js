import { Link, NavLink } from 'react-router-dom';
import logo from '../styles/icono/logo.jpg';
import { Carro } from './carro';

const categories = [
    { id: 'cuadrados', name: 'Cuadrado' },
    { id: 'hexagonales', name: 'Hexagonales' },
    { id: 'triangulares', name: 'Triangulares' },
    { id: 'jardineras', name: 'Jardineras' },
    { id: 'repisas', name: 'Repisas' },
    { id: 'portaLLaves', name: 'Porta LLave' },
  ]

export function NavBar(){
    return (
        <nav className="navbar navbar-expand-md navbar-light ">
            <div className="container-fluid navbar-brand">
            <Link to={"/"}><img className="navbar__img--logo" src={logo} alt="logo" width="33%"/></Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-1 mb-lm-0">
                    {categories.map((category) => {
                            return (
                         <NavLink
                             key={category.id}
                                className="nav-link  aria-current=page "
                                to={`/categoria/${category.id}`}>
                     <h5 className="nav-link" aria-current="page"> {category.name}</h5>
                   </NavLink>
            )
          })}
                        </ul>
                        <ul><Link to="/Cart">
            <Carro cantidadItems={1} />
          </Link></ul>
                </div>
            </div>
        </nav>
    )
}
