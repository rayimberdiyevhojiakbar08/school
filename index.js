import express from "express";
import layout from "express-ejs-layouts";
import router from "./routers/home.router.js";
const app = express();


app.set("view engine", "ejs");
app.set("port", 8080);

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(layout);
app.use(router);
app.listen(8080, ()=> console.log("ishladi port:8080") )



