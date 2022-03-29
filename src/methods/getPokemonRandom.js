/* This function will return a random pokemon from the list of pokemon. */
const config = require("../../resource/PokeList");
const getPokemonByID = require("./getPokemonByID")

module.exports = async function getPokemonRandom() {
    if (arguments.length > 0) throw new Error("\u001b[31;1m You must provide no arguments to get a random pokemon.");

    const id = Math.floor(Math.random() * ((config.length - 1) - 1 + 1) + 1);

    const data = await getPokemonByID(id);

    return data;
}
