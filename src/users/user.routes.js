import { Router } from 'express';
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser
} from './user.controller.js';
import { authenticate, authorizeAdmin } from './auth.middleware.js';

const router = Router();

router.post('/', authenticate, authorizeAdmin, createUser);
router.get('/', authenticate, authorizeAdmin, getUsers);
router.get('/:id', authenticate, authorizeAdmin, getUserById);
router.put('/:id', authenticate, authorizeAdmin, updateUser);
router.delete('/:id', authenticate, authorizeAdmin, deleteUser);

export default router;
