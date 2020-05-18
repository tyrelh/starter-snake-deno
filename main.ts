import {Application, Router, Request, Response} from "https://deno.land/x/oak/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";

// const env = Deno.env.toObject();
const argPort = flags.parse(Deno.args).port;
// console.log("port: ", argPort);
const PORT = Number(argPort) || 5000;

export const start = ({request, response}: {request: Request, response: Response}): void => {
    response.body = {
        color: "#AA22FF",
        headType: "beluga",
        tailType: "bolt"
    };
    response.status = 200;
}

export const move = ({request, response}: {request: Request, response: Response}): void => {
    // Start with your logic here!
    response.body = { move: "right" };
    response.status = 200;
}

export const end = ({request, response}: {request: Request, response: Response}): void => {
    response.body = {};
    response.status = 200;
}

export const ping = ({response}: {response: Response}): void => {
    response.body = {};
    response.status = 200;
}

const router = new Router();
router.post("/start", start);
router.post("/move", move);
router.post("/end", end);
router.get("/ping", ping);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);
await app.listen({port: PORT});