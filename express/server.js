const express = require("express");

const app = express();
//middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ msg: "Initial response for api" });
});
//define routes
app.use("/itemsIntake", require("./routes/recycle"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server started on port${PORT}`));
