// DEPENDENCIES ======================================
const express = require('express');

// DATA ==============================================

// APP/PORT ==========================================
const port = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE ========================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE =============================================

// INITIALIZATION ====================================
