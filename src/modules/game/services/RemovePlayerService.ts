import { PlayerRepository } from '@game/repositories/models/PlayerRepository'

export default class RemovePlayerService {
    constructor(private playerRepository: PlayerRepository) {}

    public async execute(player_id: string): Promise<void> {
        try {
            await this.playerRepository.remove(player_id)
        } catch (err) {
            return err
        }
    }
}
