import express, { Request, Response } from 'express'
import configService from './services/config.service'

const app = express()

app.post('/register', async (req: Request, res: Response) => {
	res.send('Ok')
})

app.post('/login', async (req: Request, res: Response) => {
	res.send('Ok')
})

app.listen(configService.get('PORT', '3000'))
