export interface IdGenerateModel {
    generate(): Promise<string> | string
}
