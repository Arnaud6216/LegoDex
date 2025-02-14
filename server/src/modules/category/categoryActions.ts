import type { RequestHandler } from "express";

import categoryRepository from "./categoryRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    const category = await categoryRepository.readAll();

    res.json(category);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const categoryId = Number(req.params.id);
    const category = await categoryRepository.read(categoryId);

    if (category == null) {
      res.sendStatus(404);
    } else {
      res.json(category);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
