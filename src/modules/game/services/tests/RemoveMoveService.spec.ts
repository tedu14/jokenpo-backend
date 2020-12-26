import RemoveMoveService from '../RemoveMoveService'
import CreatePlayerService from '../CreatePlayerService'
import CreateMoveService from '../CreateMoveService'
import FindMoveService from '../FindMoveService'
import MoveFakeRepority from '../../repositories/fake/MoveFakeRepository'
import PlayerFakeRepository from '../../repositories/fake/PlayerFakeRepository'
import IdGenerate from '../../providers/idGenerate/implementation/uuidv4'

describe('RemoveMoveService', () => {
    it('should be able remove move by player id', async () => {
        const moveFakeRepository = new MoveFakeRepority()
        const playerFakeRepository = new PlayerFakeRepository()
        const idGenerate = new IdGenerate()
        const removeMoveService = new RemoveMoveService(moveFakeRepository)
        const findMoveService = new FindMoveService(moveFakeRepository)
        const createPlayerService = new CreatePlayerService(
            playerFakeRepository,
            idGenerate
        )
        const createMoveService = new CreateMoveService(
            moveFakeRepository,
            idGenerate
        )

        const player = await createPlayerService.execute('jhon Doe')
        const playerMove = await createMoveService.execute({
            move: 'Tesoura',
            player_id: player.id
        })

        await removeMoveService.execute({
            player_id: player.id,
            id: playerMove.id
        })

        expect(await findMoveService.execute(player.id)).toMatchObject({
            moves: [],
            player_id: player.id
        })
    })
})
