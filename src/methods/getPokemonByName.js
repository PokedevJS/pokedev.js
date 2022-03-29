const config = require("../../resource/PokeList");

module.exports = async function getPokemonByName(name) {
    if (!name) throw new Error("\u001b[31;1m You must provide a name to search for a pokemon.");

    let pokemon;
    if (!(isNaN(name))) {
        throw new Error("\u001b[31;1m Looks like you put an integer for the name instead of an string. If you would like to search for a pokemon via id. Consider using the getPokemonByID method");
    } else {
        pokemon = config.find(p => new String(p.name).toLowerCase() === name.toLowerCase());
    }
    if (!pokemon) throw new Error(`\u001b[31;1m No pokemon found with name ${name}`);
    else
        return pokemon;
};