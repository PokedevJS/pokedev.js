const config = require("../../resource/PokeList");
const TextFormat = require("../util/TextFormat");

module.exports = async function getPokemonByName(name) {
    if (!name) throw new Error(TextFormat.bold(TextFormat.red("You must provide a name to search for a pokemon.")));

    let pokemon;
    if (!(isNaN(name))) {
        throw new Error(TextFormat.bold(TextFormat.red("Looks like you put a name for the id instead of an id. If you would like to search for a pokemon via id. Consider using the getPokemonByID method")));
    } else {
        pokemon = config.find(p => new String(p.name).toLowerCase() === name.toLowerCase());
    }
    if (!pokemon) throw new Error(TextFormat.bold(TextFormat.red(`No pokemon found with name ${name}`)));
    else
        return pokemon;
};