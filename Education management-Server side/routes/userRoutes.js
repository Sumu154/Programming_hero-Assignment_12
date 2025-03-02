const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserById, getUserByEmail, updateUserRoleAdmin, getUserRole } = require('../controllers/userController');


// create a marathon -> post
router.post('/users', createUser);
// show all users -> get
router.get('/users', getUsers);
// get marathon by id
router.get('/users/:user_id', getUserById);
// get users by email
router.get('/users/user_email/:user_email', getUserByEmail) //ekta specific email er info

// get user role
router.get('/users/:user_email/user_role', getUserRole)
// get user role
router.patch('/users/:user_email/user_role', updateUserRoleAdmin)


module.exports = router;