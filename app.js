const express = require('express');
const app = express();
const employeeRoutes = require('./routes/employeeRoutes');
const sequelize = require('./database/connection');
const config = require('./config');
const Employee = require('./models/employee');
const cors = require('cors');

app.use(express.json());
app.use('/api', employeeRoutes);

app.use(
  cors({
    origin: 'http://localhost:3000', 
  })
);


const PORT = 5000;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database successfully.');

    Employee.sync({ alter: true }).then(() => {
      console.log('Employee model synced with the database.');

      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    });
  })
  .catch((error) => {
    console.log('Error connecting to the database:', error);
  });
