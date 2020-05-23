import { Application, Router, Request, Response } from "https://deno.land/x/oak/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";
import { GameRequest } from "./app/types.ts";
import { move, root } from "./app/main.ts";

const argPort = flags.parse(Deno.args).port;
const PORT = Number(argPort) || 5000;

const router = new Router();
router.post("/start", ({request, response}: {request: Request, response: Response}) => {
    response.status = 200;
});
router.post("/move", async ({request, response}: {request: Request, response: Response}) => {
    const requestBody = await request.body();
    const gameRequest: GameRequest = requestBody.value;
    response.body = move(gameRequest)
    response.status = 200;
});
router.post("/end", ({request, response}: {request: Request, response: Response}) => {
    response.status = 200;
});
router.get("/", ({response}: {response: Response}) => {
    response.body = root();
    response.status = 200;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);
await app.listen({ port: PORT });