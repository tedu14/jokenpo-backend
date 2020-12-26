import { IdGenerateModel } from '@game/providers/idGenerate/model/IdGenerate'
import { PlayerRepository } from '@game/repositories/models/PlayerRepository'
import CreatePlayerService from '@game/services/CreatePlayerService'
import FindAllPlayersService from '@game/services/FindAllPlayersService'
import FindPlayerService from '@game/services/FindPlayerService'
import RemovePlayerService from '@game/services/RemovePlayerService'
import MissingParamError from '../errors/MissingParamError'
import { badRequest, serverError, successRequest } from '../helpers/httpHelper'
import { httpRequest, httpResponse } from '../protocols/http'

export default class PlayerController {
    constructor(
        private playerRepository: PlayerRepository,
        private idGenerate: IdGenerateModel
    ) {}

    public async index(request: httpRequest): Promise<httpResponse> {
        try {
            const { player_id } = request.body
            const findPlayerService = new FindPlayerService(
                this.playerRepository
            )

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
            const createPlayerService = new CreatePlayerService(
                this.playerRepository,
                this.idGenerate
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
            const findAllPlayersService = new FindAllPlayersService(
                this.playerRepository
            )

            const allPlayers = await findAllPlayersService.execute()

            return successRequest(allPlayers)
        } catch (err) {
            return serverError()
        }
    }

    public async remove(request: httpRequest): Promise<httpResponse> {
        try {
            const { player_id } = request.body
            const removePlayerService = new RemovePlayerService(
                this.playerRepository
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
