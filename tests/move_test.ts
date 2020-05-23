import { assert } from "https://deno.land/std/testing/asserts.ts";
import { move } from "../app/main.ts";
import { GameRequest } from "../app/types.ts";

Deno.test("Starter snake default return value test", () => {
  // when
  const result = move(mockGameRequest);
  // then
  assert(result?.move)
  assert(result.move === "right")
});


const mockGameRequest: GameRequest = {
  game: {
    id: "gameid",
    timeout: 500
  },
  turn: 3,
  board: {
    height: 11,
    width: 11,
    food: [
      { x: 3, y: 3 }
    ],
    snakes: [
      {
        id: "someid",
        name: "Deno Snake",
        health: 97,
        body: [
          { x: 1, y: 1 },
          { x: 2, y: 1 },
          { x: 3, y: 1 }
        ],
        head: { x: 1, y: 1 },
        length: 3,
        shout: "Why are we shouting?"
      }
    ]
  },
  you: {
    id: "someid",
    name: "Deno Snake",
    health: 97,
    body: [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 }
    ],
    head: { x: 1, y: 1 },
    length: 3,
    shout: "Why are we shouting?"
  }
}