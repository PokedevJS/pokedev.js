declare module '@pokedevjs/pokedev.js' {
    export function getPokemonByID(id: number): Promise<Object>;
    export function getPokemonByName(name: string): Promise<Object>;
    export function getPokemonByType(type): Console;
    export function getPokemonRandom(): Promise<Object>
}


