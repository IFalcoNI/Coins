const express = require('express')
const cors = require('cors')
const sequelize = require('../database/database')
const user = require('../database/models/User')
const app = express()
const PORT = 3003

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

sequelize
    .sync()
    .then(() => {
        console.log('Synced');
    }).catch((err) => {
        console.log('error sync db', err);
    })

    
app.post('/signup', async (req, res) => {
    const passCheck = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const userToFind = await user.findOne({ where: { username: username } })
    const isEmailExists = await user.findOne({ where: { email: email } })
    if (!userToFind && !isEmailExists) {
        if (password === confirmPassword) {
            if (passCheck.test(password)) {
                const newUser = await user.create(req.body)
                res.send('newUser')
                console.log(newUser);
            } else {
                res.send("password is too weak")
            }
        } else {
            res.send("password doesnt match")
        }
    } else {
        console.log('user already exists');
    }
})
app.post('/signin', async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    console.log(username, email, password);
    const userToFind = await user.findOne({ where: { username: username } })
    if (userToFind && userToFind.email === email && userToFind.password === password) {
        console.log(userToFind.username);
        res.send('success')
    } else {
        console.log('user was not found');
        res.send('fault')
    }
})



app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })