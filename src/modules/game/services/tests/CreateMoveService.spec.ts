import CreateMoveService from '../CreateMoveService'
import CreatePlayerService from '../CreatePlayerService'
import MoveFakeRepository from '../../repositories/fake/MoveFakeRepository'
import PlayerFakeRepository from '../../repositories/fake/PlayerFakeRepository'
import IdGenerate from '../../providers/idGenerate/implementation/uuidv4'

describe('CreateMoveService', () => {
    it('should be able a new move', async () => {
        const idGenerate = new IdGenerate()
        const playerRepository = new PlayerFakeRepository()
        const moveRepository = new MoveFakeRepository()
        const createMoveService = new CreateMoveService(
            moveRepository,
            idGenerate
        )
        const createPlayerService = new CreatePlayerService(
            playerRepository,
            idGenerate
        )

        const user = await createPlayerService.execute('Jhon Doe')

        expect(
            await createMoveService.execute({
                player_id: user.id,
                move: 'pedra'
            })
        ).toHaveProperty<string>('id')
    })
})
