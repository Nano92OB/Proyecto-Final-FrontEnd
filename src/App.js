import './App.css';
import {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from './pages/pokemon';
import Home from './pages/principal';
import LoginForm from './pages/Loginform';
function App() {
  const url='http://localhost:8080/pokedex/getPokemons'
  const [pokemonsLists,setPokemonsLists] = useState([])
  const [filteredList, setFilteredList] = useState(Object.assign([],pokemonsLists));
  const [orderById,setOrderById] = useState (true)

  useEffect(()=>{
    setFilteredList(Object.assign([],orderById ? pokemonsLists.sort((a,b)=>a.id-b.id) : pokemonsLists.sort(function(a,b){
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
      })))
  },[orderById,pokemonsLists])

  const changeOrder = ()=>{
  setOrderById(!orderById)
  }

  const filterBySearch = (value) => {
  setFilteredList(pokemonsLists.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  }))
  };

 async function fetchKantoPokemon(){
  let aux=[]
    await fetch(url)
    .then(response => response.json())
    .then(data=>{
      data.forEach((item) => {
        aux.push(item)
      });
      setPokemonsLists(aux)
    })
   console.log(pokemonsLists)
 }

 useEffect(()=>{
  fetchKantoPokemon()
},[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/loginform' element={<LoginForm/>}></Route>
        <Route path= "/" element={<Home
        changeOrder= {changeOrder}
        orderById= {orderById}
        filterBySearch= {filterBySearch}
        filteredList= {filteredList}
        />}></Route>

      <Route path= "/:id" element={<Pokemon
      pokemons={pokemonsLists.sort((a,b)=>a.id-b.id)}
      />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
