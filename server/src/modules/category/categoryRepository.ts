import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";
import type { CategoryProps } from "../../types/express";

class CategoryRepository {
  // The Rs of CRUD - Read operations
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from category");
    return rows as CategoryProps[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from category where id = ?",
      [id],
    );
    return rows[0] as CategoryProps;
  }
}

export default new CategoryRepository();
