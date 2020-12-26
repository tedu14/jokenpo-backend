import { Moves } from '@game/dtos/Move'
import { MoveRepository } from '@game/repositories/models/MoveRepository'

export default class FindMoveService {
    constructor(private moveRepository: MoveRepository) {}

    public async execute(player_id: string): Promise<Moves | undefined> {
        const playerMoves = await this.moveRepository.findByPlayerId(player_id)

        return playerMoves
    }
}
