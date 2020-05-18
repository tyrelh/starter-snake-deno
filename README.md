# Starter Snake using Deno & TypeScript
A simple [Battlesnake](https://play.battlesnake.com/) written in TypeScript.

This snake is built using [Deno](https://deno.land/) as a runtime, and the Deno standard http server via [Oak](https://deno.land/x/oak) middleware.

## Requirements
* [Deno](https://deno.land/manual/getting_started/installation)
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) (can deploy elsewhere as well)

## Setup
First, clone this repo
```bash
git clone https://github.com/tyrelh/starter-snake-deno.git starter-snake-deno
cd starter-snake-deno
```

If you don't have Deno installed, install it. (Example using Brew in MacOS. Refer to the [Deno docs](https://deno.land/manual/getting_started/installation) for other OSs)
```bash
brew install deno
```

## Running the snake locally
To run the snake locally type
```bash
deno run --allow-net --allow-env main.ts
```
Since Deno has no permissions by default, the `--allow-net` gives your snake network access, and `--allow-env` gives your snake access to environment variables.

## Deploy to Heroku
If you don't have the Heroku CLI installed, install it. (Example using Brew on MacOS. Refer to the [Heroku docs](https://devcenter.heroku.com/articles/heroku-cli) for other OSs)
```bash
brew install heroku
```

Login to your Heroku account
```bash
heroku login -i
```

Since Heroku doesn't have Deno installed by default we need to use what is called a Buildpack to set up the Heroku server with Deno. Luckily one exists for us to use, created by [chibat](https://github.com/chibat/heroku-buildpack-deno).
```bash
heroku create your-unique-snake-name --buildpack https://github.com/chibat/heroku-buildpack-deno.git
```
Now you can push your snake code to this new server
```bash
git push heroku master
```

## Developing the snake
Visit the [Battlesnake API docs](https://docs.battlesnake.com/snake-api) for the latest API info.

Start by adding some logic to the `move` function to choose a different move! Just make sure you are returning one of `"up"`, `"down"`, `"left"`, or `"right"` as moves.