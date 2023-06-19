import { Outlet } from "react-router-dom";
const LayOutPublico = () => {
  return (
    <div className="container">
      <Outlet />
      <footer>Este es el pie de pagina</footer>
    </div>
  );
};

export default LayOutPublico;
