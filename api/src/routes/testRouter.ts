import express, { Request, Response } from 'express';

const testRouter = express.Router();

testRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send('Looking good!');
});

export default testRouter;
