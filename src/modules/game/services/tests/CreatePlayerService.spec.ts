import CreatePlayerService from '../CreatePlayerService'
import CreatePlayerFakeRepository from '../../repositories/fake/PlayerFakeRepository'
import IdGenerate from '../../providers/idGenerate/implementation/uuidv4'

describe('CreatePlayerService', () => {
    it('should be able create a new user', async () => {
        const playerRepository = new CreatePlayerFakeRepository()
        const idGenerate = new IdGenerate()
        const createPlayerService = new CreatePlayerService(
            playerRepository,
            idGenerate
        )

        const user = await createPlayerService.execute('Jhon Doe')

        expect(user).toHaveProperty('id')
    })
})
