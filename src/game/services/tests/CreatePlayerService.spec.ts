import CreatePlayerService from "../CreatePlayerService"
import CreatePlayerFakeRepository from '../../repositories/fake/PlayerFakeRepository'

describe('CreatePlayerService', () => {
    it('should be able create a new user', async () => {
        const playerRepository = new CreatePlayerFakeRepository()
        const createPlayerService = new CreatePlayerService(playerRepository)

        const user = await createPlayerService.execute('Jhon Doe')

        expect(user).toHaveProperty('id')
    })
})
