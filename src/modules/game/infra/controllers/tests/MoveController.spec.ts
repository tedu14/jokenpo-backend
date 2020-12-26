import MissingParamError from '../../errors/MissingParamError'
import MoveController from '../MoveController'

const moveController = new MoveController()

describe('MoveController', () => {
    it('should return status code 400 if player_id is not provided in index method', async () => {
        const httpRequest = {
            params: {
                player_id: undefined
            }
        }

        const httpResponse = await moveController.index(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('Player id'))
    })

    it('should return status code 400 if player_id is not provided in create method ', async () => {
        const httpRequest = {
            body: {
                player_id: undefined,
                move: 'Pedra'
            }
        }

        const httpResponse = await moveController.create(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('Player id'))
    })

    it('should return status code 400 if move is not provided in create method ', async () => {
        const httpRequest = {
            body: {
                player_id: '123456',
                move: undefined
            }
        }

        const httpResponse = await moveController.create(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('move'))
    })

    it('should return status code 400 if move_id is not provided in remove method ', async () => {
        const httpRequest = {
            params: {
                player_id: '123456',
                move_id: undefined
            }
        }

        const httpResponse = await moveController.remove(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('Move id'))
    })

    it('should return status code 400 if player_id is not provided in remove method ', async () => {
        const httpRequest = {
            params: {
                player_id: undefined,
                move_id: '123456'
            }
        }

        const httpResponse = await moveController.remove(httpRequest)

        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('Player id'))
    })
})
