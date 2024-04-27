// DEPENDENCIES ======================================
const express = require('express');

// DATA ==============================================

// APP/PORT ==========================================
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARE ========================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTE =============================================

// INITIALIZATION ====================================
app.listen(PORT, () => {
  console.log(`Now listening to http://localhost:${PORT}`);
});
