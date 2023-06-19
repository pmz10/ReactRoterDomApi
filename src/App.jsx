import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

import InicioPagina from "./Pages/InicioPagina";
import JugadoresPagina from "./Pages/JugadoresPagina";
import PartidosPagina from "./Pages/PartidosPagina";
import EstadisticasPagina from "./Pages/EstadisticasPagina";
import FotosYVideosPagina from "./Pages/FotosYVideosPagina";

import LayOutPublico from "./Layout/LayOutPublico"
import NotFound from "./Pages/NotFound";
import BlogDetails from "./Pages/BlogDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LayOutPublico />}>
          <Route element={<InicioPagina />} path="/" index></Route>
          <Route element={<JugadoresPagina />} path="/jugadores"></Route>
          <Route element={<BlogDetails />} path="/jugadores/:id"></Route>
          <Route element={<PartidosPagina />} path="/partidos"></Route>
          <Route element={<EstadisticasPagina />} path="/estadisticas"></Route>
          <Route element={<FotosYVideosPagina />} path="/fotosYvideos"></Route>
          <Route element={<BlogDetails />} path="/blog/:id"></Route>
        </Route>
          <Route element={<NotFound />} path="*"></Route>
      </Routes>
    </>
  );
};

export default App;
