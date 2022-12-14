import React from 'react'
import Card from '../Components/Card'
import { useEffect, useState } from "react";
import axios from 'axios';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      
      setData(res.data)
      console.log(data)
    
    })
    },[])

    const cardDentistas = data.map((dent) =>
    <div class="col-3">
    <Card  dent={dent} key={dent.id}/>
    </div>
    );
  
  return (

  
        //{/* Aqui deberias renderizar las cards */}
<div>
<h1>Home</h1>
  <div class="container">
    <div class="row">
    {cardDentistas}
    </div>
  </div>

</div>

  )
  }
export default Home