// routes/transactionRoutes.ts

const { Router } = require('express'); // Using require
const { TransactionController } = require('../controllers/transactionController'); // Using require

const router = Router();
const transactionController = new TransactionController();

// Route to create a transaction
router.post('/transaction', transactionController.createTransaction.bind(transactionController));

module.exports = router; // Exporting the router
