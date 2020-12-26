import MoveController from '@game/infra/controllers/MoveController'
import { Router } from 'express'
import { adapterRoute } from 'main/adapter/expressAdpater'

export default (router: Router): void => {
    const moveRoutes = new MoveController()

    router.post('/create-move', adapterRoute(moveRoutes.create))
    router.get('/show-player-moves/:player_id', adapterRoute(moveRoutes.index))
    router.get('/show-all-moves', adapterRoute(moveRoutes.show))
    router.delete(
        '/delete-move/:player_id/:move_id',
        adapterRoute(moveRoutes.remove)
    )
}
