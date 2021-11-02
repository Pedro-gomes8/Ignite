import { DashboardEntry } from "../model/DashboardEntry";

interface ICreateEntryDTO {
  title: string;
  price: number;
  category: string;
  transactionType: "deposit" | "withdrawal";
}

class EntriesRepository {
  private entries: DashboardEntry[];
  private balance: number;

  constructor() {
    this.entries = [];
    this.balance = 0;
  }

  create({ title, price, category, transactionType }: ICreateEntryDTO): void {
    const entry = new DashboardEntry();
    Object.assign(entry, { title, price, category, transactionType });
    this.#setBalance(price, transactionType);
    this.entries.push(entry);
  }

  #setBalance(price: number, transactionType: string): void {
    if (transactionType === "withdrawal" && this.balance - price < 0) {
      throw new Error("Not enough funds");
    }
    this.balance += price;
  }
  getBalance(): number {
    return this.balance;
  }
  getAllEntries(): DashboardEntry[] {
    return this.entries;
  }
}
export { EntriesRepository };
