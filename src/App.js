import './App.css';
import {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from './pages/pokemon';
import Home from './pages/principal';
import LoginForm from './pages/Loginform';
import FormNewPoke from './pages/FormNewPoke';
import LoadingCard from './components/LoadingCard';

function App() {
  const url='http://localhost:8080/pokedex/getPokemons'
  const [pokemonsLists,setPokemonsLists] = useState([])
  const [filteredList, setFilteredList] = useState(Object.assign([],pokemonsLists));
  const [orderById,setOrderById] = useState (true)
  const [isLogged, setUserLogged] = useState(false)
  const [reload, setReload] = useState(null)
  const [loading, setLoading] = useState(false)

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

  const handlerUserLogged = ()=>{
    setUserLogged(!isLogged)
  }

  const filterBySearch = (value) => {
  setFilteredList(pokemonsLists.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  }))
  };

 async function fetchAllPokemons(){
  let aux=[]
    setLoading(true)
    await fetch(url,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    )
    .then(response => response.json())
    .then(data=>{
      data.forEach((item) => {
        aux.push(item)
      });
      setTimeout(() => {
        setPokemonsLists(aux)
        setLoading(false)
      }, 600);
    })
  }

  async function fetchUserPokemons() {
    let aux = []
    setLoading(true)
    await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authentication': localStorage.getItem('userToken')
      }
    }
    )
      .then(response => response.json())
      .then(data => {
        data.forEach((item) => {
          aux.push(item)
        });
        setTimeout(() => {
          setPokemonsLists(aux)
          setLoading(false)
        }, 600);
        
      })
  }

 useEffect(()=>{
  if(!localStorage.getItem('userToken')){
    fetchAllPokemons()
  }
  else{
    fetchUserPokemons()
  }
},[isLogged, reload])

  return (
    <> 
      <LoadingCard />
      {
        /*(loading) ? <LoadingCard/> : 
        <BrowserRouter>
          <Routes>
            <Route path='/loginform' element={<LoginForm handlerUl={handlerUserLogged}/>}></Route>
            <Route path= "/" element={<Home
            handlerUl={handlerUserLogged}
            changeOrder= {changeOrder}
            orderById= {orderById}
            filterBySearch= {filterBySearch}
            filteredList= {filteredList}
            setReload={setReload}
            />}></Route>
            <Route path= "/:id" element={<Pokemon
            setReload={setReload}
            pokemons={pokemonsLists.sort((a,b)=>a.id-b.id)}
            />}></Route>
            <Route path='/addForm' element={<FormNewPoke setReload={setReload}/>}></Route>
          </Routes>
        </BrowserRouter>
            */}
    </>   
  );
}

export default App;
