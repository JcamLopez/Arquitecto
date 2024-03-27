import { Router } from 'express'
import { LoginControllers } from '../controllers/LoginControllers.js'
import { Verify_token } from '../models/Token.js'
const router = Router()
const Login = new LoginControllers()

router.post('/signin', Login.Post_Signin)
router.post('/token', Verify_token)


router.post('/signup', Login.Post_Signup)







export default router