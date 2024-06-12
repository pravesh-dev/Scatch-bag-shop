const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
    router.post("/create", async (req, res) => {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      return res
        .status(500)
        .send("You don't have permission to create the owner");
    }

    let {fullName, email, password} = req.body;

    let createdOwner = await ownerModel.create({
      fullName,
      email,
      password
    });
    res.send('holi')
    res.status(201).send(createdOwner);
});
}

router.get("/", (req, res) => {
  res.send("owner route working");
});
module.exports = router;
