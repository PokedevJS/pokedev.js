/* Exporting the methods from the `./methods` folder. */
module.exports = {
    getPokemonByName: require("./methods/getPokemonByName"),
    getPokemonByType: require('./methods/getPokemonByType'),
    getPokemonRandom: require('./methods/getPokemonRandom'),
    getPokemonByID: require('./methods/getPokemonByID'),
};