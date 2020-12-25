import { Player } from '@game/dtos/Player'
import { PlayerRepository } from '@game/repositories/models/PlayerRepository'

export default class FindPlayerService {
    constructor(private playerRepository: PlayerRepository) {}

    public async execute(player_id: string): Promise<Player> {
        const player = await this.playerRepository.findById(player_id)

        return player as Player
    }
}
