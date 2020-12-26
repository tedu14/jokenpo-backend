import { Express, Router } from 'express'

import moveRouter from '../routes/moveRoutes'
import playerRouter from '../routes/playerRoutes'

export default (app: Express): void => {
    const router = Router()

    app.use('/api', router)

    playerRouter(router)
    moveRouter(router)
}
