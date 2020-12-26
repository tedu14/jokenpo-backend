import { Moves } from '@game/dtos/Move'
import { MoveRepository } from '@game/repositories/models/MoveRepository'

export default class FindAllMoveService {
    constructor(private moveRepository: MoveRepository) {}

    public async execute(): Promise<Moves[] | undefined> {
        try {
            const allMoves = await this.moveRepository.findAll()

            return allMoves
        } catch (err) {
            return err
        }
    }
}
