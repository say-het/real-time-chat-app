import express from 'express'
import protectRoute from '../middleware/protectRoute.js';
import { getUsersFromSidebar } from '../controller/user.controller.js';

const router = express.Router();

router.get("/",protectRoute,getUsersFromSidebar)

export default router;