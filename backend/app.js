const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { authenticateToken } = require('./middleware/auth-middleware');
const eventsRoute = require('./routes/events');
const protectedRoutes = require('./routes/protected');
const authRoutes = require('./routes/auth'); // Import the combined auth route
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
// app.use(morgan('combined'));

// Routes as middleware
app.use(eventsRoute);
app.use('/api', protectedRoutes);
app.use('/api', authRoutes);

// Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
