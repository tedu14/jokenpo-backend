import FindAllMoveService from '../FindAllMoveService'
import CreatePlayerService from '../CreatePlayerService'
import CreateMoveService from '../CreateMoveService'
import MoveFakeRepository from '../../repositories/fake/MoveFakeRepository'
import PlayerFakeRepository from '../../repositories/fake/PlayerFakeRepository'
import IdGenerate from '../../providers/idGenerate/implementation/uuidv4'

describe('FindAllMoveService', () => {
    it('should be able a find all moves', async () => {
        const moveFakeRepository = new MoveFakeRepository()
        const playerFakeRepository = new PlayerFakeRepository()
        const idGenerate = new IdGenerate()
        const findAllMoveService = new FindAllMoveService(moveFakeRepository)
        const createMoveService = new CreateMoveService(
            moveFakeRepository,
            idGenerate
        )
        const createPlayerService = new CreatePlayerService(
            playerFakeRepository,
            idGenerate
        )

        const player = await createPlayerService.execute('jhon Doe')

        const playerMove = await createMoveService.execute({
            move: 'Papel',
            player_id: player.id
        })

        expect(await findAllMoveService.execute()).toMatchObject([
            { moves: [playerMove], player_id: player.id }
        ])
    })
})
