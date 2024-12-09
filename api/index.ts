// app.ts

const cors = require('cors');
const express = require('express'); // Using require
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables
const transactionRoutes = require('./routes/transactionRoutes'); // Using require


const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());


// Use transaction routes
app.use('/api', transactionRoutes);

// Default route
app.get('/', (req: any, res: any) => {
  res.send('Welcome to Midtrans Integration API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;