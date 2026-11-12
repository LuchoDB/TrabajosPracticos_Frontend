// import { useState, useEffect } from "react";

{/*Practica 1*/}

// interface Role{
//   id?: number;
//   name: string;
// }
// interface Pais{
//   id: number;
//   name: string;
// }

// interface UserDetail{
//   id: number;
//   name: string;
//   email: string;
//   edad: number;
//   pais: Pais | string; //Si el pais no existe en la BD, recibo un string con el nombre del pais
//   roles: (Role | string[]); //Si el rol no existe en la BD, recibo un string con el nombre del rol
// }

// const [selectedId, setSelectedId] = useState<number | null>(null);
// const [selectedUser, setSelectedUser] = useState<UserDetail | null>(null);

// useEffect(() => {
//   if (selectedId === null) return; //Si el id es null, no hago nada
//   fetch(`${import.meta.env.VITE_API_URL}/user/${selectedId}`, { //Esto es una peticion GET al endpoint user con el id seleccionado
//     headers: { Authorization: `Bearer ${token}` }, //Esto hace que espere la respuesta de la promesa de fetch
//   }).then(async (response) => { //Esto hace que espere la respuesta de la promesa de fetch, y luego se convierte en json
//     const data = await response.json(); //Lo convierte a json
//     if (!response.ok) { //Si la respuesta no es ok, lanzo un error
//       setError(data.detail);
//       return;
//     }
//     setSelectedUser(data);
//   });
// }, [selectedId, token]);

// <li key={user.id} onclick={() => setSelectedId(user.id)} style={{cursor: "pointer"}}>
// {user.name};
// </li>

// {selectedUser && (
//   <div>
//     <h3>Detalle de {selectedUser.name}</h3>
//     <p>Email: {selectedUser.email}</p>
//     <p>Edad: {selectedUser.edad}</p>
//     <p>Pais: {" "}
//       {typeof selectedUser.pais === "object"
//       ? selectedUser.pais.name
//     : selectedUser.pais}
//     </p>
//     <p>
//       Roles: {" "}
//       {selectedUser.roles
//       .map((r) => (typeof r === "string" ? r : r.name))
//       .join(", ")}
//       </p>
//   </div>
// )}

{/*Practica 2*/}
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     setLoading(true);
    //     setError(null);

    //     fetch(`${import.meta.env.VITE_API_URL}/user`,{
    //         headers: {Authorization: `Bearer ${token}`},
    //         })
    //         .then(async (response) => {
    //             const data = await response.json();
    //             if(!response.ok){
    //                 setError(data.detail);
    //                 return;
    //             }
    //             setUsers(data);
    //         })
    //         .finally(() =>{
    //             setLoading(false);
    //         });
    // }, [token]);

    // if(loading) return <p>Cargando...</p>;
    // if(error) return <p>{error}</p>
    
    {/*Practica 3*/}

    // const [search, setSearch] = useState("");

    // async function handleSearch(){
    //     if (!search.trim()) return;
    //     setLoading(true);
    //     setError(null);

    //     const response = await fetch(
    //         `${import.meta.env.VITE_API_URL}/user/search}/${encodeURIComponent(search)}`,
    //         {
    //             headers: {Authorization: `Bearer: ${token}`},
    //         }
    //     );
    //     const data = await response.json;
    //     setLoading(false);

    //     if (!response.ok){
    //         setError(data.detail);
    //         return;
    //     }
    //     setUsers(data);
    //     }

    //     function handleClear(){
    //         setSearch("");
    //         cargarUsuario();
    //     }

    //     <div>
    //         <input
    //         type="text"
    //         placeholder="Buscar por nombre..."
    //         value={search}
    //         onchange={(e) => setSearch(e.target.value)}
    //         />
    //         <button type="button" onClick={handleSearch}>Buscar</button>
    //         <button type="button" onClick={handleClear}>Limpiar</button>
    //     </div>