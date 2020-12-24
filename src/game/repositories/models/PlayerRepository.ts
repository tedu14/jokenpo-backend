import { Player } from "../../dtos/Player";

export interface CreatePlayerRepository{
    findById(id: string): Promise<Player | undefined>
    create(data: Player): Promise<Player>
    findAll(): Promise<Player[] | undefined>
    remove(id: string): Promise<void>
}
