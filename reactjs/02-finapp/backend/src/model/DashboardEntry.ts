import { v4 as uuidv4 } from "uuid";

class DashboardEntry {
  title: string;
  price: string;
  category: string;
  date?: Date;
  id?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.date = new Date();
    }
  }
}

export { DashboardEntry };
