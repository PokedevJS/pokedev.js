const config = require("../../resource/PokeList.json");
const chalk = require("chalk");
/* A function that returns a promise. */
module.exports = async function getPokemonByType(type) {

    if (!type) throw new Error(chalk.redBright("You must provide a type to search for a pokemon."));

    const pokemon = [];

    const query = type.toLowerCase().charAt(0).toUpperCase() + type.slice(1);

    config.forEach(p => {
        if (p.type.includes(query)) {
            pokemon.push(p);
        }
    });

    if (pokemon.length === 0) throw new Error(chalk.redBright(`No pokemon found with type ${query}`))
    else
        return pokemon;
}