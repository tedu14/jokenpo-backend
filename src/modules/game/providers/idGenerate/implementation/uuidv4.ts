import { uuid } from 'uuidv4'
import { IdGenerateModel } from '../model/IdGenerate'

export default class IdGenerate implements IdGenerateModel {
    public generate(): string {
        return uuid()
    }
}
