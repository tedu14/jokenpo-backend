import { MoveData, Moves } from '@game/dtos/Move'
import { MoveRepository } from '../models/MoveRepository'

export default class MoveFakeRepority implements MoveRepository {
    private moves: Moves[] = []

    public async create(data: MoveData): Promise<string> {
        const playerMoves = await this.findByPlayerId(data.player_id)

        if (playerMoves) {
            playerMoves.moves.push(data.move)
        }

        return data.move
    }

    public async findByPlayerId(player_id: string): Promise<Moves | undefined> {
        const moveId = this.moves.findIndex(
            findMove => findMove.player_id === player_id
        )

        if (moveId > -1) {
            return this.moves[moveId]
        }
    }

    public async findAll(): Promise<Moves[] | undefined> {
        return this.moves
    }
}
