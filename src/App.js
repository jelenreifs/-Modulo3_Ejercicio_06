
import Cabecera from "./Cabecera";
import Main from "./Main";
import Footer from "./Footer";
import libreria from "./libreria"

function App() {
  const libros = libreria.libros.map((libro) => {
    return (
      <Main
        key={libro.id}
        titulo={libro.titulo}
        autor={libro.autor}
        editorial={libro.editorial}
        descripcion={libro.descripcion}
        img={libro.img}
        stock={libro.stock}
      />
    );
  });

  return (
    <>
      <Cabecera
        nombre={libreria.usuario.nombre}
        vip={libreria.usuario.vip}
        imagen={libreria.usuario.imagen}
      />

      {libros}
      <Footer libros={libreria.libros} />
    </>
  );
}

export default App;