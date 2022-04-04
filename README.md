
# pokedev.js 


pokedev.js is a standalone tool made to help developers get info about a pokemon and use it in any project with ease.

![Logo](https://cdn.discordapp.com/attachments/849761002676813854/957437663718285382/35d601855f9b83fca3dfa53e4ffddd25.png)

[![Discord](https://img.shields.io/discord/953072048576536596?color=5865F2&label=discord&logo=Discord&logoColor=red)](https://discord.gg/WNHGZhHEmD) 


[![npm](https://img.shields.io/badge/npm-pokedev.js-red)](https://www.npmjs.com/package/pokedev.js) 

[![size](https://img.shields.io/github/repo-size/pokedevjs/pokedev.js?color=red&label=SIZE)](https://www.npmjs.com/package/pokedev.js)

[![downloads](https://img.shields.io/npm/dt/pokedev.js?color=red)](https://www.npmjs.com/package/pokedev.js)

## Quick Links

  - [Quick Links](#quick-links)
  - [Installation](#installation)
  - [Code Example](#code-example)
    - [Console output](#console-output)
  - [Methods](#methods)
  - [Developers](#developers)

## Installation

Install pokedev.js with npm

```bash
  npm install pokedev.js
```
Install pokedev.js with yarn
```bash
  yarn add pokedev.js
```
    
## Code Example

```js
const { getPokemonByID, getPokemonByName, getPokemonRandom, getPokemonByType } = require("pokedev.js") 


const run = async () => {
    const pokemon = await getPokemonByID("032")
    console.log(pokemon);
}

run();
```
## Console output

```js
{
  name: 'Nidoran♂',
  id: '032',
  type: [ 'Poison' ],
  forms: [
    'https://www.serebii.net/swordshield/pokemon/032.png',
    'https://www.serebii.net/Shiny/SWSH/032.png'
    ]
}
```
## Methods

- **`getPokemonByID(id)`**: 
Fetching a pokemon by an id.
- **`getPokemonByName(name)`**:
Fetching a pokemon by a name.
- **`getPokemonByType(type)`**: 
Fetching an array of pokemon by a type.
- **`getPokemonRandom()`**: 
Fetching a random pokemon.

## Developers

- [@RT](https://github.com/rtgamingwdt)
- [@Mezo](https://github.com/mezotv)