import { uuid } from 'uuidv4'

import { Player } from "../../dtos/Player";
import { CreatePlayerRepository } from "../models/PlayerRepository";

export default class CreatePlayerFakeRepository implements CreatePlayerRepository{
    private users: Player[] = []

    public async create(data: Player): Promise<Player>{

        this.users.push(data)

        return data
    }

    public async findById(id: string): Promise<Player | undefined>{
        const index = this.users.findIndex(userIndex => userIndex.id === id)

        if(index > -1){
            return this.users[index]
        }else{
            return;
        }

    }

    public async findAll(): Promise<Player[] | undefined>{
        return this.users
    }

    public async remove(id: string): Promise<void>{
        const user = await this.findById(id)

        if(user){
            const position = this.users.findIndex(findUser => findUser === user);

            this.users.splice(position, 1)

            return;
        }
    }
}
