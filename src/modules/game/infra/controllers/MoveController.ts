import IdGenerate from '@game/providers/idGenerate/implementation/uuidv4'
import MoveFakeRepority from '@game/repositories/fake/MoveFakeRepository'
import CreateMoveService from '@game/services/CreateMoveService'
import FindMoveService from '@game/services/FindMoveService'
import FindAllMoveService from '@game/services/FindAllMoveService'
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

    public async create(request: httpRequest): Promise<httpResponse> {
        try {
            const { move, player_id } = request.body

            const moveFakeRepository = new MoveFakeRepority()
            const idGenerate = new IdGenerate()
            const createMoveService = new CreateMoveService(
                moveFakeRepository,
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
            const moveFakeRepository = new MoveFakeRepority()
            const findAllMoveService = new FindAllMoveService(
                moveFakeRepository
            )

            const allmoves = await findAllMoveService.execute()

            return successRequest(allmoves)
        } catch (err) {
            return serverError()
        }
    }
}
