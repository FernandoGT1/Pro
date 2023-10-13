import React, { useEffect, useState } from "react";

function CocktailRandom() {
  const [datos, setDatos] = useState([]);
  const [estatus, setEstatus] = useState(false);

  useEffect(() =>{
    obtenerCocktail();
},[]);

const obtenerCocktail=async () => {
    setEstatus(true);
    console.log("Solicitando información");
    try{
        const resultado = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        if(!resultado.ok){
            console.log("No se logró cargar contenido")
        }

        
        const cocktail=await resultado.json();
        setDatos([...cocktail.drinks]);
        console.log(datos);
    }catch(error){
        console.log(error);
    }finally{
        setEstatus(false);
    }
}

  return (
    estatus ? (
        <>
        <h2>Solicitando datos...</h2>
        </>
    ) :
    (
        datos.map((elcocktail)=>
        <>
            <p>{elcocktail.strDrink}</p>
        <img src={elcocktail.strDrinkThumb}/>
        </>
    ))
    );
}
export default CocktailRandom;