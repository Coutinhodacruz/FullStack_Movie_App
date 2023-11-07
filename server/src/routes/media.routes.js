import express from "express";
import mediaController from "../controller/media.controller.js";

const router = express.Router({ mergeParams: true })

router.get("/search", mediaController.search);

router.get("/genres", mediaController.getGenres);

router.get("/datail/:mediaId", mediaController.getDetail);

router.get("/:mediaCategory", mediaController.getList);

export default router;