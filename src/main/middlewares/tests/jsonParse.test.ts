import request from 'supertest'
import app from '../../config/app'

describe('JSON Parse', () => {
    it('should parse body as json', async () => {
        app.post('/test-parser', (req, res) => res.send(req.body))

        await request(app)
            .post('/test-parser')
            .send({ name: 'Jhon Doe' })
            .expect({ name: 'Jhon Doe' })
    })
})
