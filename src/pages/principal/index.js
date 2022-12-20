import Navbar from '../../components/Navbar';
import { FilterPokemons} from '../../components/PokemonBank';
const Home =({changeOrder,orderById,filterBySearch,filteredList, handlerUl, setReload})=> {

return (
    <>
    <Navbar
    handlerUl={handlerUl}
    change={changeOrder}
    stateChange={orderById}
    search={filterBySearch}
    />
    <FilterPokemons
    setReload={setReload}
    pokemonsList={filteredList}
    />
    </>
  );
}

export default Home;