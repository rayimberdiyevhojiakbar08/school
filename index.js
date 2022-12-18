import exress from 'express';
import layout from 'express-ejs-layouts';
import HomeRouter from './routers/home.router.js';
import {resolve} from 'path'
const app = exress();
const __dirname = resolve();
app.set('view engine', 'ejs');

app.use(exress.json());
app.use(exress.urlencoded({extended: true}));
app.use(exress.static(__dirname + '/public'))
app.use(layout);
app.use('/', HomeRouter);

app.listen(3000, () => console.log('server is runnning Port:3000'));
