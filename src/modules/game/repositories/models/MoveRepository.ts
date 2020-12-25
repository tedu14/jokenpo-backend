import { MoveData, Moves } from '@game/dtos/Move'

export interface MoveRepository {
    findByPlayerId(player_id: string): Promise<Moves | undefined>
    findAll(): Promise<Moves[] | undefined>
    create(data: MoveData): Promise<string>
}
