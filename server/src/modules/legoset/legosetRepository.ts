import databaseClient from "../../../database/client";
import type { Result } from "../../../database/client";
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

  async create(legoSet: Omit<LegosetProps, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into legoset (name, set_number, number_of_pieces, description, img_src, category_id) values (?, ?, ?, ?, ?, ?)",
      [
        legoSet.name,
        legoSet.set_number,
        legoSet.number_of_pieces,
        legoSet.description,
        legoSet.img_src,
        legoSet.category_id,
      ],
    );
    return result.insertId;
  }
}

export default new LegosetRepository();
