import { uuid } from 'uuidv4'
import { IdGenerateModel } from "../model/IdGenerate";

export class IdGenerate implements IdGenerateModel{
    public generate(): string{
        return uuid()
    }
}
