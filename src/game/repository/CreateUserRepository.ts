import { CreateUser } from "../dtos/CreateUser";

export interface CreateUserRepository{
    findById(id: string): Promise<CreateUser | undefined>
    create(name: string): Promise<CreateUser>
}
