const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// get all contacts(get):
// create new contact(post):
// update a contact(put):
// delete a contact(delete):
// get one contact(get)

// POST
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    let newContact = new Contact(req.body);
    const response = await newContact.save();
    res.send({ response: response, message: "new contact added" });
  } catch (error) {
    console.log(error);
    res.status(400).send("can not save contact");
  }
});

// GET all contacts
router.get("/", async (req, res) => {
  try {
    const response = await Contact.find();
    console.log(response);
    res.send({ response: response, message: "get all contact" });
  } catch (error) {
    console.log(error);
    res.status(400).send("can not get contact");
  }
});
// get one contact:
router.get("/:id", async (req, res) => {
  try {
    const response = await Contact.findOne({ _id: req.params.id });
    res.send({ response: response, message: "get one contact" });
  } catch (error) {
    console.log(error);
    res.status(400).send("can not get contact");
  }
});

// delete one contact:
router.delete("/:id", async (req, res) => {
  try {
    const response = await Contact.deleteOne({ _id: req.params.id });
    response.deletedCount
      ? res.send({ message: "contact deleted" })
      : res.send({ message: "contact already deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).send("can not delete contact");
  }
});
// Update contact (put)
router.put("/:id", async (req, res) => {
  try {
    const response = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    response.nModified
      ? res.send({ message: "contact updated" })
      : res.send({ message: "contact already updated" });
  } catch (error) {
    console.log(error);
    res.status(400).send("can not update contact");
  }
});
module.exports = router;
