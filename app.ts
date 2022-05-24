import express from 'express';
import { Request, Response, Application } from 'express';
import routes from './src/routes/route';

import connectDB from './src/config/config'
connectDB()

const app: Application = express();


// We need a database
// We need routes api/puppies/:id 
// We need a controller for puppies endpoint
// Interface object for the puppies
// Tests

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/puppies', routes)


app.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'index working' });
});
app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

export default app;
