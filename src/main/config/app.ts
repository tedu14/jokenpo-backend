import express from 'express'
import setup from './setup'
import routes from './routes'

const app = express()

setup(app)
routes(app)

export default app
