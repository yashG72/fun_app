const express = require("express");
const router = express.Router();
const Apology = require("../models/Apology");

// ✅ POST route to save apology
router.post("/", async (req, res) => {
  try {
    const { id, image, message } = req.body;

    if (!id || !image || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newApology = new Apology({ id, image, message });
    await newApology.save();

    res.status(201).json({ message: "Apology saved successfully" });
  } catch (err) {
    console.error("Error saving apology:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ GET route to retrieve apology
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const apology = await Apology.findOne({ id });

    if (!apology) {
      return res.status(404).json({ error: "Apology not found" });
    }

    res.json(apology);
  } catch (err) {
    console.error("Error fetching apology:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
