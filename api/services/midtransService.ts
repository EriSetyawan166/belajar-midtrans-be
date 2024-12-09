// services/midtransService.ts
const midtransClient: any = require('midtrans-client'); // Using require for midtrans-client

export class MidtransService {
  private snap: any;

  constructor() {
    this.snap = new midtransClient.Snap({
      isProduction: process.env.NODE_ENV === 'production', // Dynamically set based on environment
      serverKey: process.env.MIDTRANS_SERVER_KEY || '',   // Use the server key from .env
    });
  }

  // Create a transaction with the provided parameters
  public createTransaction(parameter: object) {
    return this.snap.createTransaction(parameter);
  }
}
