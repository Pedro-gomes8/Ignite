import { v4 as uuidv4 } from "uuid";

class DashboardEntry {
  title: string;
  price: string;
  category: string;
  transactionType: "deposit" | "withdrawal";
  createdAt?: Date;
  id?: string;

  constructor() {
    if (!this.id) this.id = uuidv4();
    if (!this.createdAt) this.createdAt = new Date();
  }
}

export { DashboardEntry };
