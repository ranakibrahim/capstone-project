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

  //get hobbies with a specified limit of returned objects
  router.get("/limit/:limit", async (req, res) => {
    try {
      const requestedLimit = req.params.limit;
      const hobbiesData = await db("hobbies").select("*").from("hobbies").limit(requestedLimit);
      res.status(200).json(hobbiesData);
    } catch (e) {
      res.status(404).json({ error: e });
    }
  });

  //get one hobby
  router.get("/id/:id", async (req, res) => {
    try {
      
      const requestedId = Number(req.params.id);
      console.log(typeof requestedId)
      const hobbiesData = await db("hobbies").select("*").from("hobbies").where("id", requestedId);
      res.json(hobbiesData);
    } catch (e) {
      res.status(404).json("Hobby was not found.");
    }
  });

  return router;
};
