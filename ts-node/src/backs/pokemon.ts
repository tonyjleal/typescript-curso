import { getPokemon } from '../generics/get-pokemon';

getPokemon(4)
    .then(pokemon => console.log(pokemon.name))
    .catch(err => console.log(err))
    .finally(() => console.log('Fin de getPokemon'));

