import request from 'supertest'
import app from '../../config/app'

describe('PlayerRoutes', () => {
    describe('POST', () => {
        it('should return a stauts code 200 if valid params is provided in create route', async () => {
            await request(app)
                .post('/api/create-player')
                .send({
                    name: 'Jhon Doe'
                })
                .expect(200)
        })
    })

    describe('DELETE', () => {
        it('should return a status code 200 if user has removed', async () => {
            await request(app).delete(`/api/remove/123456`).expect(200)
        })
    })

    describe('GET Player', () => {
        it('should return a stauts code 200 if player id has provided', async () => {
            await request(app).get('/api/show-player/123456').expect(200)
        })
    })

    describe('GET all Players', () => {
        it('should return a status code 200', async () => {
            await request(app).get('/api/show-all-players').expect(200)
        })
    })
})
