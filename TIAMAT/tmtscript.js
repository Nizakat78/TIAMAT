const express = require('express');
const app = express();
const port = 3000;

// Mock database for storing TMT balances
const userBalances = {};

// Middleware to parse JSON bodies
app.use(express.json());

// API Endpoint to fetch TMT balance
app.get('/api/tmt-balance/:walletAddress', (req, res) => {
    const { walletAddress } = req.params;
    const balance = userBalances[walletAddress] || 0;
    res.json({ walletAddress, balance });
});

// API Endpoint to update TMT balance
app.post('/api/tmt-balance', (req, res) => {
    const { walletAddress, amount } = req.body;

    if (typeof walletAddress !== 'string' || typeof amount !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }

    userBalances[walletAddress] = (userBalances[walletAddress] || 0) + amount;
    res.json({ walletAddress, balance: userBalances[walletAddress] });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
