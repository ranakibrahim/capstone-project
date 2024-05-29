const express = require("express");
const router = express.Router();

module.exports = (db) => {
  //get all hobbies
  router.get("/", async (req, res) => {
    try {
      const hobbiesData = await db("hobbies").select("hobbies.*");
      res.status(200).json(hobbiesData);
    } catch (err) {
      res.status(404).send(`Error retrieving Inventory: ${err}`);
    }
  });

  // //get hobbies with a specified limit of returned objects
  // router.get("/limit/:limit", (req, res) => {
  //   try {
  //     const hobbies = readHobbiesFile();
  //     const requestedLimit = req.params.limit;
  //     const requestedArray = hobbies.slice(0, requestedLimit);
  //     res.status(200).json(requestedArray);
  //     if (!requestedArray) {
  //       return res.status(500).json({ error: "Server error." });
  //     }
  //   } catch (e) {
  //     res.status(404).json({ error: e });
  //   }
  // });

  // //get one hobby
  // router.get("/:id", (req, res) => {
  //   try {
  //     const hobbies = readHobbiesFile();
  //     const requestedId = String(req.params.id);
  //     const requestedHobby = hobbies.find((hobby) => hobby.id == requestedId);
  //     res.json(requestedHobby);
  //     if (!requestedHobby) {
  //       return res.status(500).json({ error: "Server error." });
  //     }
  //   } catch (e) {
  //     res.status(404).json("Hobby was not found.");
  //   }
  // });

  return router;
};
