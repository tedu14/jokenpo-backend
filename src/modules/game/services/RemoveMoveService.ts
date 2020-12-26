import { MoveData } from '@game/dtos/Move'
import { MoveRepository } from '@game/repositories/models/MoveRepository'

export default class RemoveMoveService {
    constructor(private moveRepository: MoveRepository) {}

    public async execute(data: Omit<MoveData, 'move'>): Promise<void> {
        try {
            await this.moveRepository.remove(data)
        } catch (err) {
            return err
        }
    }
}
