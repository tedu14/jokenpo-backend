import RemovePlayerService from '../RemovePlayerService'
import CreatePlayerService from '../CreatePlayerService'
import FindPlayerService from '../FindPlayerService'
import PlayerFakeRepository from '../../repositories/fake/PlayerFakeRepository'
import IdGenerate from '../../providers/idGenerate/implementation/uuidv4'

describe('RemovePlayerService', () => {
    it('should remove player with player id', async () => {
        const playerFakeRepository = new PlayerFakeRepository()
        const idGenerate = new IdGenerate()
        const removePlayerService = new RemovePlayerService(
            playerFakeRepository
        )
        const createPlayerService = new CreatePlayerService(
            playerFakeRepository,
            idGenerate
        )
        const findPlayerService = new FindPlayerService(playerFakeRepository)

        const user = await createPlayerService.execute('Jhon Doe')

        await removePlayerService.execute(user.id)

        expect(await findPlayerService.execute(user.id)).toBeUndefined()
    })
})
