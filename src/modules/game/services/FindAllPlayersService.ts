import { Player } from '@game/dtos/Player'
import { PlayerRepository } from '@game/repositories/models/PlayerRepository'

export default class FindAllPlayersService {
    constructor(private playerRepository: PlayerRepository) {}

    public async execute(): Promise<Player[] | undefined> {
        try {
            const players = await this.playerRepository.findAll()

            return players
        } catch (error) {
            return error
        }
    }
}
