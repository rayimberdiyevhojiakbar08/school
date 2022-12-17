import exress from 'express';
import layout from 'express-ejs-layouts';
import HomeRouter from './routers/home.router.js';
const app = exress();

app.set('view engine', 'ejs');

app.use(exress.json());
app.use(exress.urlencoded({extended: true}));
app.use(layout);
app.use('/', HomeRouter);

app.listen(3000, () => console.log('server is runnning Port:3000'));