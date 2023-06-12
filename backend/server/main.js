const express = require('express')
const cors = require('cors')
const sequelize = require('../database/database')
const user = require('../database/models/User')
const axios = require('axios')
require('dotenv').config()
const { authToken, generateToken, generateRefreshToken } = require('../utils/helperJWT')
const app = express()
const PORT = 30010

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
    // console.log(req.body);
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
                // console.log(newUser);
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
    const email = req.body.email;
    const password = req.body.password;
    // console.log(username, email, password);
    const userToFind = await user.findOne({ where: { email: email } })
    const username = userToFind.username
    if (userToFind && userToFind.password === password) {
        const user = { username: username, email: email }
        const token = generateToken(user)
        const refreshToken = generateRefreshToken(user)
        res.json({ user: { username, email }, token: token, refreshToken: refreshToken })
    } else {
        console.log('user was not found');
        res.send('fault')
    }
})

// app.post('/refreshAccess', (req, res) => {
//     const refreshToken = req.body.token
//     if (!token) return res.status(401).json('You are not authenticated')
//     jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//         if (err) return res.status(400).json(err)
//         res.status(200).json({ token: generateToken(user), refreshToken: generateRefreshToken(user) })
//     })

// })

app.get('/isAuthorized', authToken, (req, res) => {
    return res.status(200).json({ isAuthorized: true, user: req.user })
})
//
app.get('/infoline', (req, res) => {
    axios.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.CMC_API_GLOBAL_KEY,
        }
    }).then((response) => {
        res.send(response.data);
    }).catch(err => {
        console.log(err);
    })
}
)
app.get('/cryptoinfo', (req, res) => {
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100', {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.CMC_API_GLOBAL_KEY,
        }
    }).then((response) => {
        res.send(response.data);
    }).catch(err => {
        console.log(err);
    })
}
)

app.post('/addtowatchlist', authToken, async (req, res) => {
    const coin = req.body.coin
    const username = req.user.username
    const userWatchlist = await user.findOne({ where: { username: username } })
    const watchListArray = userWatchlist.dataValues.watchlist.watchlist
    watchListArray.push(coin)
    console.log(watchListArray);
    user.update(
        { watchlist: { watchlist: watchListArray } },
        { where: { username: username } }
    )
    res.send("added")
}
)
app.delete('/deleteWatchlist/:id', authToken, async (req, res) => {
    const username = req.user.username
    const userWatchlist = await user.findOne({ where: { username: username } })
    // console.log(userWatchlist.dataValues.watchlist);
    res.send(userWatchlist.dataValues.watchlist)
console.log(1);
}
)
app.put('/updateWatchlist/:id', authToken, async (req, res) => {
    const username = req.user.username
    const userWatchlist = await user.findOne({ where: { username: username } })
    // console.log(userWatchlist.dataValues.watchlist);
    res.send(userWatchlist.dataValues.watchlist)

}
)
app.get('/getWatchlist', authToken, async (req, res) => {
    const username = req.user.username
    const userWatchlist = await user.findOne({ where: { username: username } })
    // console.log(userWatchlist.dataValues.watchlist);
    res.send(userWatchlist.dataValues.watchlist)

}
)
app.post('/addtoPortfolio', authToken, async (req, res) => {
    const coin = req.body.coin
    const username = req.user.username
    const userWatchlist = await user.findOne({ where: { username: username } })
    const watchListArray = userWatchlist.dataValues.watchlist.watchlist
    watchListArray.push(coin)
    console.log(watchListArray);
    user.update(
        { watchlist: { watchlist: watchListArray } },
        { where: { username: username } }
    )
    res.send("added")
}
)
app.delete('/deletePortfolio/:id', authToken, async (req, res) => {
    const username = req.user.username
    const userWatchlist = await user.findOne({ where: { username: username } })
    // console.log(userWatchlist.dataValues.watchlist);
    res.send(userWatchlist.dataValues.watchlist)

}
)
app.put('/updatePortfolio/:id', authToken, async (req, res) => {
    const username = req.user.username
    const userWatchlist = await user.findOne({ where: { username: username } })
    // console.log(userWatchlist.dataValues.watchlist);
    res.send(userWatchlist.dataValues.watchlist)

}
)
app.get('/getPortfolio', authToken, async (req, res) => {
    const username = req.user.username
    const userWatchlist = await user.findOne({ where: { username: username } })
    // console.log(userWatchlist.dataValues.watchlist);
    res.send(userWatchlist.dataValues.watchlist)

}
)



app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })