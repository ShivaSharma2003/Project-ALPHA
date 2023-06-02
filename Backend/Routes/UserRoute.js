import express from 'express'
import SignupUser from '../Controller/User/UserSignup.js';
import UserLogin from '../Controller/User/UserLogin.js';

const router = express.Router()

router.post('/signup', SignupUser)
router.post('/login' , UserLogin)


export default router;