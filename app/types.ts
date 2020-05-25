export interface Game {
    id: string,
    timeout: number
}

export interface Coordinates {
    x: number,
    y: number
}

export interface Snake {
    id: string,
    name: string,
    health: number,
    body: Coordinates[],
    head: Coordinates,
    length: number,
    shout: string
}

export interface Board {
    height: number,
    width: number,
    food: Coordinates[],
    snakes: Snake[]
}

export interface GameRequest {
    game: Game,
    turn: number,
    board: Board,
    you: Snake
}