import Navbar from '../../components/Navbar';
import { FilterPokemons} from '../../components/PokemonBank';
const Home =({changeOrder,orderById,filterBySearch,filteredList})=> {

return (
    <>
    <Navbar
    change={changeOrder}
    stateChange={orderById}
    search={filterBySearch}
    />
    <FilterPokemons
    pokemonsList={filteredList}
    />
    </>
  );
}

export default Home;