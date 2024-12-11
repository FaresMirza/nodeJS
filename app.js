const express = require("express")
const adminRoutes = require("./routes/admin")
const useresRoutes = require("./routes/users")
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', './views');


app.use('/',adminRoutes.routes)
app.use('/',useresRoutes.routes)

app.listen(3000)