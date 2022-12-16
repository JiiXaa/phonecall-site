import express from 'express';
const router = express.Router();

import {
  registerUser,
  loginUser,
  updateUser,
} from '../controllers/authController.js';

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/update').post(updateUser);

export default router;
