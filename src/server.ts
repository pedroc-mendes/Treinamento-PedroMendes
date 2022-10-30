import express from 'express';
import morgan from 'morgan';
import routes from './routes';

const app = express()

app.use(morgan('dev'));
app.use(express.json());

app.use(routes);

app.get('/test', (_req: any, res: { json: (arg0: { message: string; }) => any; }) => {
    return res.json({ message: 'Hello World!'})
})

app.listen(3333, () => {
    console.log('server started on port 3333!')
});