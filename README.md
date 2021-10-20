# exercise-node-scripting-basic

In this exercise, we will be creating a simple Node.js script that will:

- Load data from [data.json](./data.json)
- Find a pokemon based on its name ( case insensitive )
- Log the pokemon data if found, otherwise, log an error saying the pokemon is missing

## Examples

```bash
$ node findPokemon charMeleon
FOUND - id: 005, name: Charmeleon, types: Fire

$ node findPokemon PikaChu
NOT FOUND - PikaChu is not found
```

## Getting started

1. Make sure you have Node installed:

```bash
$ node -v 
v14.17.6 # Example
```

2. Fork this repo by clicking the "Fork" button in GitHub UI

3. Clone the forked repo

```bash
$ git clone git@github.com:YOUR_GITHUB_USERNAME_HERE/exercise-node-scripting-basic.git
```

4. Create the script, follow instructions and make sure the outputs are the correct.