import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="btn btn-outline-primary">
          Inicio
        </NavLink>
        <NavLink to="/jugadores" className="btn btn-outline-primary">
          Jugadores
        </NavLink>
        <NavLink to="/partidos" className="btn btn-outline-primary">
          Partidos
        </NavLink>
        <NavLink to="/estadisticas" className="btn btn-outline-primary">
          Estadisticas
        </NavLink>
        <NavLink to="/fotosYvideos" className="btn btn-outline-primary">
          Fotos y Videos
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
