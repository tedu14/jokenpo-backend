import { Player } from '@game/dtos/Player';
import { IdGenerateModel } from '@game/providers/idGenerate/model/IdGenerate';
import { CreatePlayerRepository } from '@game/repositories/models/PlayerRepository'

export default class CreatePlayerService{
    constructor(
        private playerRepository: CreatePlayerRepository,
        private idGenerate: IdGenerateModel
    ){}

    public async execute(name: string): Promise<Player>{
        const id = await this.idGenerate.generate()
        const user = await this.playerRepository.create({
            id,
            name
        })

        return user
    }
}
