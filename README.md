
# pokedev.js 


pokedev.js is a tool make to help developers get info about a pokemon and use it in any project with ease.

![Logo](https://cdn.discordapp.com/attachments/849761002676813854/957437663718285382/35d601855f9b83fca3dfa53e4ffddd25.png)

[![Discord](https://img.shields.io/discord/953072048576536596?color=5865F2&label=discord&logo=Discord&logoColor=red)](https://discord.com/invite/qfxwKUM9RY) 


[![npm](https://img.shields.io/badge/npm-pokedev.js-red)](https://www.npmjs.com/package/pokedev.js) 

 [![size](https://img.shields.io/github/repo-size/pokedevjs/pokedev.js?color=red&label=SIZE)](https://img.shields.io/github/repo-size/pokedevjs/pokedev.js?color=red&label=SIZE)

## Quick Links

- [Installation](#installation)
- [Code Example](#code-example)
    - [Methods](#methods)
- [Console Output](#donsole-output)
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
  name: 'Nidoran',
  id: '032',
  form: 'https://www.serebii.net/Shiny/SWSH/032.png',
  type: 'COMMING SOON'
}
```
## Methods

- **`getPokemonByID(id)`**: 
Fetching a pokemon by an id.
- **`getPokemonByName(name)`**:
Fetching a pokemon by a name.
- **`getPokemonByType(type)`**: 
Fetching a pokemon by the type.
- **`getPokemonRandom()`**: 
Fetching a random pokemon. (SOON)

## Developers

- [@RT](https://github.com/rtgamingwdt)
- [@Mezo](https://github.com/mezotv)

