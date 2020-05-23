export interface Game {
    id: string,
    timeout: number
}

export interface Cell {
    x: number,
    y: number
}

export interface Snake {
    id: string,
    name: string,
    health: number,
    body: Cell[],
    head: Cell,
    length: number,
    shout: string
}

export interface Board {
    height: number,
    width: number,
    food: Cell[],
    snakes: Snake[]
}

export interface GameRequest {
    game: Game,
    turn: number,
    board: Board,
    you: Snake
}