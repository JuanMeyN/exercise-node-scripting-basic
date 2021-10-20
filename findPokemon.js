// Node.js allows us to import .json files directly. Alternatively, we can use `fs` to read this file.
const data = require("./data.json");

// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
const pokemonName = process.argv[2];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const pokemon = data.find((pokemon) => pokemon.name.toLowerCase() === pokemonName.toLowerCase());

if (!pokemon) {
    console.error(`NOT FOUND - ${pokemonName} is not found`);
    process.exit(1); //https://nodejs.dev/learn/how-to-exit-from-a-nodejs-program
}

console.log(`FOUND - id: ${pokemon.id}, name: ${pokemon.name}, types: ${pokemon.types.join(",")}`);
process.exit(0);