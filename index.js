const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app=express()

app.use(app.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/hi', (req, res) => res.render('hi'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))