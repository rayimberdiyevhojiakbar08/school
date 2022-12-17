import exress from 'express';
import layout from 'express-ejs-layouts';

const app = exress();

app.set('view engine', 'ejs');

app.use(exress.json());
app.use(exress.urlencoded({extended: true}));
app.use(layout);

app.listen(3000, () => console.log('server is runnning Port:3000'));