const express = require("express");
const router = express.Router();
const {
  createIncubation,
  getIncubation,
  getNotOpened,
  openedToClose,
} = require("../controller/incubationController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createIncubation);
router.get("/", protect, getIncubation);
router.get("/notOpenedApps", getNotOpened);

router.get("/openedToclose", openedToClose);

module.exports = router;
