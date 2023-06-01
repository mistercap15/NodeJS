const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const cors = require('cors');

router.use(cors()); 

// Create Employee
router.post('/employees', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// List Employees 
router.get('/employees', async (req, res) => {
  try {
    const { page, limit } = req.query;
    const offset = (page - 1) * limit;

    const employees = await Employee.findAll({
      offset: offset,
      limit: parseInt(limit),
    });

    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Employee
router.put('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Employee.update(req.body, {
      where: { id: id },
    });

    if (updated) {
      res.status(200).json({ message: 'Employee updated successfully' });
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Employee
router.delete('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Employee.destroy({
      where: { id: id },
    });

    if (deleted) {
      res.status(204).json({ message: 'Employee deleted successfully' });
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Employee
router.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByPk(id);

    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
