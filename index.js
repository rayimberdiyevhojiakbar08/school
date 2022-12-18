import express from 'express';
import layout from 'express-ejs-layouts';
import HomeRouter from './routers/home.router.js';
import {resolve} from 'path'
const __dirname = resolve();

const app = express();
app.set('view engine', 'ejs');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(`public`)); 
app.use(express.json());

app.use(layout);
app.use('/', HomeRouter);

app.listen(3000, () => console.log('server is runnning Port:3000'));
