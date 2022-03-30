declare module 'pokedev.js' {
    export function getPokemonByID(id: string): Promise<Object>;
    export function getPokemonByName(name: string): Promise<Object>;
    export function getPokemonByType(type: string): Promise<Array<Object>>;
    export function getPokemonRandom(): Promise<Object>
}