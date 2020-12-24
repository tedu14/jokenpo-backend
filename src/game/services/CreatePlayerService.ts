import { Player } from '@game/dtos/Player';
import { CreatePlayerRepository } from '@game/repositories/PlayerRepository'

export default class CreatePlayerService{
    constructor(
        private userRepository: CreatePlayerRepository
    ){}

    public async execute(name: string): Promise<Player>{
        const user = await this.userRepository.create(name)

        return user
    }
}
