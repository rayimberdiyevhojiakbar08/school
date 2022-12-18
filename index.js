import express from 'express';
import layout from 'express-ejs-layouts';
import HomeRouter from './routers/home.router.js';
<<<<<<< HEAD
import {resolve} from 'path'
const app = exress();
const __dirname = resolve();
app.set('view engine', 'ejs');

app.use(exress.json());
app.use(exress.urlencoded({extended: true}));
app.use(exress.static(__dirname + '/public'))
=======
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(`public`)); 
app.use(express.json());
>>>>>>> 8af4386a6326a58273a5132d15ae94571828ad22
app.use(layout);
app.use('/', HomeRouter);

app.listen(3000, () => console.log('server is runnning Port:3000'));
