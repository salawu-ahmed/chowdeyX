import { Router } from "express";
import { sample_users } from "../../data.js";
import jwt from 'jsonwebtoken'
import { BAD_REQUEST } from "../constants/httpStatus.js";

const router = Router()

router.post('/login', (req, res) => {
    const { email, password } = req.body
    const user = sample_users.find(
        user => user.email === email && user.password === password
    )
    if (user) {
        res.send(generateResponseToken(user))
        return
    }
    res.status(BAD_REQUEST).send('username or email is invalid')
})

const generateResponseToken = (user) => {
    const token = jwt.sign(
        {
            id: id,
            email: user.email,
            isAdmin: user.isAdmin
        },
        'somerandomtext',
        {
            expiresIn: '30d'
        }
    )
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
        address: user.address,
        token
    }
}

export default router