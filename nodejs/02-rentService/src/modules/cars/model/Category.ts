import { v4 as uuidv4 } from "uuid";

class Category {
  name: string;
  description: string;
  createdAt: Date;
  id?: string;

  constructor() {
    if (!this.id) this.id = uuidv4();
  }
}
export { Category };
