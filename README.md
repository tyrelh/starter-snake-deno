# Starter Snake using Deno & TypeScript
A simple [Battlesnake](https://play.battlesnake.com/) written in TypeScript.

This snake is using [Deno](https://deno.land/) as a runtime the provided http servier via [Oak middleware](https://deno.land/x/oak).

## Requirements
* Install [Deno](https://deno.land/manual/getting_started/installation)
* That's it!

## Running the snake
To run the snake locally type
```bash
deno run --allow-net --allow-env main.ts
```
Since Deno has no permissions by default, the `--allow-net` gives your snake network access, and `--allow-env` gives your snake access to environment variables.