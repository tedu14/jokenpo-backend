import { Express } from 'express'

import cors from '../middlewares/cors'
import contentType from '../middlewares/contentType'
import jsonParse from '../middlewares/jsonParse'

export default (app: Express): void => {
    app.disable('x-powered-by')
    app.use(cors)
    app.use(jsonParse)
    app.use(contentType)
}
