import { dbFirebase } from "../BD/firebaseConfig";
import React, {useState,useEffect} from 'react'
import {collection,addDoc,getDocs}from "@firebase/firestore"


function Tours(){
const [nombre,setNombre]=useState("")
const [descripcion,setDescripcion]=useState("")
const [precio,setPrecio]=useState(0)
const ToursCollection=collection(dbFirebase, 'tours')
const [listaTours,setListaTours]=useState([])



const crearTour=async(event)=>{
    event.preventDefault();
await addDoc(ToursCollection,{Nombre:nombre,Description:descripcion,Precio:precio})
console.log("Tour agregado correctamente")
}

const mostrarTours =async()=>{
    const datos=await getDocs(ToursCollection)
    setListaTours(datos.docs.map((registro)=>({
   ...registro.data(),id:registro.id
    })))
}

useEffect(()=>{
    mostrarTours()
    console.log(listaTours);
})




return (
    <>
      <form onSubmit={crearTour}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Precio"
          onChange={(e) => setPrecio(e.target.value)}
        ></input>
        <button>Enviar</button>
      </form>
      {
        listaTours.map((eltour) =>{
            return <p>{eltour.Nombre}</p>
        })
      }
    </>
  );
}



export default Tours