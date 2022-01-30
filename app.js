const express = require('express');
var router = express.Router()
const app = express();
const PORT = 8080;
const path = require('path');
const { json } = require('express');
const server = app.listen(PORT, () => {
    console.log(`NodeJs on ${PORT}`)
})
router.use(express.static(path.join(__dirname, 'public')))
router.use('/files', express.static(path.join(__dirname, 'files')))
router.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//mount point
app.use('/', router);
  
app.post('/adduser', (req,res) => {
    console.log(req.body)
    res.status(200).send('enviado com sucesso')
})

//app.use('/users', authRouter)
//app.use('/users', openRouter)

app.get('*', (req,res) => {
    res.status(404).json({error: 'NOT FOUND'});
})

module.exports = router