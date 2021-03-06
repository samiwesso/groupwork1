const route = require('express').Router();

const authorization = require('../auth/auth.js');
const users = require('../controllers/userController.js');

// unrestricted routes
route.post("/register", users.register);
route.post("/login", users.login);

// restricted routes
route.get("/all", users.getUsers);       // Get all users
route.get("/:id", users.getUser);        // Get specific user
route.put("/:id", users.updateUser);     // Update specific user
route.delete("/:id", users.deleteUser);  // Remove specific user


module.exports = route;