import FindAllPlayersService from '../FindAllPlayersService'
import CreatePlayerSerrvice from '../CreatePlayerService'
import PlayerFakeRepository from '../../repositories/fake/PlayerFakeRepository'
import IdGenerate from '../../providers/idGenerate/implementation/uuidv4'

describe('FindAllPlayersService', () => {
    it('should able return all players', async () => {
        const pLayerFakeRepository = new PlayerFakeRepository()
        const idGenerate = new IdGenerate()
        const findAllPlayerService = new FindAllPlayersService(
            pLayerFakeRepository
        )
        const createPlayerService = new CreatePlayerSerrvice(
            pLayerFakeRepository,
            idGenerate
        )

        const players = []

        for (let i = 0; i <= 3; i++) {
            players.push(await createPlayerService.execute(`Jhon Doe ${i}`))
        }

        expect(await findAllPlayerService.execute()).toStrictEqual(players)
    })
})
