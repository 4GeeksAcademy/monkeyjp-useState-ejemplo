import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


// function App() {
//   let nombre = "Ana López";

//   function cambiarNombre() {
//     nombre = "Carlos Pérez";
//     console.log(nombre);
//   }

//   return (
//     <div>
//       <h2>{nombre}</h2>
//       <button onClick={cambiarNombre}>Cambiar nombre</button>
//     </div>
//   );
// }



// function App() {
//   const [nombre, setNombre] = useState("Ana López");

//   function cambiarNombre() {
//     setNombre("Carlos Pérez");
//   }

//   return (
//     <div>
//       <h2>{nombre}</h2>
//       <button onClick={cambiarNombre}>Cambiar nombre</button>
//     </div>
//   );
// }

function Home() {
  // const [nombre, setNombre] = useState("Ana López");
  // const [descripcion, setDescripcion] = useState("Desarrolladora Frontend");
  // const [colorFondo, setColorFondo] = useState("primary");
  // const [modoOscuro, setModoOscuro] = useState(false);
  // const [tamanoImagen, setTamanoImagen] = useState(120);
  // const [mostrarInfo, setMostrarInfo] = useState(true);
  // const [bordeRedondo, setBordeRedondo] = useState(true);

  // const claseTarjeta = modoOscuro
  //   ? "card bg-dark text-white shadow-lg"
  //   : `card bg-${colorFondo} text-white shadow-lg`;

	return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Personalizador de Perfil</h1>

      <div className="row g-4 justify-content-center">
        {/* Panel de controles */}
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              Controles
            </div>

            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escribe tu nombre"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escribe una descripción"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Color de tarjeta</label>
                <select className="form-select">
                  <option value="primary">Azul</option>
                  <option value="success">Verde</option>
                  <option value="danger">Rojo</option>
                  <option value="warning">Amarillo</option>
                  <option value="info">Celeste</option>
                  <option value="secondary">Gris</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Tamaño de imagen
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="80"
                  max="180"
                />
              </div>

              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="modoOscuro"
                />
                <label className="form-check-label" htmlFor="modoOscuro">
                  Modo oscuro
                </label>
              </div>

              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="mostrarInfo"
                />
                <label className="form-check-label" htmlFor="mostrarInfo">
                  Mostrar información
                </label>
              </div>

              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="bordeRedondo"
                />
                <label className="form-check-label" htmlFor="bordeRedondo">
                  Imagen redonda
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Vista previa */}
        <div className="col-md-5">
          <div className="card bg-primary text-white shadow-lg">
            <div className="card-body text-center">
              <img
                src="https://i.pravatar.cc/300"
                alt="Foto de perfil"
                className="rounded-circle mb-3"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                }}
              />

              <h2 className="card-title">Ana López</h2>

              <p className="card-text">Desarrolladora Frontend</p>

              <span className="badge bg-light text-dark me-2">React</span>
              <span className="badge bg-light text-dark me-2">
                JavaScript
              </span>
              <span className="badge bg-light text-dark">Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

//   return (
//     <div className="container py-5">
//       <h1 className="text-center mb-4">Personalizador de Perfil</h1>

//       <div className="row g-4 justify-content-center">
//         {/* Panel de controles */}
//         <div className="col-md-5">
//           <div className="card shadow">
//             <div className="card-header bg-primary text-white">
//               Controles
//             </div>

//             <div className="card-body">
//               <div className="mb-3">
//                 <label className="form-label">Nombre</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={nombre}
//                   onChange={(e) => setNombre(e.target.value)}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Descripción</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={descripcion}
//                   onChange={(e) => setDescripcion(e.target.value)}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Color de tarjeta</label>
//                 <select
//                   className="form-select"
//                   value={colorFondo}
//                   onChange={(e) => setColorFondo(e.target.value)}
//                   disabled={modoOscuro}
//                 >
//                   <option value="primary">Azul</option>
//                   <option value="success">Verde</option>
//                   <option value="danger">Rojo</option>
//                   <option value="warning">Amarillo</option>
//                   <option value="info">Celeste</option>
//                   <option value="secondary">Gris</option>
//                 </select>
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">
//                   Tamaño de imagen: {tamanoImagen}px
//                 </label>
//                 <input
//                   type="range"
//                   className="form-range"
//                   min="80"
//                   max="180"
//                   value={tamanoImagen}
//                   onChange={(e) => setTamanoImagen(e.target.value)}
//                 />
//               </div>

//               <div className="form-check form-switch mb-3">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   checked={modoOscuro}
//                   onChange={() => setModoOscuro(!modoOscuro)}
//                   id="modoOscuro"
//                 />
//                 <label className="form-check-label" htmlFor="modoOscuro">
//                   Modo oscuro
//                 </label>
//               </div>

//               <div className="form-check form-switch mb-3">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   checked={mostrarInfo}
//                   onChange={() => setMostrarInfo(!mostrarInfo)}
//                   id="mostrarInfo"
//                 />
//                 <label className="form-check-label" htmlFor="mostrarInfo">
//                   Mostrar información
//                 </label>
//               </div>

//               <div className="form-check form-switch mb-3">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   checked={bordeRedondo}
//                   onChange={() => setBordeRedondo(!bordeRedondo)}
//                   id="bordeRedondo"
//                 />
//                 <label className="form-check-label" htmlFor="bordeRedondo">
//                   Imagen redonda
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Vista previa */}
//         <div className="col-md-5">
//           <div className={claseTarjeta}>
//             <div className="card-body text-center">
//               <img
//                 src="https://i.pravatar.cc/300"
//                 alt="Foto de perfil"
//                 className={bordeRedondo ? "rounded-circle mb-3" : "rounded mb-3"}
//                 style={{
//                   width: `${tamanoImagen}px`,
//                   height: `${tamanoImagen}px`,
//                   objectFit: "cover",
//                 }}
//               />

//               <h2 className="card-title">{nombre}</h2>

//               {mostrarInfo && (
//                 <>
//                   <p className="card-text">{descripcion}</p>
//                   <span className="badge bg-light text-dark me-2">React</span>
//                   <span className="badge bg-light text-dark me-2">
//                     JavaScript
//                   </span>
//                   <span className="badge bg-light text-dark">Bootstrap</span>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
}

export default Home;