import type { RequestHandler } from "express";

import legosetRepository from "./legosetRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Récupère le categoryId depuis l'URL
    const categoryId = req.params.categoryId;

    // Passe le categoryId à la méthode readAll pour filtrer les sets de LEGO
    const legoset = await legosetRepository.readAll(categoryId);

    res.json(legoset);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const legosetId = Number(req.params.id);
    const legoset = await legosetRepository.read(legosetId);

    if (legoset == null) {
      res.sendStatus(404);
    } else {
      res.json(legoset);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
