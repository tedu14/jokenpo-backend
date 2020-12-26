import { Move, MoveData } from '@game/dtos/Move'
import IdGenerate from '@game/providers/idGenerate/implementation/uuidv4'
import { MoveRepository } from '@game/repositories/models/MoveRepository'

export default class CreateMoveService {
    constructor(
        private moveRepository: MoveRepository,
        private idGenerate: IdGenerate
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
