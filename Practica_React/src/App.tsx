{/*Ejercicio 1*/}

// interface ProductoProps{
//   nombre: string;
//   precio: number;
//   stock: number;
// }

// function Producto({nombre, precio, stock}: ProductoProps){
//   return(
//     <div className="Tarjeta">
//       <h3>{nombre}</h3>
//       <p>${precio}</p>
//       <p>{stock === 0 ? "Sin Stock":`Stock: ${stock} unidades disponibles`}</p> {/*Esto muestra si el stock es 0 o no*/}
//     </div>
//   );
// }

// export default function App(){
//   return(
//     <div style={{display: "flex", gap: 12, justifyContent: "center"}}> {/*Con esto le doy un espaciado entre componentes*/}
//     <Producto nombre = "Teclado" precio = {45000} stock = {12}/>
//     <Producto nombre = "Mouse" precio = {18000} stock = {0}/>
//     <Producto nombre = "Monitor" precio = {320000} stock = {3}/>
//     </div>
//   );
// }

{/*Ejercicio 2*/}

// import {useState} from "react";

// export default function App(){
//   const[valor, setValor] = useState(0);

//   const restar = () => {
//     if (valor > 0) setValor(valor - 1);
//   };

//   const sumar = () =>{
//     if (valor < 10) setValor(valor + 1);
//   };

//   return(
//     <div>
//       <h1>{valor}</h1>
//       <button onClick={restar} disabled = {valor === 0}>-</button>
//       <button onClick={sumar} disabled = {valor === 10}>+</button>
//       <button onClick={() => setValor(0)}>Reiniciar</button>

//       {valor === 10 && <p>Maximo alcanzado</p>}
//       {valor === 0 && <p>Minimo alcanzado</p>}
//     </div>
//   )
// }

{/*Ejercicio 3*/}

// import { useState } from "react";

// export default function App(){
//   const [visible, setVisible] = useState(false);

//   return(
//     <div className = "tarjeta">
//       <h3>¿Que es JSX?</h3>
//       <button onClick = {() => setVisible(!visible)}>
//         {visible ? "Ocultar Respuesta" : "Mostrar Respuesta"}
//       </button>
//       {visible && (
//         <p>
//           Una sintaxis que permite escribir estructura parecida a HTML dentro
//           de JavaScript. Se transforma en llamadas a funciones de React.
//         </p>
//       )}
//     </div>
//   );
// }

{/*Ejercicio 4*/}

// import {useState} from "react";

// export default function App(){
//   const [celsius, setCelsius] = useState("");

//   const c = Number(celsius);
//   const f = (c *9/5) + 32;

//   return(
//     <div>
//       <input
//       type = "number"
//       value = {celsius}
//       onChange = {(e) => setCelsius(e.target.value)}
//       placeholder = "Grados Celsius"
//       />
//       {celsius !== "" && (
//         <>
//         <h1>{f.toFixed(1)} °F</h1>
//         {c > 30 && <p>Hace calor</p>}
//         </>
//       )}
//     </div>
//   );
// }

{/*Ejercicio 5*/}

// import {useState} from "react";

// interface Item{
//   id: number;
//   texto: string;
// }

// export default function App(){
//   const [texto, setTexto] = useState("");
//   const [items, setItems] = useState<Item[]>([]);

//   const agregar = () =>{
//     if (texto.trim() === "") return;
//     setItems([...items, {id: Date.now(), texto: texto.trim() }]);
//     setTexto("");
//   };

//   const eliminar = (id: number) => {
//     setItems(items.filter((i) => i.id !== id))
//   };

//   return (
//     <div>
//       <input
//       value={texto}
//       onChange={(e) => setTexto(e.target.value)}
//       placeholder = "Ej: yerba"
//       />
//       <button onClick = {agregar}>Agregar</button>

//       {items.length === 0 ? (
//         <p>No hay nada para comprar</p>
//       ) : (
//         <ul>
//           {items.map((item) =>(
//             <li key = {item.id}>
//               {item.texto}{""}
//               <button onClick ={() => eliminar(item.id)}>Eliminar</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

{/*Ejercicio 6*/}

// import {useState} from "react";

// const lenguajes = [
//   "JavaScript",
//   "Java",
//   "Python",
//   "Typescript",
//   "C#",
//   "Go",
//   "Rust",
//   "PHP",
// ];

// export default function App(){
//   const [busqueda, setBusqueda] = useState("");

//   const filtrados = lenguajes.filter((l) =>
//     l.toLowerCase().includes(busqueda.toLowerCase())
//   );

//   return(
//     <div>
//       <input
//       value={busqueda}
//       onChange={(e) => setBusqueda(e.target.value)}
//       placeholder = "Buscar lenguaje..."
//       />
//       <p>
//         {filtrados.length} {filtrados.length === 1 ? "resultado" : "resultados"}
//       </p>
//       <ul>
//         {filtrados.map((l) =>
//         <li key={l}>
//           {l}
//         </li>)}
//       </ul>
//     </div>
//   );
// }

{/*Ejercicio 7*/}

interface ProductoProps{
  nombre: string;
  precio: number;
  stock: number;
  oferta?: boolean;
};

function Producto({nombre, precio, stock, oferta} : ProductoProps){
  return(
    <div className="tarjeta">
      <h3>{nombre}</h3>
      {oferta && <strong>¡Oferta!</strong>}
      <p>$ {precio}</p>
      <p>{stock === 0 ? "Sin Stock" : `Stock: ${stock}`}</p>
    </div>
  );
}

export default function App(){
  return(
    <div style ={{display: "flex", gap: 12, justifyContent: "center"}}>
      <Producto nombre="Teclado" precio={45000} stock={12} oferta/>
      <Producto nombre="Mouse" precio={18000} stock={0}/>
    </div>
  );
}