import ServerError from '../errors/ServerError'
import { httpResponse } from '../protocols/http'

export const badRequest = (error: Error): httpResponse => ({
    body: error,
    statusCode: 400
})

export const serverError = (): httpResponse => ({
    body: new ServerError(),
    statusCode: 500
})

export const successRequest = <T = any>(data: T): httpResponse => ({
    body: data,
    statusCode: 200
})
