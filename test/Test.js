/* Fetching a random pokemon from the API and printing it to the console. */
/* Fetching a pokemon by name and printing it out. */
/* Fetching a pokemon by id. */
const { getPokemonByID, getPokemonByName, getPokemonRandom, getPokemonByType } = require("../src/Main") 


const run = async () => {
    let pokemon = await getPokemonByID("wawaw")
    console.log(pokemon);
}
run();