const config = require("../../resource/PokeList");

module.exports = async function getPokemonByName(inName) {
    let data;
    if (!(isNaN(inName))) {
        throw "Looks like you put an integer for the name instead of an string. If you would like to search for a pokemon via id. Consider using the getPokemonByID method"
    } else {
        data = config.find(p => new String(p.name).toLowerCase() === inName.toLowerCase())
    }
    if (!data) data = config[0];
    if (!data.forms) data.forms = null
    return data;
};