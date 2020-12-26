import { httpRequest, httpResponse } from '@game/infra/protocols/http'
import { Request, Response } from 'express'

interface Controller {
    (req: httpRequest): Promise<httpResponse>
}

export const adapterRoute = (controller: Controller) => {
    return async (req: Request, res: Response): Promise<void> => {
        const response = await controller({
            body: req.body,
            params: req.params
        })

        if (response.statusCode >= 200 && response.statusCode <= 299) {
            res.status(response.statusCode).json(response.body)
        } else {
            res.status(response.statusCode).json({
                error: response.body.message
            })
        }
    }
}
