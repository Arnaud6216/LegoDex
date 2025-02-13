import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define category-related routes
import categoryActions from "./modules/category/categoryActions";

router.get("/api/category", categoryActions.browse);
router.get("/api/category/:id", categoryActions.read);
/* ************************************************************************* */

// Define legoset-related routes
import legosetActions from "./modules/legoset/legosetActions";

router.get("/api/legoset/:categoryId", legosetActions.browse);
router.get("/api/legoset/:id", legosetActions.read);
router.post("/api/legoset/add", legosetActions.add);

/* ************************************************************************* */

export default router;
