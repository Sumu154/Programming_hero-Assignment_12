const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserById, getUserByEmail, updateUserRoleAdmin } = require('../controllers/userController');


// create a marathon -> post
router.post('/users', createUser);
// show all users -> get
router.get('/users', getUsers);
// get marathon by id
router.get('/users/:user_id', getUserById);
// get users by email
router.get('/users/email/:user_email', getUserByEmail) //ekta specific email er info
// get users by email
router.patch('/users/email/:user_email/user_role', updateUserRoleAdmin)


module.exports = router;