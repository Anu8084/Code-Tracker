const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Add this line to connect to the database
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');

dotenv.config();
connectDB(); // Connect to the database

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/auth', authRoutes); // Authentication Routes (Register, Login)
app.use('/api/profile', profileRoutes); // Profile Routes (Save, Fetch Profiles)

// Port Setup
const PORT = process.env.PORT || 5000;
app.get('/api/test', (req, res) => {
    res.status(200).json({ message: 'Backend deployed successfully 🎉' });
});


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
