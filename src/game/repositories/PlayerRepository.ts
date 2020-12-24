import { Player } from "../dtos/Player";

export interface CreatePlayerRepository{
    findById(id: string): Promise<Player | undefined>
    create(name: string): Promise<Player>
    findAll(): Promise<Player[]>
    remove(id: string): Promise<void>
}
