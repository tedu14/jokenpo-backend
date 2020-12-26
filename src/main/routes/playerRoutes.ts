import PlayerController from '@game/infra/controllers/PlayerController'
import { Router } from 'express'
import { adapterRoute } from 'main/adapter/expressAdpater'

export default (router: Router): void => {
    const playerRoutes = new PlayerController()

    router.post('/create-player', adapterRoute(playerRoutes.create))
    router.delete('/remove/:player_id', adapterRoute(playerRoutes.remove))
    router.get('/show-all-players', adapterRoute(playerRoutes.show))
    router.get('/show-player/:player_id', adapterRoute(playerRoutes.index))
}
