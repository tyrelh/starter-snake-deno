import { GameRequest } from "./types.ts";

export const root = () => {
    return {
        apiversion: "1",
        author: "<YOUR_BATTLESNAKE_USERNAME>",
        color: "#AA22FF",
        head: "beluga",
        tail: "bolt"
    };
}

export const move = (gameRequest: GameRequest) => {
    // Start with your logic here!

    return { move: "right" };
}