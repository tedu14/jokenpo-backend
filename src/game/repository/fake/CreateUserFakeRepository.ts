import { uuid } from 'uuidv4'

import { CreateUser } from "../../dtos/CreateUser";
import { CreateUserRepository } from "../CreateUserRepository";

export default class CreateUserFakeRepository implements CreateUserRepository{
    private users: CreateUser[] = []

    public async create(name: string): Promise<CreateUser>{
        const user: CreateUser = {
            id: uuid(),
            name
        }

        this.users.push(user)

        return user
    }

    public async findById(id: string): Promise<CreateUser | undefined>{
        const index = this.users.findIndex(userIndex => userIndex.id === id)

        if(index > -1){
            return this.users[index]
        }else{
            return;
        }

    }
}
