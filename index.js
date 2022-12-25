import express from 'express';
import { connect } from 'mongoose';
import layout from 'express-ejs-layouts';
import HomeRouter from './routers/home.router.js';
connect('mongodb://localhost/maktab', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static(`public`)); 
app.use(express.json());
app.use(layout);
app.use('/', HomeRouter);

app.listen(8080, () => console.log('server is runnning Port:8080'));