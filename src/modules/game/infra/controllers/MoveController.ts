import MoveFakeRepority from '@game/repositories/fake/MoveFakeRepository'
import FindMoveService from '@game/services/FindMoveService'
import MissingParamError from '../errors/MissingParamError'
import { badRequest, serverError, successRequest } from '../helpers/httpHelper'
import { httpRequest, httpResponse } from '../protocols/http'

export default class MoveController {
    public async index(request: httpRequest): Promise<httpResponse> {
        try {
            const { player_id } = request.body

            const moveFakeRepository = new MoveFakeRepority()
            const findMoveService = new FindMoveService(moveFakeRepository)

            if (!player_id) {
                return badRequest(new MissingParamError('Player id'))
            }

            const playerMove = await findMoveService.execute(player_id)

            return successRequest(playerMove)
        } catch (err) {
            return serverError()
        }
    }
}
