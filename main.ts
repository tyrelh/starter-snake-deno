import { Application, Router, Request, Response } from "https://deno.land/x/oak/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";
import { GameRequest } from "./types.ts";

const argPort = flags.parse(Deno.args).port;
const PORT = Number(argPort) || 5000;

export const root = ({response}: {response: Response}): void => {
    response.body = {
        apiversion: "1",
        author: "<YOUR_GITHUB_USERNAME>",
        color: "#AA22FF",
        head: "beluga",
        tail: "bolt"
    };
    response.status = 200;
}

export const start = ({request, response}: {request: Request, response: Response}): void => {
    response.status = 200;
}

export const move = async ({request, response}: {request: Request, response: Response}): void => {
    const requestBody = await request.body();
    const gameRequest: GameRequest = requestBody.value;
    // Start with your logic here!
    
    response.body = { move: "right" };
    response.status = 200;
}

export const end = ({request, response}: {request: Request, response: Response}): void => {
    response.status = 200;
}

const router = new Router();
router.post("/start", start);
router.post("/move", move);
router.post("/end", end);
router.get("/", root);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);
await app.listen({ port: PORT });