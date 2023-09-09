const Employee = require("../models/employee"); // Import the Country model
const express = require("express");
const router = express.Router();

router.delete("/:name", async (req, res) => {
  try {
    const { name } = req.params; // Get the country name from the URL

    // Find the country by name and delete it
    const deletedEmployee = await Employee.findOneAndDelete({ name: name });

    if (!deletedEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.status(200).json({ message: "Deleted successfully" });
    // res.json(deletedEmployee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
