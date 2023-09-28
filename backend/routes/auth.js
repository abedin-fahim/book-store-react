const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs/promises'); // Use the `promises` version of the 'fs' module
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../middleware/auth-middleware');
const router = express.Router();
require('dotenv').config();
const usersFilePath = 'data/users.json';

const secretKey = process.env.SECRET_KEY;

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await findUserByUsername(username);

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a JWT token for the new user
    const token = jwt.sign({ username: newUser.username }, secretKey, {
      expiresIn: '1h',
    });

    // Create a new user object
    const newUser = {
      id: Date.now(),
      username,
      password: hashedPassword,
      token,
    };

    // Append the new user to the JSON file
    await appendUserToJsonFile(newUser);

    res.json({ message: 'User created successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while creating user' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ username: user.username }, secretKey, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while authenticating user' });
  }
});

// Helper function to find a user by username
async function findUserByUsername(username) {
  const users = await loadUsersFromJsonFile();
  console.log(await users);
  return users.find((user) => user.username === username);
}

// Helper function to load users from the JSON file
async function loadUsersFromJsonFile() {
  try {
    const data = await fs.readFile('../data/users.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper function to append a user to the JSON file
async function appendUserToJsonFile(newUser) {
  const users = await loadUsersFromJsonFile();
  users.push(newUser);

  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
}

module.exports = router;
