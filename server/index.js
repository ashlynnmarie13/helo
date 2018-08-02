const express = require("express");
const { json } = require("body-parser");
const controller = require("./controller");
const massive = require("massive");
require("dotenv").config();

const port = process.env.PORT || 4000;

const app = express();
app.use(json());

massive(process.env.URI).then(db => app.set("db", db));

//These use quotes not backtics
app.post("/api/users/register", controller.createUser);
app.post("/api/users/login", controller.pullUser);
app.get("/api/posts/:userID/:userposts", controller.getPosts);
app.get("/api/posts/:postID", controller.getPost);

app.listen(port, () => console.log(`listening @ ${port}`));
