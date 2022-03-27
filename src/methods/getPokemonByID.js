/* The code above is a function that returns a promise. The promise is resolved with a JSON object
containing the name, id, and form of a random pokemon. */
const config = require("../../resource/PokeList");

module.exports = async function getPokemonByID(id) {
    let data;

    if (isNaN(id)) {
        return console.log("Looks like you put a string for the id instead of an integer. If you would like to search for a pokemon via name. Consider using the getPokemonByName method")
    } else {
        data = config[parseInt(id)];
    }

    if (!data) data = config[0];

    if (!data.forms) data.forms = [
        null,
        null
    ]

    const formIndex = Math.floor(Math.random() * ((data.forms.length - 1) - 0 + 1) + 0);

    return {
        name: `${data.name}`,
        id: `${data.id}`,
        form: `${data.forms[formIndex]}`
    };
};