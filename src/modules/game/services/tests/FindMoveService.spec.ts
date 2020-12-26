import FindMoveService from '../FindMoveService'
import CreatePlayerService from '../CreatePlayerService'
import CreateMoveService from '../CreateMoveService'
import MoveFakeRepository from '../../repositories/fake/MoveFakeRepository'
import PlayerFakeRepository from '../../repositories/fake/PlayerFakeRepository'
import IdGenerate from '../../providers/idGenerate/implementation/uuidv4'

describe('FindMoveService', () => {
    it('should be able a find move', async () => {
        const moveFakeRepository = new MoveFakeRepository()
        const playerFakeRepository = new PlayerFakeRepository()
        const idGenerate = new IdGenerate()
        const createPlayerService = new CreatePlayerService(
            playerFakeRepository,
            idGenerate
        )
        const createMoveService = new CreateMoveService(
            moveFakeRepository,
            idGenerate
        )
        const findMoveService = new FindMoveService(moveFakeRepository)

        const player = await createPlayerService.execute('Jhon Doe')

        for (let i = 0; i <= 3; i++) {
            await createMoveService.execute({
                move: 'Pedra',
                player_id: player.id
            })
        }

        expect(await findMoveService.execute(player.id)).toHaveProperty(
            'player_id'
        )
    })
})
