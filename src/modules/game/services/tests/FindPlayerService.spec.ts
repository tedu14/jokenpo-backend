import FindPlayerService from '../FindPlayerService'
import CreatePlayerService from '../CreatePlayerService'
import PlayerFakeRepository from '../../repositories/fake/PlayerFakeRepository'
import IdGenerate from '../../providers/idGenerate/implementation/uuidv4'

describe('FindPlayerService', () => {
    it('should a find player with id', async () => {
        const playerFakeRepository = new PlayerFakeRepository()
        const idGenerate = new IdGenerate()
        const findPlayerService = new FindPlayerService(playerFakeRepository)
        const createPlayerService = new CreatePlayerService(
            playerFakeRepository,
            idGenerate
        )

        const user = await createPlayerService.execute('Jhon Doe')

        expect(await findPlayerService.execute(user.id)).toMatchObject({
            id: user.id,
            name: user.name
        })
    })
})
