import { Move, MoveData } from '@game/dtos/Move'
import { IdGenerateModel } from '@game/providers/idGenerate/model/IdGenerate'
import { MoveRepository } from '@game/repositories/models/MoveRepository'

export default class CreateMoveService {
    constructor(
        private moveRepository: MoveRepository,
        private idGenerate: IdGenerateModel
    ) {}

    public async execute({
        move,
        player_id
    }: Omit<MoveData, 'id'>): Promise<Move> {
        try {
            const id = await this.idGenerate.generate()
            const createMove = await this.moveRepository.create({
                move,
                player_id,
                id
            })

            return createMove
        } catch (err) {
            return err
        }
    }
}
