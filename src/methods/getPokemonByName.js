const chalk = require("chalk");
const config = require("../../resource/PokeList");

module.exports = async function getPokemonByName(name) {
    if (!name) throw new Error(chalk.redBright("You must provide a name to search for a pokemon."));

    let pokemon;
    if (!(isNaN(name))) {
        throw new Error(chalk.redBright("Looks like you put an integer for the name instead of an string. If you would like to search for a pokemon via id. Consider using the getPokemonByID method"));
    } else {
        pokemon = config.find(p => new String(p.name).toLowerCase() === name.toLowerCase())
    }
    if (!pokemon) throw new Error(chalk.redBright(`No pokemon found with name ${name}`))
    else
        return pokemon;
};