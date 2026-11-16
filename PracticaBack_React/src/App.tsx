//import { useState, useEffect } from "react";

{/*Practica 1*/}

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

    // <ul>
    //     {users.map((user) => (
    //         <li
    //         key={user.id}
    //         onClick={() => setSelectedId(user.id)}
    //         style={{cursor: "pointer"}}
    //         >
    //             {user.name}
    //         </li>
    //     ))}
    // </ul>

    // {selectedUser && (
    //     <div>
    //         <h3>{selectedUser.name}</h3>
    //         <p>Email: {selectedUser.email}</p>
    //         <p>Edad: {selectedUser.edad}</p>
    //         <p>Pais: {selectedUser.pais ? selectedUser.pais.name : "Sin pais"}</p>
    //         <p>Roles: {selectedUser.roles.map((r) => r.name).join(", ")}</p>
    //     </div>
    // )}


{/*Practica 2*/}
    // const [loading, setLoading] = useState(true);
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

    //    async function handleClear(){
    //         setSearch("");
    //         setLoading(true);
    //         setError(null);

    //         const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
    //             headers: {Authorization: `Bearer: ${token}`},
    //         });
    //         const data = await response.json();
    //         setLoading(false);

    //         if(!response.ok){
    //             setFormError(data.detail);
    //             return;
    //         }
    //         setUsers(data);
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

    {/*Ejercicio 4*/}

//     interface Role {
//         id?: number;
//         name: string;
//     }

//     interface CurrentUser{
//         id:number;
//         name: string;
//         roles: (Role | string)[];
//     }

//     const [me, setMe] = useState<CurrentUser | null>(null);

//    useEffect(() => {
//     if (!token) return;

//     fetch(`${import.meta.env.VITE_API_URL}/user/me/id`, {
//     headers: { Authorization: `Bearer ${token}` },
//   }).then(async (resId) => {
//     if (!resId.ok) return;
//     const {id} = await resId.json();

//     const resUser = await fetch(`${import.meta.env.VITE_API_URL}/user/${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     if (resUser.ok) {
//       const data: User = await resUser.json();
//       setMe(data);
//     }
//   });
// }, [token]);

//     {me && (
//         <p>Hola, {me.name} ({me.roles.map((r) => r.name).join(",")})</p>
//     )}


   
    {/*Ejercicio 5*/}
        // const [name, setName] = useState("");
        // const [age, setAge] = useState("");
        // const [email, setEmail] = useState("");
        // const [password, setPassword] = useState("");
        // const [paisId, setPaisId] = useState(1);
        // const [formError, setFormError] = useState<string | null>(null);

        // async function handleCreateUser(e: SubmitEvent){
        //     e.preventDefault();
        //     setFormError(null);

        //     const response = await fetch(`${import.meta.env.VITE_API_URL}/user`,{
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${token}`,
        //         },
        //         body: JSON.stringify({
        //             name,
        //             edad: Number(age),
        //             email,
        //             password,
        //             pais_id: Number(paisId),
        //         }),
        //     });

        //     const data = await response.jason();
        //     if(!response.ok){
        //         setFormError(data.detail);
        //         return;
        //     }

        //     setUsers([...users, {id: data.id, name}]) //Esto es para agregar el nuevo usuario a la lista sin recargar la pagina
        //     setName("");
        //     setAge("");
        //     setEmail("");
        //     setPassword("");
        //     setPaisId(1);
        // }

        // <form onSubmit={handleCreateUser}>
        //     <input
        //     type="text"
        //     placeholder="Nombre"
        //     value={name}
        //     onChange={(e) => setName(e.target.value)}
        //     required
        //     />
        //     <input
        //     type = "number"
        //     placeholder="Edad"
        //     value={age}
        //     onChange={(e) => setAge(e.target.value)}
        //     />
        //     <input
        //     type="email"
        //     placeholder="Email"
        //     value={email}
        //     onChange={(e) => setEmail(e.target.value)}
        //     required
        //     />
        //     <input
        //     type="password"
        //     placeholder="Contraseña"
        //     minLength={4}
        //     value={password}
        //     onChange={(e) => setPassword(e.target.value)}
        //     required
        //     />
        //     <select
        //     value={paisId}
        //     onChange={(e) => setPaisId(Number(e.target.value))}
        //     >
        //         <option value="1">Argentina</option>
        //         <option value="2">Brasil</option>
        //     </select>
        //     <button type="submit">Crear Usuario</button>
        //     {formError && <p>{formError}</p>}
        // </form>


        {/*Ejercicio 6*/}

        // const [soloMayores, setSoloMayores] = useState(false);

        // useEffect(() => {
        //     const endpoint = soloMayores ? "/user_mayores" : "/user";
        //     setLoading(true);
        //     setError(null);

        //     fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
        //         headers: { Authorization: `Bearer ${token}` },
        //     })
        //     .then(async (response) => {
        //     const data = await response.json();
        //     if (!response.ok) {
        //     setError(data.detail);
        //     return;
        // }
        // setUsers(data);
        // })
        // .finally(() => {
        // setLoading(false);
        // });
        // }, [token, soloMayores]);

        // <button type="button" onClick = {() => setSoloMayores(!soloMayores)}>
        //     {soloMayores ? "Ver todos" : "Ver solo mayores de 18"}
        // </button>

    {/*Ejercicio 7*/}

    // async function handleDelete(id: number){
    //     if(!window.confirm("¿Seguro que quiere borrar este usuario?")) return;

    //     const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${id}`, {
    //         method: "DELETE",
    //         headers: {Authorization: `Bearer ${token}`},
    //     });

    //     if(!response.ok){
    //         const data = await response.json();
    //         alert(data.detail);
    //         return;
    //     }

    //     setUsers(users.filter((u)=> u.id !== id));
    // }

    // <li key={user.id}>
    //     <span onClick={() => setSelectedId(user.id)} style={{cursor: "pointer"}}>
    //         {user.name}
    //     </span> {" "}
    //     <button type="button" onClick={() => handleDelete(user.id)}>Borrar</button>
    // </li>

    {/*Ejercicio 8*/}
    // function handleUnathorized(){
    //     localStorage.removeItem("token");
    //     setToken(null);
    //     setError("Tu sesion expiró");
    // }

    // if(token){
    //     return <UserList token={token} onUnauthorized={handleUnauthorized}/>;
    // }

    // export function UserList({
    //     token,
    //     onUnauthorized,
    // }: {
    //     token: string;
    //     onUnauthorized: () => void;
    // }) {
    //     if (respuesta. status === 401){
    //         onUnauthorized();
    //         return;
    //     }
    // }    