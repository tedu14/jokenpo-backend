import { IdGenerateModel } from '@game/providers/idGenerate/model/IdGenerate'
import { MoveRepository } from '@game/repositories/models/MoveRepository'
import CreateMoveService from '@game/services/CreateMoveService'
import FindMoveService from '@game/services/FindMoveService'
import FindAllMoveService from '@game/services/FindAllMoveService'
import RemoveMoveService from '@game/services/RemoveMoveService'
import MissingParamError from '../errors/MissingParamError'
import { badRequest, serverError, successRequest } from '../helpers/httpHelper'
import { httpRequest, httpResponse } from '../protocols/http'

export default class MoveController {
    constructor(
        private moveRepository: MoveRepository,
        private idGenerate: IdGenerateModel
    ) {}

    public async index(request: httpRequest): Promise<httpResponse> {
        try {
            const { player_id } = request.body

            const findMoveService = new FindMoveService(this.moveRepository)

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

            const createMoveService = new CreateMoveService(
                this.moveRepository,
                this.idGenerate
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
            const findAllMoveService = new FindAllMoveService(
                this.moveRepository
            )

            const allmoves = await findAllMoveService.execute()

            return successRequest(allmoves)
        } catch (err) {
            return serverError()
        }
    }

    public async remove(request: httpRequest): Promise<httpResponse> {
        try {
            const { player_id, move_id } = request.body

            const removeMoveService = new RemoveMoveService(this.moveRepository)

            if (!player_id) {
                return badRequest(new MissingParamError('Player id'))
            }

            if (!move_id) {
                return badRequest(new MissingParamError('Move id'))
            }

            await removeMoveService.execute({ player_id, id: move_id })

            return successRequest(true)
        } catch (err) {
            return serverError()
        }
    }
}
