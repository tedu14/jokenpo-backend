import MissingParamError from '../../errors/MissingParamError'
import PlayerController from '../PlayerController'

const playerController = new PlayerController()

describe('PlayerController', () => {
    it('should return stauts 400 if player_id is not provided in index method', async () => {
        const request = {
            body: {
                player_id: undefined
            }
        }

        const response = await playerController.index(request)

        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(new MissingParamError('Player id'))
    })

    it('should return a status code 400 if player name is not provided in create method', async () => {
        const request = {
            body: {
                name: undefined
            }
        }

        const response = await playerController.create(request)

        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(new MissingParamError('Player name'))
    })

    it('should return a status code 400 if player id is not provide in remove method', async () => {
        const request = {
            body: {
                player_id: undefined
            }
        }

        const response = await playerController.remove(request)

        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual(new MissingParamError('Player id'))
    })
})
