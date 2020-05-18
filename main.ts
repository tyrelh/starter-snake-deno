import {Application, Router, Request, Response} from "https://deno.land/x/oak/mod.ts";

const env = Deno.env.toObject();
const PORT = parseInt(env.PORT) || 8080;

export const getMetadata = ({request, response}: {request: Request, response: Response}): void => {
    const metadata = {
        "apiversion": "1",
        "author": "YOUR_GITHUB_USERNAME",
        "color": "#AA11FF",
        "head": "default",
        "tail": "default"
    };
    response.body = metadata;
    response.status = 200;
}

export const start = ({request, response}: {request: Request, response: Response}): void => {
    response.body = {};
    response.status = 200;
}

export const move = ({request, response}: {request: Request, response: Response}): void => {
    response.body = { move: "right" };
    response.status = 200;
}

export const end = ({request, response}: {request: Request, response: Response}): void => {
    response.body = {};
    response.status = 200;
}

const router = new Router();
router.get("/", getMetadata)
router.post("/start", start)
router.post("/move", move)
router.post("/end", end)

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);
await app.listen({port: PORT});