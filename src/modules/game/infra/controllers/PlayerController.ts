import IdGenerate from '@game/providers/idGenerate/implementation/uuidv4'
import PlayerFakeRepository from '@game/repositories/fake/PlayerFakeRepository'
import CreatePlayerService from '@game/services/CreatePlayerService'
import FindAllPlayersService from '@game/services/FindAllPlayersService'
import FindPlayerService from '@game/services/FindPlayerService'
import RemovePlayerService from '@game/services/RemovePlayerService'
import MissingParamError from '../errors/MissingParamError'
import { badRequest, serverError, successRequest } from '../helpers/httpHelper'
import { httpRequest, httpResponse } from '../protocols/http'

export default class PlayerController {
    public async index(request: httpRequest): Promise<httpResponse> {
        try {
            const { player_id } = request.params
            const playerRepository = new PlayerFakeRepository()
            const findPlayerService = new FindPlayerService(playerRepository)

            if (!player_id) {
                return badRequest(new MissingParamError('Player id'))
            }

            const player = await findPlayerService.execute(player_id)

            return successRequest(player)
        } catch (err) {
            return serverError()
        }
    }

    public async create(request: httpRequest): Promise<httpResponse> {
        try {
            const { name } = request.body
            const playerRepository = new PlayerFakeRepository()
            const idGenerate = new IdGenerate()
            const createPlayerService = new CreatePlayerService(
                playerRepository,
                idGenerate
            )

            if (!name) {
                return badRequest(new MissingParamError('Player name'))
            }

            const player = await createPlayerService.execute(name)

            return successRequest(player)
        } catch (err) {
            return serverError()
        }
    }

    public async show(request: httpRequest): Promise<httpResponse> {
        try {
            const playerRepository = new PlayerFakeRepository()
            const findAllPlayersService = new FindAllPlayersService(
                playerRepository
            )

            const allPlayers = await findAllPlayersService.execute()

            return successRequest(allPlayers)
        } catch (err) {
            return serverError()
        }
    }

    public async remove(request: httpRequest): Promise<httpResponse> {
        try {
            const { player_id } = request.params

            const playerRepository = new PlayerFakeRepository()
            const removePlayerService = new RemovePlayerService(
                playerRepository
            )

            if (!player_id) {
                return badRequest(new MissingParamError('Player id'))
            }

            await removePlayerService.execute(player_id)

            return successRequest('player removed')
        } catch (err) {
            return serverError()
        }
    }
}
