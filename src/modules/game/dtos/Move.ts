export interface Move {
    id: string
    move: string
}

export interface Moves {
    player_id: string
    moves: Move[]
}

export interface MoveData extends Move {
    player_id: string
}
