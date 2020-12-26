import request from 'supertest'
import app from '../../config/app'

describe('Content-Type', () => {
    it('should return default content type as json', async () => {
        app.get('/test-content', (req, res) => res.send(''))

        await request(app).get('/test-content').expect('content-type', /json/)
    })
})
