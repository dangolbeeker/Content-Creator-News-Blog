const app = require('express');
import { articles } from '../models/articles';



app.get("/articles", (req, res) => {
    res.json(articles);
});