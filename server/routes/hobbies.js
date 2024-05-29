const fs = require("node:fs");
const express = require("express");
const router = express.Router();

//get all hobbies
router.get("/", (req, res) => {
  try {
    const hobbies = readHobbiesFile();
    res.status(200).json(hobbies);
    if (!hobbies) {
      return res.status(500).json({ error: "Server error." });
    }
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

//get hobbies with a specified limit of returned objects
router.get("/limit/:limit", (req, res) => {
  try {
    const hobbies = readHobbiesFile();
    const requestedLimit = req.params.limit;
    const requestedArray = hobbies.slice(0, requestedLimit);
    res.status(200).json(requestedArray);
    if (!requestedArray) {
      return res.status(500).json({ error: "Server error." });
    }
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

//get one hobby
router.get("/:id", (req, res) => {
  try {
    const hobbies = readHobbiesFile();
    const requestedId = String(req.params.id);
    const requestedHobby = hobbies.find((hobby) => hobby.id == requestedId);
    res.json(requestedHobby);
    if (!requestedHobby) {
      return res.status(500).json({ error: "Server error." });
    }
  } catch (e) {
    res.status(404).json("Hobby was not found.");
  }
});

function readHobbiesFile() {
  const data = fs.readFileSync("./data/hobbies.json");
  const parsedData = JSON.parse(data);
  return parsedData;
}

module.exports = router;
