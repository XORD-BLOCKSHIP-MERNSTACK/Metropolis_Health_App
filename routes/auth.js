import express from 'express';

// Controllers
import {
  register,
  login,
  forgotpassword,
  resetpassword,
} from '../controllers/auth.js';

const router = express.Router();

// Routes
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/forgotpassword').post(forgotpassword);
router.route('/resetpassword/:resetToken').post(resetpassword);

export default router;
