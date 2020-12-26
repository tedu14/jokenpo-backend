import CreateMoveService from '@game/services/CreateMoveService'
import FindMoveService from '@game/services/FindMoveService'
import FindAllMoveService from '@game/services/FindAllMoveService'
import RemoveMoveService from '@game/services/RemoveMoveService'
import MoveFakeRepority from '@game/repositories/fake/MoveFakeRepository'
import IdGenerate from '@game/providers/idGenerate/implementation/uuidv4'
import MissingParamError from '../errors/MissingParamError'
import { badRequest, serverError, successRequest } from '../helpers/httpHelper'
import { httpRequest, httpResponse } from '../protocols/http'

export default class MoveController {
    public async index(request: httpRequest): Promise<httpResponse> {
        try {
            const { player_id } = request.params

            const moveRepository = new MoveFakeRepority()

            const findMoveService = new FindMoveService(moveRepository)

            if (!player_id) {
                return badRequest(new MissingParamError('Player id'))
            }

            const playerMove = await findMoveService.execute(player_id)

            return successRequest(playerMove)
        } catch (err) {
            return serverError()
        }
    }

    public async create(request: httpRequest): Promise<httpResponse> {
        try {
            const { move, player_id } = request.body

            const moveRepository = new MoveFakeRepority()
            const idGenerate = new IdGenerate()

            const createMoveService = new CreateMoveService(
                moveRepository,
                idGenerate
            )

            if (!move) {
                return badRequest(new MissingParamError('move'))
            }

            if (!player_id) {
                return badRequest(new MissingParamError('Player id'))
            }

            const createdMove = await createMoveService.execute({
                move,
                player_id
            })

            return successRequest(createdMove)
        } catch (err) {
            return serverError()
        }
    }

    public async show(request: httpRequest): Promise<httpResponse> {
        try {
            const moveRepository = new MoveFakeRepority()
            const findAllMoveService = new FindAllMoveService(moveRepository)

            const allmoves = await findAllMoveService.execute()

            return successRequest(allmoves)
        } catch (err) {
            return serverError()
        }
    }

    public async remove(request: httpRequest): Promise<httpResponse> {
        try {
            const { player_id, move_id } = request.params

            const moveRepository = new MoveFakeRepority()

            const removeMoveService = new RemoveMoveService(moveRepository)

            if (!player_id) {
                return badRequest(new MissingParamError('Player id'))
            }

            if (!move_id) {
                return badRequest(new MissingParamError('Move id'))
            }

            await removeMoveService.execute({ player_id, id: move_id })

            return successRequest('removed move')
        } catch (err) {
            return serverError()
        }
    }
}
