// DEPENDENCIES ======================================
const express = require('express');
const db = require('./config/connection.js');

// DATA ==============================================

// APP/PORT ==========================================
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARE ========================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE =============================================

// INITIALIZATION ====================================
db.once('once', () => {
  app.listen(PORT, () => {
    console.log(`Now listening to http://localhost:${PORT}`);
  });
});
