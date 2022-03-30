const config = require("../../resource/PokeList.json");
const TextFormat = require("../util/TextFormat");
/* A function that returns a promise. */
module.exports = async function getPokemonByType(type) {

    if (!type) throw new Error(TextFormat.bold(TextFormat.red("You must provide a type to search for a pokemon.")));

    const pokemon = [];

    const query = type.toLowerCase().charAt(0).toUpperCase() + type.slice(1);

    config.forEach(p => {
        if (p.type.includes(query)) {
            pokemon.push(p);
        }
    });

    if (pokemon.length === 0) throw new Error(TextFormat.bold(TextFormat.red(`No pokemon found with type ${query}`)));
    else
        return pokemon;
}