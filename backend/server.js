const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/error");
const connectDB = require("./config/db");
const {
  viewAppDetails,
  allApplication,
  registeredApplication,
  newApplication,
  pendingApplication,
  blockedApplication,
  changingStatus,
} = require("./controller/adminControllers");
const {
  getBookingSlots,
  getApplications,
  slotUpdate,
  slotDuplicate,
} = require("./controller/slotControllers");
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalRoutes"));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/admin", require("./routes/adminroutes"));

app.use("/api/incubation", require("./routes/incubationRoutes"));
app.get("/newApplication", newApplication);
app.get("/pendingApplication", pendingApplication);
app.get("/registeredApplication", registeredApplication);
app.get("/blockedApplication", blockedApplication);
app.get("/allApplication", allApplication);
app.get("/allApps", allApplication);
app.post("/changingStatus", changingStatus);
app.get("/viewApplication/:id", viewAppDetails);

app.get("/getBookingSlots", getBookingSlots);
app.get("/getApplications", getApplications);
app.post("/slotUpdate", slotUpdate);
app.patch("/slotDuplicate", slotDuplicate);

app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));
