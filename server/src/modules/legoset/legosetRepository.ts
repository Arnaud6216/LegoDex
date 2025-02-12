import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";
import type { LegosetProps } from "../../types/express";

class LegosetRepository {
  // The Rs of CRUD - Read operations
  async readAll(categoryId: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM legoset WHERE category_id = ?",
      [categoryId],
    );
    return rows as LegosetProps[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from legoset where id = ?",
      [id],
    );
    return rows[0] as LegosetProps;
  }
}

export default new LegosetRepository();
