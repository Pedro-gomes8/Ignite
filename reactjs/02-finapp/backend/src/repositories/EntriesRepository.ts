import { DashboardEntry } from "../model/DashboardEntry";

interface ICreateEntryDTO {
  title: string;
  price: number;
  category: string;
}

class EntriesRepository {
  private entries: DashboardEntry[];
  private balance: number;

  constructor() {
    this.entries = [];
    this.balance = 0;
  }

  create({ title, price, category }: ICreateEntryDTO): void {
    const entry = new DashboardEntry();
    Object.assign(entry, { title, price, category });
    this.#setBalance(price);
    this.entries.push(entry);
  }

  #setBalance(price: number): void {
    if (this.balance + price < 0) throw new Error("Not enough funds");
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
