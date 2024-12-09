import { Request, Response } from 'express';
const { MidtransService } = require('../services/midtransService'); 

export class TransactionController {
  private midtransService: any;

  constructor() {
    this.midtransService = new MidtransService();
  }

  public async createTransaction(req: Request, res: Response) {
    const { orderId, grossAmount, firstName, lastName, email, phone } = req.body;

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: grossAmount,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
      },
    };

    try {
      const transaction = await this.midtransService.createTransaction(parameter);
      return res.json(transaction);
    } catch (error: any) {
      console.error('Error:', error.message);

      return res.status(500).json({
        error: 'Failed to create transaction',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,  
      });
    }
  }
}
