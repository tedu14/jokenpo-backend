import { Move, MoveData, Moves } from '@game/dtos/Move'
import { MoveRepository } from '../models/MoveRepository'

export default class MoveFakeRepority implements MoveRepository {
    private moves: Moves[] = []

    public async create({ move, player_id, id }: MoveData): Promise<Move> {
        try {
            const playerMoves = await this.findByPlayerId(player_id)

            const createMove: Move = { move, id }

            if (playerMoves) {
                playerMoves.moves.push(createMove)
            }

            if (!playerMoves) {
                this.moves.push({ player_id, moves: [createMove] })
            }

            return createMove
        } catch (err) {
            return err
        }
    }

    public async findByPlayerId(player_id: string): Promise<Moves | undefined> {
        try {
            const moveId = this.moves.findIndex(
                findMove => findMove.player_id === player_id
            )

            return this.moves[moveId]
        } catch (err) {
            return err
        }
    }

    public async findAll(): Promise<Moves[] | undefined> {
        return this.moves
    }

    public async remove({
        player_id,
        id
    }: Omit<MoveData, 'move'>): Promise<void> {
        try {
            const playerMoves = await this.findByPlayerId(player_id)

            if (playerMoves) {
                const moveId = playerMoves.moves.findIndex(
                    findMove => findMove.id === id
                )

                if (moveId > -1) {
                    playerMoves.moves.splice(moveId, 1)
                }
            }
        } catch (err) {
            return err
        }
    }
}
