// pages/api/auth.js

import express from 'express'
import session from 'express-session'
import passport from 'passport'
import LnurlAuth from 'passport-lnurl-auth'

const app = express()

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
)

app.use(passport.initialize())
app.use(passport.session())

const users = new Map()

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  const user = users.get(id)
  done(null, user || null)
})

passport.use(
  new LnurlAuth.Strategy((linkingPublicKey, done) => {
    let user = users.get(linkingPublicKey)

    if (!user) {
      user = { id: linkingPublicKey }
      users.set(linkingPublicKey, user)
    }

    done(null, user)
  })
)

app.use(passport.authenticate('lnurl-auth'))

app.get('/', (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      message: 'Unauthorized',
    })
  }

  res.json({
    message: 'Logged in successfully',
  })
})

app.get(
  '/login',
  (req, res, next) => {
    if (req.user) {
      return res.redirect('/')
    }

    next()
  },
  new LnurlAuth.Middleware({
    callbackUrl: 'http://localhost:3000/api/auth/login/callback',
    cancelUrl: 'http://localhost:3000',
  })
)

export default app
