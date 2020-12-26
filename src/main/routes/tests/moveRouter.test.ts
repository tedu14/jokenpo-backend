import request from 'supertest'
import app from '../../config/app'

describe('MoveRoutes', () => {
    describe('POST', () => {
        it('should return a status code 200', async () => {
            await request(app)
                .post('/api/create-move')
                .send({
                    move: 'Pedra',
                    player_id: 12345
                })
                .expect(200)
        })
    })

    describe('REMOVE', () => {
        it('should return a status code 200', async () => {
            await request(app).delete('/api/delete-move/123/1234').expect(200)
        })
    })

    describe('GET Index', () => {
        it('should return a status code 200', async () => {
            await request(app).get('/api/show-player-moves/123').expect(200)
        })
    })

    describe('GET Show All Moves', () => {
        it('should return a status code 200', async () => {
            await request(app).get('/api/show-all-moves').expect(200)
        })
    })
})
